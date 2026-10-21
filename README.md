# JBAC Mobile Application (Android)

This repository contains the native hybrid Android mobile application for the **Jesus Believers Association Council (JBAC)**.

- **Package Name**: `io.ionic.starterjbac`
- **Current Version**: `0.0.35` (`versionCode: 35`)
- **Repository**: [`dr-mjoseph/jbac_app`](https://github.com/dr-mjoseph/jbac_app)
- **Sibling Web Repository**: [`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)

---

## 📱 Google Play Store & Android SDK Compliance

| Parameter | Value | Details |
| :--- | :--- | :--- |
| **`minSdkVersion`** | `24` | Android 7.0 (Nougat) or higher — complies with Google Play automatic app protection |
| **`targetSdkVersion`** | `36` | Android 16 preview / Android 15 ready — exceeds Google Play 2026 requirements |
| **`compileSdkVersion`** | `34` | Android 14.0 API Level |
| **`versionCode`** | `35` | Incremented for Google Play Console Release 35 |
| **`versionName`** | `0.0.35` | Matching semantic release version |
| **Signing Keystore** | `Jbac.keystore` | Production release keystore (Alias: `jbac`, SHA-256 digest) |

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Ionic 3 (`ionic-angular`: `3.9.9`), Angular (`@angular/core`: `5.2.11`), Cordova (`cordova-android`: `10.1.2`).
- **Android Toolchain**: Gradle 7.4.2, Android Gradle Plugin 7.2.1, Android SDK Build-Tools 34.0.0.
- **Styling**: Ionic SCSS + custom modern design enhancements in `src/pages/` and `src/theme/`.
- **API Communication**: Communicates with the secure AWS backend API via HTTPS REST endpoints with Telugu UTF-8 preservation.

---

## 🌟 Recent Updates (Release 0.0.35)

- **Login Overlay Freeze Resolved**: Fixed uncaught `TypeError: Cannot read properties of undefined (reading 'dismiss')` on `LoginPage` (`0.js`), enforced immediate `localStorage` session commit (`user`, `role`, `mobile_number`), and guaranteed navigation to `HomePage` on alert OK tap or dismissal.
- **Clean Registration Field Separation**: Primary mobile number is strictly stored in the intended phone field; eliminated contact bleed into secondary contact fields and prevented 32-bit integer overflow in `users.otp`.
- **Telugu Wait Spinners (`దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...`)**: Integrated processing spinners and disabled submit buttons during 2-3 second request cycles to prevent accidental duplicate submissions.
- **Edit Profile Pre-population**: Added phone-first pre-population across all 9 categories with automatic cascading dropdown hydration (`District ➔ Constituency ➔ Mandal ➔ Panchayat`).

---

## 🌟 Key Application Features

1. **Marriage & Family Counselling Portal**:
   - Appointment slot discovery, date selection, and secure bookings.
   - Login-gated workflow: prompts anonymous users to log in before booking.
   - Doctor dashboard with appointment review, schedules, and patient contact.
2. **Doctor & Counsellor Registration & Login**:
   - Clean, stacked-label registration form with zero text collision or overlapping placeholders.
   - Role option `8` (`డాక్టర్ / కౌన్సిలర్ (Doctor / Counsellor)`) added to App Login with direct redirect to the Family Counselling portal.
3. **Directory & Geographic Filters**:
   - Pastors, Churches, Believers, Ministries, Organisations, and Students searchable across all 26 districts of AP & Telangana.
4. **Community Features**:
   - Real-time announcements, job boards, event updates, and news feeds.

---

## 🛠️ Building & Signing for Google Play Console

### Release Build Automation Script

A complete automated build and signing script is provided in the web repository:
```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\rajes\Documents\jbac_web\scripts\build_and_sign_release_v35.ps1"
```

The script executes the following automated pipeline:
1. **Compiles Gradle release binaries**:
   ```bash
   cd platforms/android
   gradlew.bat assembleRelease bundleRelease --stacktrace
   ```
2. **Zipaligns & Signs APK** using `apksigner` with `Jbac.keystore`:
   ```bash
   apksigner.bat sign --ks Jbac.keystore --ks-pass pass:123456 --v1-signing-enabled true --v2-signing-enabled true --v3-signing-enabled true jbacApp-0.0.35.apk
   ```
3. **Signs AAB (Android App Bundle)** using `jarsigner` with `Jbac.keystore`:
   ```bash
   jarsigner -sigalg SHA256withRSA -digestalg SHA-256 -keystore Jbac.keystore -storepass 123456 app-release.aab jbac
   ```
4. **Validates APK badging** using Android `aapt` to verify `minSdkVersion 24` and `targetSdkVersion 36`.

---

## 📦 Generated Release Artifacts (v0.0.35)

- **Test APK**: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.35.apk` *(118.68 MB)*
  - Suitable for direct sideloading and testing on physical Android devices.
- **Production AAB**: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.35.aab` *(115.81 MB)*
  - Ready for direct upload to the Google Play Console Production or Open Testing track.

---

## 🔄 Web-to-Mobile Synchronization

Changes made in the sibling web repository ([`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)) can be synced automatically using:

```bash
# In jbac_web directory
npm run sync:mobile
```

Or via GitHub Actions CI/CD whenever changes are pushed to `main` in `jbac_web`.
