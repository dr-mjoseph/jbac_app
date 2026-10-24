# JBAC Mobile Application (Android)

This repository contains the native hybrid Android mobile application for the **Jesus Believers Association Council (JBAC)**.

- **Package Name**: `io.ionic.starterjbac`
- **Current Version**: `0.0.43` (`versionCode: 43`)
- **Repository**: [`dr-mjoseph/jbac_app`](https://github.com/dr-mjoseph/jbac_app)
- **Sibling Web Repository**: [`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)

---

## 📱 Google Play Store & Android SDK Compliance

| Parameter | Value | Details |
| :--- | :--- | :--- |
| **`minSdkVersion`** | `24` | Android 7.0 (Nougat) or higher — complies with Google Play automatic app protection |
| **`targetSdkVersion`** | `36` | Android API Level 36 |
| **`compileSdkVersion`** | `28` | Android 9.0 (Pie) aligned with Cordova Android 8.1.0 |
| **`versionCode`** | `43` | Incremented for Google Play Console Release 43 (above published 42) |
| **`versionName`** | `0.0.43` | Matching semantic release version |
| **Signing Keystore** | `Jbac.keystore` | Production release keystore (Alias: `jbac`, SHA-256 digest) |
| **Release APK** | `jbacApp-0.0.43.apk` | Signed with v1 JAR + v2 & v3 schemes (121.28 MB) |
| **Release AAB** | `jbacApp-0.0.43.aab` | Signed with jarsigner (118.48 MB) |
| **Play Store Bundle** | `appreleasesigned.aab` | Play Console ready bundle (118.48 MB) |

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Ionic 3 (`ionic-angular`: `3.9.9`), Angular (`@angular/core`: `5.2.11`), Cordova (`cordova-android`: `8.1.0`).
- **Android Toolchain**: Gradle 4.10.3, Android Gradle Plugin 3.3.0, Android SDK Build-Tools 30.0.3, Java OpenJDK 8 (`jdk-8.0.504.1-hotspot`).
- **Styling**: Ionic SCSS + custom modern design enhancements in `src/pages/` and `src/theme/`.
- **API Communication**: Communicates with the secure AWS backend API via HTTPS REST endpoints with Telugu UTF-8 preservation.

---

## 🌟 Recent Updates (Release 0.0.40)

- **Universal Strict Geographic Cascading**:
  - Enforced `State (AP/TG) ➔ District ➔ Constituency ➔ Mandal ➔ Panchayat` order across search, filters, and registrations.
  - Downstream dropdowns remain disabled until parent selection is made, with automatic downstream resets.
- **Media & File Upload Fixes**:
  - Fixed camera and gallery upload picker in Submit Meetings (`addmeetings`), Submit News (`news`), and Help (`help`) with native ActionSheet handlers and hidden `#fileInput` fallbacks.
- **Card Tap & Mobile Responsiveness**:
  - Added `tappable (click)="gotopage(X)"` directly to `<ion-card-header>` in `forms.html` and `account.html`, eliminating unresponsive taps on mobile screens.
  - Removed premature constructor `this.form.reset()` calls that caused registration forms (`addinstitute`, `addbussiness`, `addjobs`, `addmarriage`, `addattacks`, `addads`) to crash or freeze on opening.
- **News Category Filter & Photo Gallery Resilience**:
  - Fixed category dropdown filtering in `news-view` and guarded `item.description`.
  - Added fallback error handler `(error)="onImgError($event, gt)"` in photo galleries pointing to bundled assets.
- **Profile Photo Buffering & YouTube Channel Fix**:
  - Eliminated infinite loading spinner on profile editing.
  - Updated Church Permission YouTube link and restored navigation header.
- **Home Carousel & Student State Parity**:
  - Refreshed banners 1, 3, 7 and deleted banners 2, 8.
  - Added "Select State" to Student Home Address with isolated `resDistricts` array.

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
4. **Meetings & Events Portal**:
   - Live events filtered to active/upcoming meetings, chronological sort, and dynamic location map integration.
5. **Community Features**:
   - Real-time announcements, job boards, event updates, and news feeds.

---

## 🛠️ Building & Signing for Google Play Console

### Release Build Automation Script

A complete automated build and signing script is provided in the web repository:
```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\rajes\Documents\jbac_web\scripts\build_and_sign_release_v38.ps1"
```

The script executes the following automated pipeline:
1. **Compiles Gradle release binaries**:
   ```bash
   cd platforms/android
   gradlew.bat clean assembleRelease bundleRelease -PcdvBuildToolsVersion=30.0.3 --stacktrace
   ```
2. **Zipaligns & Signs APK** using `apksigner` with `Jbac.keystore`:
   ```bash
   apksigner sign --ks Jbac.keystore --ks-pass pass:123456 --v1-signing-enabled true --v2-signing-enabled true jbacApp-0.0.38.apk
   ```
3. **Signs AAB (Android App Bundle)** using `jarsigner` with `Jbac.keystore`:
   ```bash
   jarsigner -sigalg SHA256withRSA -digestalg SHA-256 -keystore Jbac.keystore -storepass 123456 jbacApp-0.0.38.aab jbac
   ```
4. **Validates APK badging** using Android `aapt` to verify `minSdkVersion 24`, `targetSdkVersion 34`, and `versionCode 38`.

---

## 📦 Generated Release Artifacts (v0.0.38)

- **Test APK**: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.38.apk` *(118.7 MB)*
  - Suitable for direct sideloading and testing on physical Android devices.
- **Production AAB**: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.38.aab` *(115.84 MB)*
  - Ready for direct upload to the Google Play Console Production or Open Testing track.
- **Upload Bundle Alias**: `C:\Users\rajes\StudioProjects\jbac_app\appreleasesigned.aab` *(115.84 MB)*

---

## 🔄 Web-to-Mobile Synchronization

Changes made in the sibling web repository ([`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)) can be synced automatically using:

```bash
# In jbac_web directory
npm run sync:mobile
```

Or via GitHub Actions CI/CD whenever changes are pushed to `main` in `jbac_web`.
