# SignBot — demo static web app

This is a small demo static site called SignBot. It demonstrates:

- Webcam-based hand detection using MediaPipe Hands (CDN).
- Simple heuristic gesture-to-word mapping for a few demo words.
- Text-to-speech in English and Hindi (Web Speech API).
- Speech recognition (browser) to detect spoken words and show sign hints.

Important: This is a prototype for learning and demo only. For production you'd use an ML classifier trained on sign language datasets (or use pose/hand model fine-tuning) and proper localization.

How to run

1. Open `index.html` in Chrome (or Edge) that supports WebRTC, MediaPipe CDN, and Web Speech APIs.
2. Allow camera access when prompted.
3. Try the demo words: hii, thumbs up.

Demo flows

- Camera -> detects simple gestures and will try to guess one of the demo words.
- Speak using "Start Speech Recognition" -> if the recognized speech contains a demo word, SignBot shows the sign hint and speaks it in the chosen language.
- Type text in the "Text to Sign" box and click "Show Sign" to see an animated hand emoji (for supported words).

Notes & next steps

- The gesture detection is rule-based and intentionally simplistic — replace with a trained classifier for real accuracy.
- For Hindi TTS quality, install a Hindi-capable voice on your OS or use a cloud TTS provider.
- To convert text to sign animations you can add a sign sprite library or short video clips and play them for each word.
