---
title: "Different types to run a app run in Flutter"
description: "The different ways to run your flutter app and why should you use each type."
image: ../../assets/run-flutter.png
publishedAt: 2020-05-30
tags: ["javascript", "typescript", "learn typescript"]
---

### Default

In Flutter, when we are developing our application, we run it using the command:

```bash
flutter run
```

By default, when we run this command, it activates debug mode, which is perfect for use during the app development phase. This mode enables fast reloading, allowing quick application of code changes. Additionally, we can view the application's outputs in the terminal. However, the app is not optimized for performance (it may experience some lag), and its file size in MB is considerably larger. The Android APK is located at /build/app/outputs/apk/debug/app-debug.apk.

<bv> <br>

---

<bv> <br>

### Profile

```bash
flutter run --profile
```

Another type of run is profile mode, which is perfect for performing performance tests. It provides a performance level very close to what will be achieved in production. Additionally, it includes application logs and DevTools for better app analysis. The Android APK is located at /build/app/outputs/apk/profile/app-profile.apk

<bv> <br>

---

<bv> <br>

### Release

```bash
flutter run --release
```

Finally, we have release mode, which, as the name suggests, is used when we want to generate the final build of our application. This mode provides optimized performance for running the app faster and reduces the APK size. However, there is no access to any debugging tools, such as logs or fast reloading. The Android APK is located at /build/app/outputs/apk/release/app-release.apk
