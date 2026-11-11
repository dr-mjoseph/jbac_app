# JBAC Mobile Application (Android)

This repository contains the native hybrid Android mobile application for the **Jesus Believers Association Council (JBAC)**.

- **Package Name**: `io.ionic.starterjbac`
- **Current Version**: `0.0.54` (`versionCode: 54`)
- **Repository**: [`dr-mjoseph/jbac_app`](https://github.com/dr-mjoseph/jbac_app)
- **Sibling Web Repository**: [`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)

---

## 📱 Google Play Store & Android SDK Compliance

| Parameter | Value | Details |
| :--- | :--- | :--- |
| **`minSdkVersion`** | `24` | Android 7.0 (Nougat) or higher — complies with Google Play automatic app protection |
| **`targetSdkVersion`** | `36` | Android API Level 36 |
| **`compileSdkVersion`** | `36` | Aligned with API Level 36 toolchain |
| **`versionCode`** | `54` | Google Play Console Release 54 |
| **`versionName`** | `0.0.54` | Matching semantic release version |
| **Signing Keystore** | `Jbac.keystore` | Production release keystore (Alias: `jbac`, SHA-256 digest) |
| **Release APK** | `jbacApp-0.0.54.apk` | Signed with v2 & v3 schemes (zipalign 4-byte aligned) |
| **Release AAB** | `jbacApp-0.0.54.aab` | Signed with `jarsigner` (`SHA256withRSA`) |
| **Play Store Bundle** | `appreleasesigned.aab` | Play Console ready bundle |

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Ionic 3 (`ionic-angular`: `3.9.9`), Angular (`@angular/core`: `5.2.11`), Cordova (`cordova-android`).
- **Android Toolchain**: Gradle 4.10.3, Android SDK Build-Tools 30.0.3, Java OpenJDK 8 (`jdk-8.0.512.9-hotspot`).
- **Styling**: Ionic SCSS + custom modern design enhancements in `src/pages/` and `src/theme/`.
- **API Communication**: Communicates with the secure AWS backend API via HTTPS REST endpoints with Telugu UTF-8 preservation.

---

## 🌟 Recent Updates (Release 0.0.54)

- **Teacher Registration Leadership Fields (`TeacherPage`)**:
  - Added **"Do you want to be a Christian Teacher Leader?"** (`YES` / `NO`) and conditional **"Select Leadership Level you want"** dropdown populated from the `leaderlevel` database table (`ServiceProvider.getleaderlevel()`), positioned directly after CV upload.
- **Numbered District-to-Sub-Ward Leadership Hierarchy (`PastorPage`, `TeacherPage`, `ProfilePage`, `WingcommandPage`)**:
  - Removed the State (`రాష్ట్ర నాయకుడు`) level from Pastor and Teacher leadership hierarchies and numbered levels `1..6` starting from District (`1. జిల్లా నాయకుడు` through `6. సబ్-వార్డు నాయకుడు`) while unifying `WingcommandPage` numeric tier mapping (`1..6`).
- **Hierarchical Teacher Leaders Dashboard (`WingcommandPage`) & Auth Category `9`**:
  - Added Category `9` (`బోధనా రంగ ఉద్యోగి / టీచర్ (Teacher)`) to `LoginPage` and `ForgotPasswordPage`.
  - Added Teacher Leaders view (`formshow == 4`) with strict Teacher-only isolation, admin-approval requirement, 1-step-down hierarchy (`1. District -> 2. Constituency -> 3. Mandal -> 4. Panchayat -> 5. Ward -> 6. Sub-Ward`), same-location filtering, and Confirm/Reject actions (`tableid: 4`).
- **Help Form Reset, Full Name Rename, Denomination & AP/TG Hierarchy (`HelpPage`)**:
  - Added `పూర్తి పేరు *`, `డెనామినేషన్ *`, strict AP/TG 5-level cascade before `చిరునామా *`, and full post-submit reset (`resetFormCompletely()`).
- **Release `0.0.54` Automated Build**:
  - Built and signed with `build_and_sign_release_v54.ps1` (`targetSdkVersion 36`, `versionCode 54`).

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

A complete automated build and signing script is included in the mobile repository:
```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\rajes\StudioProjects\jbac_app\build_and_sign_release_v54.ps1"
```

The script executes the following automated pipeline:
1. **Compiles Ionic assets & Gradle release binaries**:
   ```bash
   cd platforms/android
   gradle.bat clean assembleRelease bundleRelease -PcdvVersionCode=54 -PcdvTargetSdkVersion=36 -PcdvBuildToolsVersion=30.0.3 --stacktrace
   ```
2. **Zipaligns & Signs APK** using `apksigner` with `Jbac.keystore`:
   ```bash
   apksigner sign --ks Jbac.keystore --ks-pass pass:123456 --v1-signing-enabled true --v2-signing-enabled true --v3-signing-enabled true jbacApp-0.0.54.apk
   ```
3. **Signs AAB (Android App Bundle)** using `jarsigner` with `Jbac.keystore`:
   ```bash
   jarsigner -sigalg SHA256withRSA -digestalg SHA-256 -keystore Jbac.keystore -storepass 123456 jbacApp-0.0.54.aab jbac
   ```
4. **Validates APK badging** using Android `aapt` to verify `minSdkVersion 24`, `targetSdkVersion 36`, and `versionCode 54`.

---

## 📦 Generated Release Artifacts (v0.0.54)

- **Test APK**: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.54.apk`
  - Suitable for direct sideloading and testing on physical Android devices.
- **Production AAB**: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.54.aab`
  - Ready for direct upload to the Google Play Console Production or Open Testing track.
- **Upload Bundle Alias**: `C:\Users\rajes\StudioProjects\jbac_app\appreleasesigned.aab`

---

## 🔄 Web-to-Mobile Synchronization

Changes made in the sibling web repository ([`dr-mjoseph/jbac_web`](https://github.com/dr-mjoseph/jbac_web)) can be synced automatically using:

```bash
# In jbac_web directory
npm run sync:mobile
```

Or via GitHub Actions CI/CD whenever changes are pushed to `main` in `jbac_web`.
