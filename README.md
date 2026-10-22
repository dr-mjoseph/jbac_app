# JBAC Mobile Application (Android)

This repository contains the native hybrid Android mobile application for the **Jesus Believers Association Council (JBAC)**.

- **Package Name**: `io.ionic.starterjbac`
- **Current Version**: `0.0.38` (`versionCode: 38`)
- **Repository**: [`dr-mjoseph/jbac_app`](https://github.com/dr-mjoseph/jbac_app)
- **Sibling Web Repository**: [`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)

---

## 📱 Google Play Store & Android SDK Compliance

| Parameter | Value | Details |
| :--- | :--- | :--- |
| **`minSdkVersion`** | `24` | Android 7.0 (Nougat) or higher — complies with Google Play automatic app protection |
| **`targetSdkVersion`** | `34` | Android 14.0 API Level — aligned with compileSdkVersion for Cordova Gradle compatibility |
| **`compileSdkVersion`** | `34` | Android 14.0 API Level |
| **`versionCode`** | `38` | Incremented for Google Play Console Release 38 |
| **`versionName`** | `0.0.38` | Matching semantic release version |
| **Signing Keystore** | `Jbac.keystore` | Production release keystore (Alias: `jbac`, SHA-256 digest) |

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Ionic 3 (`ionic-angular`: `3.9.9`), Angular (`@angular/core`: `5.2.11`), Cordova (`cordova-android`: `10.1.2`).
- **Android Toolchain**: Gradle 7.4.2, Android Gradle Plugin 7.2.1, Android SDK Build-Tools 30.0.3 / 34.0.0.
- **Styling**: Ionic SCSS + custom modern design enhancements in `src/pages/` and `src/theme/`.
- **API Communication**: Communicates with the secure AWS backend API via HTTPS REST endpoints with Telugu UTF-8 preservation.

---

## 🌟 Recent Updates (Release 0.0.37)

- **Registration Forms Navigation Failure Fixed (`FormsPage` / All Registration Chunks)**:
  - **Issue**: Tapping any registration form card on `FormsPage` (`బిలీవర్`, `విద్యార్థుల`, `మినిస్ట్రీ`, `పాస్టర్`, `చర్చి`, `సంస్థ`, `పాస్టర్ అసోసియేషన్`, `డాక్టర్`) produced no response; the app remained on the forms screen.
  - **Root Cause**: In compiled Webpack bundle chunks, `template: '...'` is an inline single-quoted JavaScript string literal. The previous patching formatted snippets with `f'<{col_tag}>\n\n'`, inserting raw `0x0A`/`0x0D` bytes into the string literal. Per ECMA-262, raw line terminators inside single-quoted strings throw `SyntaxError: Invalid or unexpected token` upon dynamic chunk evaluation. This crashed Webpack's module loading promise, silently blocking Ionic's `this.navCtrl.push(...)`. Card 1 was also missing the `tappable` attribute.
  - **Resolution**:
    - Re-patched all chunk templates strictly using raw string `r'\n\n'` (escaped `\n`), ensuring zero raw CR/LF bytes inside string literals.
    - Used executable JavaScript newlines (`0x0A`) for FormBuilder controls and prototype methods.
    - Added `tappable` attribute to all cards in `src/pages/forms/forms.html` and `www/build/29.js`.
    - Automated Node.js syntax verification (`node -c`) across **all 57 JavaScript chunk files**: 0 errors.
- **Universal State (`రాష్ట్రం / State`) Cascading Support**:
  - Full State dropdown (`ఆంధ్రప్రదేశ్ (AP)` / `తెలంగాణ (TG)`) and cascading district loading enabled across:
    - **Search Modules**: Jobs (`23.js`), Organisations (`13.js`), Church/House (`14.js`), Marriage (`22.js`).
    - **All 9 Registration Forms**: Believer (`37.js`), Student (`12.js`), Ministry (`21.js`), Pastor (`16.js`), Church (`35.js`), Organisation (`18.js`), Pastor Association (`38.js`), Add Jobs (`41.js`), Entry Form (`32.js`).
  - Set initial district fetch on registration forms to AP via `this.service.getdistrict(1)`, allowing immediate district selection upon opening.
- **Ministry Registration State Parity (`MinistryPage`)**:
  - Added State selection (`రాష్ట్రం / State`) and `onStateChange()` cascading logic to `MinistryPage` (`21.js`, `src/pages/ministry/ministry.html`, `src/pages/ministry/ministry.ts`).
- **Automatic Meeting Expiration (`isOldMeeting`) & Ascending Chronological Sort (`sortEventsAscending`)**:
  - Implemented exact meeting date filter: meetings are displayed only from today's date through the meeting end date (`enddate >= today`).
  - All meetings are presented in ascending date order (`today ➔ tomorrow ➔ day after tomorrow ➔ future`).
- **Student Registration Feature Parity (Commit `ed77502` - "student")**:
  - Added 14 Talent options, academic marks (`tmarks`, `mmarks`), `branch`, and 11 leadership levels with full live RDS MySQL schema parity (`student_reg`).

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
