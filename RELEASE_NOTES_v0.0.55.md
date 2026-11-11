# Release Notes - JBAC Mobile Application v0.0.55

**Release Date:** November 11, 2026  
**Build Target:** Android API Level 36 (`targetSdkVersion 36`)  
**Version Code:** `55`  
**Version Name:** `0.0.55`  
**Package Name:** `io.ionic.starterjbac`

---

## Key Updates in v0.0.55

1. **Version Code & Semantic Version Bump (`54` -> `55`, `0.0.54` -> `0.0.55`)**:
   - Incremented `android-versionCode` / `versionCode` to **`55`** and `versionName` to **`0.0.55`** across `config.xml`, `package.json`, `platforms/android/app/build.gradle`, `AndroidManifest.xml`, and `platforms/android/app/src/main/res/xml/config.xml` to satisfy Google Play Console's unused version code requirement (replacing `versionCode 54`).
2. **Includes All Recent v0.0.54+ Application & Hierarchy Features**:
   - Numbered District-to-Sub-Ward Leadership Level hierarchy (`1. జిల్లా నాయకుడు` through `6. సబ్-వార్డు నాయకుడు`, excluding State) across **Pastor** (`PastorPage`), **Teacher** (`TeacherPage`), and **Profile** (`ProfilePage`), with unified 1-step-down `WingcommandPage` tier resolution (`1..6`).
   - Christian Teacher Leadership registration options, Category `'9'` Teacher Login/Forgot Password, and hierarchical Teacher Leaders Dashboard (`formshow == 4`).
   - Help Portal (`HelpPage`) `పూర్తి పేరు *`, `డెనామినేషన్ *`, strict AP/TG 5-level location cascade before `చిరునామా *`, and full post-submit form reset.

---

## Signed Mobile Release Deliverables

- **Signed Release APK**: `jbacApp-0.0.55.apk` (`130,647,737` bytes; 4-byte zipalign verified; `apksigner verify` v2 + v3 verified)
- **Signed Release AAB**: `jbacApp-0.0.55.aab` (`127,684,736` bytes; signed via `jarsigner` (`SHA256withRSA`) with `Jbac.keystore`)
- **Google Play Bundle**: `appreleasesigned.aab` (`127,684,736` bytes; verified with `jarsigner -verify`)

---

## Verification & Compliance

- **Target SDK**: `36` (`targetSdkVersion: '36'`)
- **Minimum SDK**: `24` (`minSdkVersion 24`)
- **Version Code**: `55`
- **Version Name**: `0.0.55`
