# Release Notes - JBAC Mobile & Web Application v0.0.54

**Release Date:** November 11, 2026  
**Build Target:** Android API Level 36 (`targetSdkVersion 36`)  
**Version Code:** `54`  
**Version Name:** `0.0.54`  
**Platform Parity:** Web Portal (`https://jbac.in/help`) & Hybrid Mobile App (`jbac_app`)

---

## Key Updates & Fixes in v0.0.54

### 1. Help Portal ("సహాయం కోరండి") Post-Submit Reset Fix & Field Updates
- **Fixed Stale Data After Submission**:
  - **Root Cause**: After submission, `postmeetings()` previously called `patchValue({ name: defName, mobile_number: defMobile })` from session storage, left cascading dropdowns enabled with stale arrays, left `imagesData` populated, and left `<input type="file">` uncleared.
  - **Resolution (`resetFormCompletely()`)**: Removed auto-prefill on load/post-submit across web (`HelpComponent`) and mobile (`HelpPage`). Submitting now resets all form controls to empty strings (`''`), clears `imagesData` and file input DOM state, resets `submitted = false`, and re-disables child location dropdowns (`district_id`, `constituency_id`, `mandal_id`, `panchayat_id`) with cleared option arrays.
- **Pure Telugu Title Update**:
  - Updated Name label from `పేరు *` to **`పూర్తి పేరు *`** ("Full Name" in Telugu).
- **Denomination Dropdown**:
  - Added **`డెనామినేషన్ *`** (`denomination_id`) directly below `మొబైల్ నంబర్ *` ("Mobile Number"), populated dynamically from existing `churchdenomation` data via `getdenomation()`.
- **Strict Cascading AP & TG Location Hierarchy Before Address**:
  - Removed the `చిరునామా *` (Address) textarea from directly under mobile number and placed it **after** the 5-level cascading geographic hierarchy restricted to **Andhra Pradesh (`1`) & Telangana (`2`)**:
    1. `రాష్ట్రం *` (State: Andhra Pradesh / Telangana)
    2. `జిల్లా *` (District)
    3. `నియోజకవర్గం *` (Constituency)
    4. `మండలం *` (Mandal)
    5. `పంచాయతీ / వార్డు / సబ్-వార్డు *` (Panchayat / Ward / Sub-Ward)
    6. `చిరునామా *` (Address)
  - Each child dropdown remains disabled until its immediate parent selection completes and loads its corresponding API list.

### 2. Database & Backend API Updates
- **AWS RDS MySQL (`helps` table)** migrated via `scripts/migrate_helps_v54.js`:
  - Added columns: `denomination_id (INT)`, `state_id (INT)`, `state (VARCHAR(100))`, `district_id (INT)`, `constituency_id (INT)`, `mandal_id (INT)`, `panchayat_id (INT)`.
- **AWS Lambda (`jbac-backend-api`)**:
  - Updated `POST /dashboardapi/posthelping` and `/api/posthelping` to persist the new denomination and geographic hierarchy fields into `helps`.
  - Updated `ALL /dashboardapi/gethelps` and `/api/gethelps` with `LEFT JOIN` lookups returning `denomination_name`, `district_name`, `constituency_name`, `mandal_name`, and `panchayat_name`.

### 3. Teacher Registration Leadership Fields & Hierarchical Teacher Leaders Dashboard
- **Teacher Registration (`TeacherPage` & Web `TeacherregisterComponent`)**:
  - Directly after the **Upload CV / Profile** field, added **"Do you want to be a Christian Teacher Leader?"** (`YES` / `NO` radio selection) and conditional **"Select Leadership Level you want"** dropdown populated dynamically from the existing `leaderlevel` table (`ServiceProvider.getleaderlevel()` -> `POST leaderlevels`).
- **Authentication & Profile Support**:
  - Added Teacher Login & Forgot Password Category `'9'` (`బోధనా రంగ ఉద్యోగి / టీచర్ (Teacher)`) across `LoginPage` and `ForgotPasswordPage`.
  - Migrated `teacher_reg` schema (`scripts/migrate_teacher_leaders_v54.js`) with leadership columns, `d_in`, `password`, and `is_first_login` (default password backfilled to `mobile`).
- **Hierarchical Teacher Leaders Dashboard (`WingcommandPage` & Web `LeadersComponent`)**:
  - Implemented strict Teacher-only isolation (`formshow == 4`, `teacherarr`, `data[4]` response slot) so Teacher Leaders see only Teacher Leader applicants.
  - Enforced admin approval check before granting dashboard access (`approval_ind == 1 || d_in == 1`), **1-step-down** hierarchy filtering (`State -> District -> Constituency -> Mandal -> Panchayat -> Ward`), and strict geographic matching (e.g., approved Hyderabad District Teacher Leader views unapproved Constituency Teacher Leaders in Hyderabad District; approved Nalgonda Constituency Teacher Leader views unapproved Mandal Teacher Leaders in the same Nalgonda constituency).
  - Enabled Teacher Leaders to **Confirm / Approve** (`tableid: 4` -> `/updateconsis`) or **Reject** (`tableid: 4` -> `/deleteboardmember`) subordinate applicants.

---

## Signed Mobile Release Deliverables

- **Signed Release APK**: `jbacApp-0.0.54.apk` (`130,647,737` bytes; 4-byte zipalign verified; `apksigner verify` v2 + v3 verified)
- **Signed Release AAB**: `jbacApp-0.0.54.aab` (`127,682,840` bytes; signed via `jarsigner` with `Jbac.keystore`)
- **Google Play Bundle**: `appreleasesigned.aab` (`127,682,840` bytes; verified with `jarsigner -verify`)

---

## Verification & Compliance

- **Target SDK**: `36` (`targetSdkVersion: '36'`)
- **Minimum SDK**: `24` (from `config.xml`)
- **Version Code**: `54`
- **Version Name**: `0.0.54`

