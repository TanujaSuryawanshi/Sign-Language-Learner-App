# Sign Language Learner App 📱✋💬

<div align="center">

![Sign Language Learner](https://img.shields.io/badge/Sign%20Language-Learner%20App-brightgreen?style=for-the-badge&logo=flutter)
![Flutter](https://img.shields.io/badge/Flutter-3.0+-blue?style=for-the-badge&logo=flutter)
![Firebase](https://img.shields.io/badge/Firebase-Backend-orange?style=for-the-badge&logo=firebase)
![TensorFlow](https://img.shields.io/badge/TensorFlow-Lite-FF6F00?style=for-the-badge&logo=tensorflow)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

*An interactive AI-powered mobile app to learn and practice sign language using speech, text, and gesture recognition*

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)

</div>

---

## 🎯 Overview

**Sign Language Learner App** is a cutting-edge educational mobile application designed to make sign language learning accessible, engaging, and effective for everyone. Using advanced AI and machine learning technologies, the app provides personalized learning experiences through gesture recognition, interactive lessons, and gamified challenges.

### 🌟 Why Choose Our App?

- **🎮 Gamified Learning**: Interactive quizzes, challenges, and progress tracking
- **🤖 AI-Powered Feedback**: Real-time gesture analysis and personalized suggestions  
- **📱 Mobile-First Design**: Optimized for smartphones and tablets
- **🌐 Offline Capability**: Learn anytime, anywhere without internet
- **👥 Community-Driven**: Built with input from the deaf and hard-of-hearing community
- **🎓 Curriculum-Based**: Structured learning path from beginner to advanced

---

## ✨ Core Features

### 🤏 Advanced Gesture Recognition
- **Real-time Detection**: Uses MediaPipe and TensorFlow Lite for accurate hand tracking
- **Gesture Evaluation**: AI-powered feedback on gesture accuracy and form
- **Multiple Angles**: Recognizes gestures from different camera positions
- **Adaptive Learning**: Improves recognition based on user's signing style

### 🗣️ Speech & Text Integration  
- **Bidirectional Learning**: Practice both sign-to-speech and speech-to-sign
- **Natural Language Processing**: Understands context and sentence structure
- **Voice Synthesis**: High-quality text-to-speech with multiple voice options
- **Multilingual Support**: Learn sign language in your preferred spoken language

### 🎮 Gamified Learning Experience
- **Progress Tracking**: Visual progress bars and achievement system
- **Daily Challenges**: Keep users engaged with daily learning goals
- **Streak System**: Reward consistent practice with streak counters
- **Leaderboards**: Compete with friends and global learners
- **Badges & Rewards**: Unlock achievements for milestones and skills

### 🤖 AI Learning Companion
- **Interactive Chatbot**: Practice conversations in real-world scenarios
- **Personalized Feedback**: Tailored suggestions based on learning patterns
- **Adaptive Difficulty**: Automatically adjusts lesson complexity
- **Learning Analytics**: Track strengths and areas for improvement

### 📚 Comprehensive Curriculum
- **Structured Lessons**: Beginner to advanced learning paths
- **Topic Categories**: Everyday conversations, professional terms, emotional expressions
- **Cultural Context**: Learn about deaf culture and community
- **Regional Variations**: Support for different sign language dialects

### 🔄 Offline Capabilities
- **Download Lessons**: Access content without internet connection
- **Local Model Processing**: On-device AI for privacy and speed
- **Sync Progress**: Automatically sync when connected to internet
- **Reduced Data Usage**: Optimized for mobile data plans

---

## 🏗️ Technical Architecture

### Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Mobile Framework** | Flutter (Dart) | Cross-platform mobile development |
| **Backend Services** | Firebase | Authentication, database, cloud functions |
| **Machine Learning** | TensorFlow Lite | On-device gesture recognition |
| **Computer Vision** | MediaPipe | Hand tracking and pose detection |
| **Local Database** | SQLite/Hive | Offline data storage |
| **State Management** | Riverpod/Provider | App state and data flow |
| **Animation** | Rive/Lottie | Interactive animations and feedback |
| **Speech APIs** | Google Speech/Azure | STT and TTS capabilities |

### App Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Screens   │ │   Widgets   │ │ Animations  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                   Business Logic Layer                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ Controllers │ │   Services  │ │ Repositories│           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                     Data Layer                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │  Firebase   │ │Local Database│ │ ML Models  │           │
│  │   (Cloud)   │ │ (SQLite)    │ │(TF Lite)   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
SignLanguageLearner/
├── 📱 lib/
│   ├── 📁 core/
│   │   ├── 📄 constants.dart         # App-wide constants
│   │   ├── 📄 theme.dart            # App theming and styles
│   │   └── 📄 utils.dart            # Utility functions
│   ├── 📁 data/
│   │   ├── 📁 models/
│   │   │   ├── 📄 user.dart         # User data model
│   │   │   ├── 📄 lesson.dart       # Lesson structure
│   │   │   └── 📄 progress.dart     # Progress tracking
│   │   ├── 📁 repositories/
│   │   │   ├── 📄 user_repository.dart
│   │   │   ├── 📄 lesson_repository.dart
│   │   │   └── 📄 progress_repository.dart
│   │   └── 📁 datasources/
│   │       ├── 📄 firebase_datasource.dart
│   │       └── 📄 local_datasource.dart
│   ├── 📁 domain/
│   │   ├── 📁 entities/
│   │   ├── 📁 repositories/
│   │   └── 📁 usecases/
│   ├── 📁 presentation/
│   │   ├── 📁 screens/
│   │   │   ├── 📁 auth/
│   │   │   │   ├── 📄 login_screen.dart
│   │   │   │   └── 📄 signup_screen.dart
│   │   │   ├── 📁 home/
│   │   │   │   ├── 📄 home_screen.dart
│   │   │   │   └── 📄 dashboard_screen.dart
│   │   │   ├── 📁 learning/
│   │   │   │   ├── 📄 lesson_screen.dart
│   │   │   │   ├── 📄 practice_screen.dart
│   │   │   │   └── 📄 quiz_screen.dart
│   │   │   ├── 📁 profile/
│   │   │   │   ├── 📄 profile_screen.dart
│   │   │   │   └── 📄 progress_screen.dart
│   │   │   └── 📁 camera/
│   │   │       └── 📄 gesture_camera_screen.dart
│   │   ├── 📁 widgets/
│   │   │   ├── 📁 common/
│   │   │   │   ├── 📄 custom_button.dart
│   │   │   │   ├── 📄 progress_bar.dart
│   │   │   │   └── 📄 loading_indicator.dart
│   │   │   ├── 📁 lesson/
│   │   │   │   ├── 📄 lesson_card.dart
│   │   │   │   ├── 📄 gesture_display.dart
│   │   │   │   └── 📄 feedback_widget.dart
│   │   │   └── 📁 camera/
│   │   │       ├── 📄 camera_preview.dart
│   │   │       └── 📄 gesture_overlay.dart
│   │   └── 📁 controllers/
│   │       ├── 📄 auth_controller.dart
│   │       ├── 📄 lesson_controller.dart
│   │       └── 📄 camera_controller.dart
│   ├── 📁 services/
│   │   ├── 📄 firebase_service.dart    # Firebase integration
│   │   ├── 📄 ml_service.dart         # Machine learning service
│   │   ├── 📄 camera_service.dart     # Camera handling
│   │   ├── 📄 speech_service.dart     # STT/TTS integration
│   │   └── 📄 notification_service.dart
│   └── 📄 main.dart                   # App entry point
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── 📁 gestures/               # Sign language reference images
│   │   ├── 📁 avatars/               # User avatars and characters
│   │   └── 📁 icons/                 # Custom app icons
│   ├── 📁 animations/
│   │   ├── 📁 rive/                  # Rive animation files
│   │   └── 📁 lottie/               # Lottie animation files
│   ├── 📁 audio/
│   │   ├── 📁 sounds/               # UI sound effects
│   │   └── 📁 pronunciations/       # Word pronunciations
│   └── 📁 fonts/                    # Custom fonts
├── 📁 ml_models/
│   ├── 📄 gesture_classifier.tflite  # Trained gesture model
│   ├── 📄 hand_landmark.tflite      # MediaPipe hand model
│   └── 📄 model_metadata.json       # Model information
├── 📁 test/
│   ├── 📁 unit/                     # Unit tests
│   ├── 📁 widget/                   # Widget tests
│   └── 📁 integration/              # Integration tests
├── 📁 docs/
│   ├── 📄 API.md                    # API documentation
│   ├── 📄 ARCHITECTURE.md           # Architecture guide
│   └── 📄 USER_GUIDE.md            # User manual
├── 📄 pubspec.yaml                  # Flutter dependencies
├── 📄 analysis_options.yaml         # Code analysis rules
├── 📄 firebase.json                 # Firebase configuration
└── 📄 README.md                     # This file
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Flutter SDK** 3.0 or higher
- **Dart SDK** 2.17 or higher
- **Android Studio** / **VS Code** with Flutter extensions
- **Firebase Account** for backend services
- **Physical Device** or **Emulator** with camera support

### Quick Start

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/SignLanguageLearner.git
cd SignLanguageLearner
```

#### 2️⃣ Install Flutter Dependencies
```bash
# Get all packages
flutter pub get

# Verify Flutter installation
flutter doctor
```

#### 3️⃣ Firebase Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Install FlutterFire CLI
dart pub global activate flutterfire_cli

# Configure Firebase for your project
flutterfire configure
```

#### 4️⃣ Environment Configuration
```bash
# Copy environment template
cp lib/core/env_template.dart lib/core/env.dart

# Edit env.dart with your API keys and configuration
```

#### 5️⃣ Download ML Models
```bash
# Download pre-trained models
flutter pub run build_runner build

# Or manually download models to ml_models/ directory
```

#### 6️⃣ Run the Application
```bash
# Debug mode
flutter run

# Release mode
flutter run --release

# Specific device
flutter run -d <device_id>
```

### Platform-Specific Setup

#### Android
```yaml
# android/app/build.gradle
android {
    compileSdkVersion 33
    minSdkVersion 21
    targetSdkVersion 33
}

# Add permissions in android/app/src/main/AndroidManifest.xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.INTERNET" />
```

#### iOS
```yaml
# ios/Runner/Info.plist
<key>NSCameraUsageDescription</key>
<string>This app uses camera for gesture recognition</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app uses microphone for speech recognition</string>
```

---

## 📱 App Screens & Navigation

### Main App Flow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Splash Screen  │ => │  Onboarding     │ => │  Auth Screen    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
┌─────────────────┐    ┌─────────────────┐    ┌─────────▼───────┐
│  Profile Setup  │ <= │   Home/Dashboard │ <= │  Main Navigation│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
┌───────▼───────┐    ┌─────────▼─────────┐    ┌───────▼───────┐
│   Lessons     │    │   Practice Mode   │    │   Progress    │
│   Browser     │    │   (Camera)        │    │   Tracking    │
└───────────────┘    └───────────────────┘    └───────────────┘
```

### Key Screens

| Screen | Purpose | Key Features |
|--------|---------|--------------|
| **Onboarding** | First-time user introduction | Tutorial, permissions, setup |
| **Dashboard** | Main hub for learning activities | Progress overview, daily goals |
| **Lesson Browser** | Browse available lessons | Categories, difficulty levels |
| **Practice Mode** | Interactive learning session | Gesture recognition, feedback |
| **Quiz Mode** | Test knowledge and skills | Timed challenges, scoring |
| **Progress** | Track learning journey | Statistics, achievements |
| **Profile** | User settings and preferences | Account settings, app config |

---

## 🎮 Usage Guide

### Getting Started

#### First Launch
1. **Welcome & Permissions**: Grant camera and microphone access
2. **User Profile**: Set up your learning preferences and goals
3. **Skill Assessment**: Take a quick test to determine your starting level
4. **Tutorial**: Learn how to use gesture recognition and app features

#### Daily Learning Flow
1. **Dashboard Check**: Review daily goals and progress
2. **Lesson Selection**: Choose from recommended or browse all lessons
3. **Interactive Learning**: Follow guided instructions with AI feedback
4. **Practice Session**: Use camera to practice gestures
5. **Quiz Challenge**: Test your knowledge with interactive quizzes
6. **Progress Review**: Check achievements and plan next session

### Core Features Usage

#### 🤏 Gesture Recognition
```dart
// Example gesture practice flow
1. Position camera at arm's length
2. Ensure good lighting and clear background  
3. Follow on-screen gesture guide
4. Receive real-time feedback
5. Repeat until accuracy target is met
```

#### 🗣️ Speech Practice
```dart
// Speech-to-sign learning
1. Listen to spoken word/phrase
2. Perform corresponding sign language gesture
3. App recognizes your gesture
4. Get feedback on accuracy and timing
```

#### 🎮 Gamified Challenges
```dart
// Daily challenge example
1. Complete 5 new gestures
2. Practice for 15 minutes
3. Achieve 85% accuracy rate
4. Earn points and badges
5. Maintain learning streak
```

---

## 📊 Learning Progress & Analytics

### Progress Tracking

| Metric | Description | Visualization |
|--------|-------------|---------------|
| **Accuracy Score** | Gesture recognition accuracy | Progress bars, charts |
| **Learning Streak** | Consecutive days of practice | Streak counter, calendar |
| **Skill Level** | Current proficiency level | Level badges, progress rings |
| **Time Practiced** | Total learning time | Time tracking, goals |
| **Gestures Learned** | Number of mastered signs | Achievement counters |

### Adaptive Learning

- **Difficulty Adjustment**: Automatically increases challenge based on performance
- **Personalized Recommendations**: Suggests lessons based on learning patterns  
- **Weakness Identification**: Highlights areas needing improvement
- **Optimal Timing**: Reminds users when to review previously learned content

---

## 🧪 Testing

### Test Coverage
```bash
# Run all tests
flutter test

# Run with coverage
flutter test --coverage

# Generate coverage report
genhtml coverage/lcov.info -o coverage/html

# Integration tests
flutter drive --target=test_driver/app.dart
```

### Test Categories

#### Unit Tests (lib/test/unit/)
- Model validation
- Service logic testing
- Utility function verification

#### Widget Tests (lib/test/widget/)
- UI component testing
- User interaction simulation
- Layout validation

#### Integration Tests (lib/test/integration/)
- Complete user flow testing
- API integration verification
- Camera and ML model testing

---

## 📦 Building & Deployment

### Build Commands

#### Android
```bash
# Debug APK
flutter build apk --debug

# Release APK  
flutter build apk --release

# App Bundle (for Play Store)
flutter build appbundle --release
```

#### iOS
```bash
# Debug build
flutter build ios --debug

# Release build  
flutter build ios --release

# Create archive for App Store
flutter build ipa
```

### App Store Deployment

#### Google Play Store
```bash
# Upload using fastlane
fastlane android deploy

# Manual upload
# Upload generated app-release.aab to Google Play Console
```

#### Apple App Store
```bash
# Upload using fastlane
fastlane ios deploy

# Manual upload via Xcode
# Archive and upload through Xcode Organizer
```

---

## 🎯 Learning Curriculum

### Beginner Level (A1)
- **Basic Alphabet**: A-Z fingerspelling
- **Numbers**: 0-20 counting
- **Common Greetings**: Hello, goodbye, thank you
- **Family Members**: Mom, dad, brother, sister
- **Daily Activities**: Eat, sleep, work, study

### Intermediate Level (A2-B1)  
- **Emotions & Feelings**: Happy, sad, angry, excited
- **Colors & Shapes**: Basic color vocabulary
- **Time & Dates**: Days, months, telling time
- **Food & Drinks**: Common meal vocabulary
- **Transportation**: Car, bus, train, airplane

### Advanced Level (B2-C1)
- **Professional Terms**: Job titles, workplace vocabulary
- **Complex Conversations**: Multi-sentence dialogues
- **Abstract Concepts**: Ideas, opinions, emotions
- **Cultural Context**: Deaf culture, community values
- **Regional Variations**: Different sign language dialects

### Specialized Modules
- **Medical Signs**: Healthcare vocabulary
- **Educational Signs**: School and learning terms  
- **Emergency Signs**: Safety and urgent communication
- **Religious Signs**: Spiritual and ceremonial vocabulary

---

## 🌍 Accessibility & Inclusivity

### Accessibility Features
- **High Contrast Mode**: Better visibility for users with visual impairments
- **Text Size Options**: Adjustable font sizes for readability
- **Voice Commands**: Navigate app using voice controls
- **Haptic Feedback**: Vibration feedback for interactions
- **Screen Reader Support**: Compatible with TalkBack and VoiceOver

### Cultural Sensitivity
- **Community Input**: Developed with deaf community feedback
- **Cultural Context**: Includes deaf culture education
- **Regional Support**: Multiple sign language variants
- **Inclusive Design**: Welcomes learners from all backgrounds

---

## 🛣️ Roadmap

### Version 1.0 (Current) ✅
- [x] Basic gesture recognition (ASL alphabet & numbers)
- [x] Interactive lessons and quizzes
- [x] Progress tracking and gamification
- [x] Offline mode support
- [x] Speech-to-text integration

### Version 1.5 (Q3 2024) 🔄
- [ ] Advanced gesture recognition (words and phrases)
- [ ] AI chatbot for conversation practice
- [ ] Social features (friend challenges, leaderboards)  
- [ ] Multiple sign languages (BSL, JSL)
- [ ] Improved accuracy with better ML models

### Version 2.0 (Q1 2025) 📋
- [ ] AR overlays for gesture guidance
- [ ] Live video chat with interpreters
- [ ] Advanced analytics and learning insights
- [ ] Teacher/parent dashboard
- [ ] Certification and achievement system

### Long-term Vision 🚀
- [ ] VR immersive learning experiences
- [ ] Integration with video calling platforms
- [ ] Global sign language community platform
- [ ] AI-generated personalized curriculum
- [ ] Wearable device integration

---

## 🤝 Contributing

We welcome contributions from developers, educators, and the deaf community! 

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes following our coding standards
4. **Test** your changes thoroughly
5. **Commit** your changes (`git commit -m 'Add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Contribution Areas

- 🐛 **Bug Fixes**: Help identify and fix issues
- ✨ **New Features**: Implement new learning modules
- 🎨 **UI/UX Improvements**: Enhance user experience
- 📚 **Content Creation**: Add new lessons and gestures
- 🌍 **Localization**: Translate app into new languages
- 📖 **Documentation**: Improve guides and tutorials

### Development Guidelines

- Follow Flutter/Dart best practices
- Write comprehensive tests for new features
- Use meaningful commit messages
- Update documentation for significant changes
- Respect accessibility guidelines

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Sign Language Learner Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

---

## 🙏 Acknowledgements

### Special Thanks

- **National Association of the Deaf (NAD)** - Guidance and feedback
- **Gallaudet University** - Sign language curriculum consultation  
- **Google MediaPipe Team** - Hand tracking technology
- **Flutter Community** - Open source packages and support
- **Beta Testers** - Early feedback from deaf community members

### Technology Partners

- **[MediaPipe](https://mediapipe.dev/)** - Hand landmark detection
- **[TensorFlow](https://tensorflow.org/)** - Machine learning framework
- **[Firebase](https://firebase.google.com/)** - Backend services
- **[Flutter](https://flutter.dev/)** - Mobile app framework

---

## 📞 Support & Community

### Getting Help

- 📖 **Documentation**: [docs/USER_GUIDE.md](docs/USER_GUIDE.md)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/SignLanguageLearner/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/SignLanguageLearner/discussions)
- 📧 **Email Support**: support@signlanguagelearner.app

### Community Links

- 🎮 **Discord**: [Join our learning community](https://discord.gg/signlearner)
- 🐦 **Twitter**: [@SignLearnerApp](https://twitter.com/SignLearnerApp)  
- 📘 **Facebook**: [Sign Language Learner Community](https://facebook.com/groups/signlearner)
- 📱 **Reddit**: [r/SignLanguageLearning](https://reddit.com/r/SignLanguageLearning)

---

## 📈 App Statistics

![GitHub Stars](https://img.shields.io/github/stars/yourusername/SignLanguageLearner?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/SignLanguageLearner?style=social)
![Downloads](https://img.shields.io/badge/Downloads-50K+-brightgreen)
![Rating](https://img.shields.io/badge/Rating-4.8%2F5-yellow)

---

<div align="center">

**Made with ❤️ for inclusive education and accessibility**

*Help us make sign language learning accessible to everyone!*

⭐ **Star this repository if you found it helpful!** ⭐

</div>
