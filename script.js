// --- SignBot: clean stable version ---
// Hand gesture → speech + avatar animation

const videoElement = document.getElementById("input_video");
const canvasElement = document.getElementById("output_canvas");
const canvasCtx = canvasElement.getContext("2d");
const cameraStatus = document.getElementById("cameraStatus");
const detectedText = document.getElementById("detectedText");
const lastSpoken = document.getElementById("lastSpoken");
const startRecBtn = document.getElementById("startRec");
const speakTypedBtn = document.getElementById("speakText");
const textToSignInput = document.getElementById("textToSign");
const toSignBtn = document.getElementById("toSign");
const ttsLangSelect = document.getElementById("ttsLang");

// avatar parts
const thumbRect = document.getElementById("thumb");
const indexRect = document.getElementById("indexFinger");
const middleRect = document.getElementById("middleFinger");
const ringRect = document.getElementById("ringFinger");
const pinkyRect = document.getElementById("pinkyFinger");
const avatarRing = document.getElementById("avatarRing");

const CONFIG = {
  maxNumHands: 1,
  minDetectionConfidence: 0.6,
  minTrackingConfidence: 0.6,
  smoothingWindow: 4,
  stableFramesRequired: 6,
};

let landmarkBuffer = [];
let lastStable = null;
let stableCount = 0;

// Environment sanity checks to help when camera won't start
if (location.protocol === "file:") {
  cameraStatus.textContent =
    "Serve files over http:// or https:// — start a local server (see README)";
}
if (typeof Camera === "undefined") {
  cameraStatus.textContent =
    "MediaPipe Camera not loaded. Check script includes in index.html";
}
if (typeof Hands === "undefined") {
  cameraStatus.textContent =
    "MediaPipe Hands not loaded. Check script includes in index.html";
}

// --- Speech ---
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = ttsLangSelect.value || "en-US";
  const voices = speechSynthesis.getVoices();
  if (voices && voices.length) {
    for (const v of voices)
      if (v.lang && v.lang.startsWith(u.lang.split("-")[0])) {
        u.voice = v;
        break;
      }
  }
  try {
    speechSynthesis.cancel();
  } catch (e) {}
  speechSynthesis.speak(u);
  lastSpoken.textContent = `${new Date().toLocaleTimeString()}: ${text}`;
}

// --- Helpers ---
function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z || 0) - (b.z || 0));
}

function smoothedLandmarks() {
  if (!landmarkBuffer.length) return null;
  const L = landmarkBuffer[0].length;
  const out = [];
  for (let i = 0; i < L; i++) {
    let sx = 0,
      sy = 0,
      sz = 0;
    for (const f of landmarkBuffer) {
      sx += f[i].x;
      sy += f[i].y;
      sz += f[i].z || 0;
    }
    out.push({
      x: sx / landmarkBuffer.length,
      y: sy / landmarkBuffer.length,
      z: sz / landmarkBuffer.length,
    });
  }
  return out;
}

function fingerStates(landmarks) {
  const wrist = landmarks[0];
  const tips = {
    thumb: landmarks[4],
    index: landmarks[8],
    middle: landmarks[12],
    ring: landmarks[16],
    pinky: landmarks[20],
  };
  const pip = {
    thumb: landmarks[2],
    index: landmarks[6],
    middle: landmarks[10],
    ring: landmarks[14],
    pinky: landmarks[18],
  };
  const st = {};
  for (const k of Object.keys(tips)) {
    const dTip = dist(tips[k], wrist);
    const dPip = dist(pip[k], wrist);
    st[k] = dTip > dPip * 1.05;
  }
  return st;
}

function recognizeGesture(states, landmarks) {
  if (!landmarks) return null;
  if (
    states.thumb &&
    !states.index &&
    !states.middle &&
    !states.ring &&
    !states.pinky
  ) {
    if (landmarks[4].y < landmarks[0].y) return "thumbs up";
  }
  if (
    states.thumb &&
    states.index &&
    states.middle &&
    states.ring &&
    states.pinky
  )
    return "hii";
  return null;
}

// --- Avatar ---
function animateAvatarFor(gesture) {
  avatarRing.style.boxShadow = "0 0 30px rgba(80,160,255,0.08)";
  setTimeout(() => (avatarRing.style.boxShadow = "none"), 400);

  if (!gesture) {
    detectedText.textContent = "—";
    thumbRect.removeAttribute("transform");
    indexRect.setAttribute("height", 60);
    middleRect.setAttribute("height", 65);
    ringRect.setAttribute("height", 60);
    pinkyRect.setAttribute("height", 50);
    return;
  }

  detectedText.textContent = gesture;

  if (gesture === "thumbs up") {
    thumbRect.setAttribute("transform", "rotate(-50 119 115)");
    indexRect.setAttribute("height", 14);
    middleRect.setAttribute("height", 14);
    ringRect.setAttribute("height", 14);
    pinkyRect.setAttribute("height", 14);
  } else if (gesture === "hii") {
    thumbRect.setAttribute("transform", "rotate(-10 119 115)");
    indexRect.setAttribute("height", 72);
    middleRect.setAttribute("height", 78);
    ringRect.setAttribute("height", 72);
    pinkyRect.setAttribute("height", 62);
  }
}

