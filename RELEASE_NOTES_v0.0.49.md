# Release Notes - JBAC Mobile App v0.0.49

## Release Metadata
- **Version Name**: `0.0.49`
- **Version Code**: `49`
- **Target SDK**: `36` (Android 15 / 16 — API level 36 or above)
- **Minimum SDK**: `22` (Android 5.1 Lollipop)
- **Compile SDK**: `28` (Java 8 Cordova compatibility lock)
- **Release Date**: November 5, 2026
- **Package Name**: `io.ionic.starterjbac`
- **Binary Files**:
  - Signed Production AAB: `C:\Users\rajes\StudioProjects\jbac_app\appreleasesigned.aab`
  - Versioned AAB: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.49.aab`
  - Versioned APK: `C:\Users\rajes\StudioProjects\jbac_app\jbacApp-0.0.49.apk`

---

## 🌟 What's New in v0.0.49

### 1. Entrepreneur Registration (`EntrepreneurPage`)
- Added dedicated page for entrepreneurs needing financial support from investors.
- Fields: Name, Mobile, Email, Personal Address (State $\rightarrow$ District $\rightarrow$ Constituency $\rightarrow$ Mandal $\rightarrow$ Panchayat), Proposed Business Setup Place (State $\rightarrow$ District $\rightarrow$ Constituency $\rightarrow$ Mandal $\rightarrow$ Panchayat), Type of Business (from `business_types` table), Christian Denomination, Self Fund, Capital Need, and Project Description.
- Location cascading constraint: District to Panchayat dropdowns remain disabled until parent state/district is selected.
- Bilingual English & Telugu UI and validation alerts.

### 2. Investor Registration (`InvestorPage`)
- Added dedicated registration for investors interested in investing in Christian business ideas.
- Fields: Name, Mobile, Email, Personal Address (State $\rightarrow$ District $\rightarrow$ Constituency $\rightarrow$ Mandal $\rightarrow$ Panchayat), Interested Business Type/Sector, Christian Denomination, Capital to Invest, and Investment Guidelines.
- Bilingual English & Telugu UI and validation alerts.

### 3. Forms Navigation Hub
- Added quick-access cards in `src/pages/forms/forms.html` for **Entrepreneur (వ్యాపారవేత్త)** and **Investor (పెట్టుబడిదారుడు)**.

### 4. API & Service Integration
- Added `getBusinessTypes()`, `registerEntrepreneur()`, and `registerInvestor()` in `Service` provider (`src/providers/service/service.ts`).

---

## 📋 Google Play Console Submission Details

### Release Name:
`0.0.49 (49) - Entrepreneur & Investor Modules + API 36`

### Release Notes (en-US):
```text
- Added Entrepreneur Registration to support Christian business startups and fund seekers.
- Added Investor Registration to connect investors with verified Christian entrepreneurs.
- Dual-language support in English and Telugu for all business registration forms.
- Upgraded target SDK to Android API 36 for improved performance and security.
- General performance improvements and bug fixes.
```

### Release Notes (te-IN):
```text
- వ్యాపారం ప్రారంభించి పెట్టుబడి సహాయం పొందాలనుకునే వారి కోసం 'ఎంటర్‌ప్రెన్యూర్ రిజిస్ట్రేషన్' ప్రారంభించబడింది.
- క్రైస్తవ వ్యాపార ఆలోచనలలో పెట్టుబడి పెట్టాలనుకునే వారి కోసం 'ఇన్వెస్టర్ రిజిస్ట్రేషన్' జోడించబడింది.
- తెలుగు మరియు ఇంగ్లీష్ ద్విభాషా రూపకల్పన మరియు సులభమైన వివరాల సమర్పణ.
- మరింత మెరుగైన భద్రత మరియు వేగం కోసం Android API 36 కు అప్‌గ్రేడ్ చేయబడింది.
- సాధారణ పనితీరు మెరుగుదలలు మరియు బగ్ పరిష్కారాలు.
```

---

## 🔍 AAPT Badging Verification
```text
package: name='io.ionic.starterjbac' versionCode='49' versionName='0.0.49' platformBuildVersionName='0.0.49'
compileSdkVersion='28' compileSdkVersionCodename='9'
targetSdkVersion:'36'
uses-permission: name='android.permission.INTERNET'
uses-permission: name='android.permission.CAMERA'
uses-permission: name='android.permission.READ_EXTERNAL_STORAGE' maxSdkVersion='32'
uses-permission: name='android.permission.WRITE_EXTERNAL_STORAGE' maxSdkVersion='32'
uses-permission: name='android.permission.ACCESS_COARSE_LOCATION'
uses-permission: name='android.permission.ACCESS_FINE_LOCATION'
```

