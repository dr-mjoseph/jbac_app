# Release Notes - JBAC Mobile & Web Application v0.0.53

**Release Date:** November 10, 2026  
**Build Target:** Android API Level 36 (Android 15+ / Vanilla Ice Cream)  
**Version Code:** `53`  
**Version Name:** `0.0.53`  
**Platform Parity:** Web Portal (`jbac.in`) & Hybrid Mobile App (`jbac_app`)

---

## 🚀 Key Updates & Enhancements in v0.0.53

### 1. Help Portal Overhaul ("సహాయం కోరండి")
- **Mobile (`src/pages/help/`)**:
  - Replaced legacy UI with a clean, user-friendly Telugu-only form.
  - Added fields:
    - **పేరు (Name)*:** Mandatory full name input with auto-prefill from session profile.
    - **మొబైల్ నంబర్ (Mobile Number)*:** Mandatory 10-digit mobile number with session auto-prefill.
    - **చిరునామా (Address)*:** Mandatory complete residential/contact address.
    - **సహాయం రకం (Help Type)*:** Categorical selection (కమ్యూనిటీ, విద్య, ఆర్థిక, చర్చి నిర్మాణం, న్యాయ, వైద్య, పోలీస్ డిపార్ట్‌మెంట్, రాజకీయ, ఇతర సహాయం).
    - **సహాయ వివరాలు / వివరణ (Description)*:** Comprehensive description textarea.
    - **చిత్రం అప్‌లోడ్ (ఐచ్ఛికం - Image Upload)*:** Optional image attachment with camera and gallery file triggers.
  - Standardized submission button text to **"సమర్పించండి"**.
  - Verified backend database `helps` table schema with persistent `address text` column.

### 2. Christian Educational Institutes Registration ("క్రిస్టియన్ విద్యా సంస్థల నమోదు")
- **Mobile Navigation (`src/pages/forms/`)**:
  - Moved **"🎓 క్రిస్టియన్ విద్యా సంస్థల నమోదు"** directly under the main **రిజిస్ట్రేషన్ (Registrations)** menu (`FormsPage` id 12).
  - Removed duplicate entry from `AccountPage` to mirror web navigation structure.
  - Removed English parenthetical titles across all registration items (`(Doctor Register)`, `(Entrepreneur Register)`, `(Investor Register)`, `(Teachers Register)`) for a clean, pure Telugu interface:
    - 🩺 డాక్టర్ / కౌన్సిలర్ రిజిస్టర్
    - 🚀 ఎంటర్‌ప్రెన్యూర్ రిజిస్టర్
    - 💰 ఇన్వెస్టర్ రిజిస్టర్
    - 📚 బోధనా రంగ ఉద్యోగుల రిజిస్టర్
    - 🎓 క్రిస్టియన్ విద్యా సంస్థల నమోదు
- **Registration Form (`src/pages/addinstitute/`)**:
  - Commented out/hidden: `Type of Owner` (యొక్క స్వంతం రకం) and `Type of Ministry` (మంత్రి రకం).
  - Added new fields:
    - **ఛైర్మన్ / ఓనర్ పేరు (Chairman / Owner Name)*:** Mandatory text input (`owner_name`).
    - **ఫోన్ నంబర్ (Phone Number)*:** Mandatory 10-digit phone number (`phonenumber`).
  - Replaced single-select dropdown for College Type with **12 Multi-Select Checkboxes**:
    - School, Junior College, Degree College, PG College, Engineering College, Medical / Nursing College, Pharmacy College, B.Ed / D.Ed College, Polytechnic / ITI, Bible College, University, Other.
  - Added **డెనామినేషన్ (Denomination)*:** Dynamic dropdown populated from backend `/dashboardapi/denomations` with full whitespace resolution fallback (`item.denomation_name || item.denomination_name || item.denomination`).
  - Added **గూగుల్ లొకేషన్ లింక్ (Google Location Link)** with **"📍 ప్రస్తుత లొకేషన్ (Current Location)"** auto-geolocation detector button.
  - Updated submit button to **"నమోదు చేయండి (Register)"**.

### 3. Institutes Directory Card Redesign ("క్రైస్తవ సంస్థలు")
- **Mobile (`src/pages/institute/`)**:
  - Enforced square corners (`border-radius: 0 !important;`) on cards and images.
  - Enlarged card width to 100% with elevated shadow styling.
  - Removed visibility of "College Type" and "Phone Number" on cards.
  - Positioned social media action icons (Google Maps Location, YouTube, Facebook, Call) directly under "Courses Offered".
  - Positioned **"మరింత చదవండి ▼" / "తక్కువ చదవండి ▲" (Read More / Read Less)** toggle underneath the social media icons to expand Chairman/Owner, Address, Website, and Description.

---

## 📦 Signed Mobile Release Deliverables

- **Signed Release APK**: `jbacApp-0.0.53.apk` (dual v1 + v2 + v3 signed, zipalign 4-byte aligned).
- **Signed Release AAB**: `jbacApp-0.0.53.aab` (signed with production keystore `Jbac.keystore`).
- **Google Play Bundle**: `appreleasesigned.aab` (verified with `aapt dump badging`, targetSdkVersion 36, versionCode 53).

---

## 🛠️ Verification & Compliance
- **Target SDK**: `36` (Android API Level 36 / Android 15+)
- **Compile SDK**: `36`
- **Minimum SDK**: `24` (Android 7.0+)
- **Version Code**: `53`
- **Version Name**: `0.0.53`
