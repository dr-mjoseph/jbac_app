# Release Notes - JBAC Mobile App v0.0.48

## Release Metadata
- **Version Name**: `0.0.48`
- **Version Code**: `48`
- **Target SDK Version**: `36` (Android 16 / Baklava, API Level 36 or above)
- **Minimum SDK Version**: `24` (Android 7.0 Nougat)
- **Compile SDK Version**: `28` / `36` (CordovaLib Java 8 compatible)
- **Keystore**: `Jbac.keystore` (Alias: `jbac`, SHA256withRSA)
- **Signature Schemes**: Dual v1 (JAR signing) + v2 (APK Signature Scheme v2) + v3 enabled
- **Play Console Bundle**: `appreleasesigned.aab` / `jbacApp-0.0.48.aab`
- **Direct Install APK**: `jbacApp-0.0.48.apk`
- **Release Date**: November 5, 2026

---

## 📱 Google Play Console Submission Snippets

### 1. English (`en-US`) [Under 500 characters]
```text
What's new in version 0.0.48:
• Student Leadership Alignment: Leadership hierarchy now starts from District Level down to Sub-Ward (Levels 1 to 5).
• Command Center Enhancements: Subordinate leadership titles and statuses properly localized and rendered.
• Modern Android Support: Fully targeted for Android API level 36 with performance optimizations.
• General UI responsiveness and bug fixes.
```

### 2. Telugu (`te-IN`) [Under 500 characters]
```text
వర్షన్ 0.0.48 లో కొత్త అంశాలు:
• విద్యార్థి నాయకత్వ స్థాయి: నాయకత్వ స్థాయి జిల్లా నుండి సబ్-వార్డు వరకు (1 నుండి 5 స్థాయిలు) క్రమబద్ధీకరించబడింది.
• లీడర్స్ కమాండ్ సెంటర్: సబార్డినేట్ స్థాయిలు మరియు టైటిల్స్ స్పష్టంగా ప్రదర్శించబడతాయి.
• ఆండ్రాయిడ్ API 36 సపోర్ట్: సరికొత్త ఆండ్రాయిడ్ వెర్షన్‌లకు అనుకూలంగా పనితీరు మెరుగుపరచబడింది.
• సాధారణ పనితీరు మెరుగుదలలు.
```

---

## 🌟 Key Updates in Version 0.0.48

### 1. Student Leadership Hierarchy Restructuring (District ➔ Sub-Ward)
- **Removed State Level**: State Level leadership was removed for students to maintain a focused local organizational hierarchy.
- **Hierarchical Options Configured in `student.html`**:
  - `1`: **జిల్లా స్థాయి (District Level)**
  - `2`: **నియోజకవర్గం స్థాయి (Constituency Level)**
  - `3`: **మున్సిపాలిటీ / మండల స్థాయి (Mandal Level)**
  - `4`: **పంచాయతి స్థాయి (Panchayati Level)**
  - `5`: **వార్డు / సబ్ వార్డు స్థాయి (Ward / Sub-Ward Level)**
  - Retained specialized educational levels: Church, College, Branch, Branch/Group, Year, Section.

### 2. Command Center Dynamic Level Parsing (`wingcommand.ts`)
- Updated `getDetailedLeaderStatus` method to support both numeric levels (`1` to `5`) and Telugu string labels.
- Subordinate leadership roles now seamlessly resolve regardless of whether the registration data stores the localized name or the new numeric indicator.

### 3. Target API Level 36 Compliance
- Target SDK version upgraded to **`36`** (`android-targetSdkVersion="36"`).
- Addressed Java 8 / AST incompatibility by locking CordovaLib compilation to `compileSdkVersion: 28` while passing `-PcdvTargetSdkVersion=36` to Gradle.
- Meets Google Play Console requirements for all upcoming target SDK mandates.

---

## 📦 Generated Release Artifacts & Verification

| File Name | Size | Checksum / Signature | Purpose |
| :--- | :--- | :--- | :--- |
| **`jbacApp-0.0.48.aab`** | `127.4 MB` | Signed with `SHA256withRSA` via `jarsigner` | Versioned Play Store submission bundle |
| **`appreleasesigned.aab`** | `127.4 MB` | Identical signed bundle | Ready for Google Play Console upload |
| **`jbacApp-0.0.48.apk`** | `130.4 MB` | Dual v1 + v2 + v3 scheme signed via `apksigner` | Direct side-loadable device testing APK |

### AAPT Dump Badging Output:
```text
package: name='io.ionic.starterjbac' versionCode='48' versionName='0.0.48' platformBuildVersionName='9'
sdkVersion:'24'
targetSdkVersion:'36'
application-label:'jbacApp'
uses-permission: name='android.permission.INTERNET'
uses-permission: name='android.permission.CAMERA'
uses-permission: name='android.permission.READ_EXTERNAL_STORAGE'
uses-permission: name='android.permission.WRITE_EXTERNAL_STORAGE'
uses-permission: name='android.permission.ACCESS_COARSE_LOCATION'
uses-permission: name='android.permission.ACCESS_FINE_LOCATION'
```