// --- MediaPipe Results ---
async function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  if (!results.multiHandLandmarks || !results.multiHandLandmarks.length) {
    landmarkBuffer = [];
    stableCount = 0;
    animateAvatarFor(null);
    cameraStatus.textContent = "No hand";
    canvasCtx.restore();
    return;
  }

  const landmarks = results.multiHandLandmarks[0];
  landmarkBuffer.push(landmarks.map((l) => ({ ...l })));
  if (landmarkBuffer.length > CONFIG.smoothingWindow) landmarkBuffer.shift();

  const smooth = smoothedLandmarks();
  cameraStatus.textContent = "Hand detected";

  if (window.drawConnectors && window.HAND_CONNECTIONS) {
    try {
      drawConnectors(canvasCtx, smooth, window.HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 2,
      });
      drawLandmarks(canvasCtx, smooth, { color: "#FF0066", lineWidth: 1 });
    } catch (e) {}
  }

  const st = fingerStates(smooth);
  const g = recognizeGesture(st, smooth);

  if (g && g === lastStable) stableCount++;
  else if (g && g !== lastStable) {
    lastStable = g;
    stableCount = 1;
  } else {
    lastStable = null;
    stableCount = 0;
  }

  if (stableCount >= CONFIG.stableFramesRequired) {
    animateAvatarFor(lastStable);
    if (!onResults._lastSpokenAt) onResults._lastSpokenAt = 0;
    if (!onResults._lastLabel) onResults._lastLabel = null;
    const now = Date.now();
    if (
      onResults._lastLabel !== lastStable ||
      now - onResults._lastSpokenAt > 1500
    ) {
      speak(lastStable);
      onResults._lastLabel = lastStable;
      onResults._lastSpokenAt = now;
    }
    stableCount = CONFIG.stableFramesRequired;
  }

  canvasCtx.restore();
}

// --- MediaPipe Setup ---
const hands = new Hands({
  locateFile: (f) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`,
});
hands.setOptions({
  maxNumHands: CONFIG.maxNumHands,
  modelComplexity: 1,
  minDetectionConfidence: CONFIG.minDetectionConfidence,
  minTrackingConfidence: CONFIG.minTrackingConfidence,
});
hands.onResults(onResults);

// --- Camera ---
let camera = null;
async function startCamera() {
  canvasElement.width = 640;
  canvasElement.height = 480;
  cameraStatus.textContent = "Starting camera…";
  camera = new Camera(videoElement, {
    onFrame: async () => await hands.send({ image: videoElement }),
    width: 640,
    height: 480,
  });
  await camera.start();
  cameraStatus.textContent = "Camera running";
}

// --- Buttons ---
startRecBtn.addEventListener("click", async () => {
  try {
    await startCamera();
    startRecBtn.textContent = "Running";
    startRecBtn.disabled = true;
  } catch (e) {
    console.error(e);
    cameraStatus.textContent = "Camera error";
  }
});

speakTypedBtn.addEventListener("click", () => {
  const t = textToSignInput.value.trim();
  if (t) speak(t);
});

toSignBtn.addEventListener("click", () => {
  const text = (textToSignInput.value || "").toLowerCase();
  if (text.includes("thumb")) animateAvatarFor("thumbs up");
  else if (text.includes("hi") || text.includes("hello"))
    animateAvatarFor("hii");
  else detectedText.textContent = "Unsupported";
});

window.speechSynthesis.getVoices();
console.log("SignBot ready.");

// Try to auto-start camera on load to make testing easier.
// If this fails (permissions or no device), we'll show a helpful message in #cameraStatus.
window.addEventListener("load", async () => {
  // avoid auto-start if page served over file:// (not allowed in some browsers)
  if (location.protocol === "file:") return;
  try {
    await startCamera();
    startRecBtn.disabled = true;
    startRecBtn.textContent = "Running";
    cameraStatus.textContent = "Camera running (auto-start)";
  } catch (err) {
    console.warn("Auto camera start failed:", err);
    // Provide actionable message
    if (err && err.name === "NotAllowedError")
      cameraStatus.textContent =
        "Camera access denied. Allow camera permission in browser.";
    else if (err && err.name === "NotFoundError")
      cameraStatus.textContent = "No camera found. Attach a camera and retry.";
    else
      cameraStatus.textContent =
        "Camera not started — click Start Recognition. " +
        (err && err.message ? err.message : "");
  }
});
