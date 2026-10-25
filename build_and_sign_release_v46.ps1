$ErrorActionPreference = "Stop"

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host " Building and Signing JBAC App Release v0.0.46 " -ForegroundColor Cyan
Write-Host " Target SDK: 36, Version Code: 46            " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

$appDir = "C:\Users\rajes\StudioProjects\jbac_app"
$javaHome = "C:\Program Files\Eclipse Adoptium\jdk-8.0.504.1-hotspot"
$androidSdk = "C:\Users\rajes\AppData\Local\Android\Sdk"
$gradleBat = "C:\Users\rajes\.gradle\wrapper\dists\gradle-4.10.3-all\81msde2dx9p4vji0mjgtvxkcb\gradle-4.10.3\bin\gradle.bat"
$buildTools = "$androidSdk\build-tools\30.0.3"
$zipalign = "$buildTools\zipalign.exe"
$apksigner = "$buildTools\apksigner.bat"
$aapt = "$buildTools\aapt.exe"
$jarsigner = "$javaHome\bin\jarsigner.exe"
$keystore = "$appDir\Jbac.keystore"
$alias = "jbac"
$password = "123456"

$env:JAVA_HOME = $javaHome
$env:PATH = "$javaHome\bin;$env:PATH"
$env:ANDROID_HOME = $androidSdk

# Step 1: Ionic/Angular Web Asset Build
Write-Host "`n[1/6] Running ionic/angular build..." -ForegroundColor Yellow
Set-Location $appDir
& npm run build
if ($LASTEXITCODE -ne 0) { throw "npm run build failed" }

# Step 2: Copy web assets to platforms/android/app/src/main/assets/www
Write-Host "`n[2/6] Copying www assets to Android platform..." -ForegroundColor Yellow
$destWww = "$appDir\platforms\android\app\src\main\assets\www"
if (Test-Path $destWww) { Remove-Item -Recurse -Force $destWww }
Copy-Item -Recurse -Force "$appDir\www" $destWww

# Step 3: Gradle assembleRelease and bundleRelease
Set-Location "$appDir\platforms\android"
& $gradleBat clean assembleRelease bundleRelease "-PcdvVersionCode=46" "-PcdvTargetSdkVersion=36" "-PcdvBuildToolsVersion=30.0.3" --stacktrace
if ($LASTEXITCODE -ne 0) { throw "Gradle build failed" }

# Step 4: Locate outputs
Set-Location $appDir
$rawApk = Get-ChildItem -Path "$appDir\platforms\android\app\build\outputs\apk\release" -Filter "*.apk" | Where-Object { $_.Name -notmatch "unaligned" } | Select-Object -First 1
$rawAab = Get-ChildItem -Path "$appDir\platforms\android\app\build\outputs\bundle\release" -Filter "*.aab" | Select-Object -First 1

if (-not $rawApk) { throw "Raw APK not found!" }
if (-not $rawAab) { throw "Raw AAB not found!" }

Write-Host "Found Raw APK: $($rawApk.FullName) ($($rawApk.Length) bytes)" -ForegroundColor Green
Write-Host "Found Raw AAB: $($rawAab.FullName) ($($rawAab.Length) bytes)" -ForegroundColor Green

# Step 5: Sign APK (Zipalign + Apksigner dual v1 + v2 + v3)
Write-Host "`n[4/6] Aligning and signing APK..." -ForegroundColor Yellow
$alignedApk = "$appDir\build_temp_aligned_46.apk"
if (Test-Path $alignedApk) { Remove-Item -Force $alignedApk }
& $zipalign -v -p -f 4 $rawApk.FullName $alignedApk

$finalApk = "$appDir\jbacApp-0.0.46.apk"
if (Test-Path $finalApk) { Remove-Item -Force $finalApk }
& $apksigner sign --ks $keystore --ks-pass "pass:$password" --ks-key-alias $alias --key-pass "pass:$password" --v1-signing-enabled true --v2-signing-enabled true --v3-signing-enabled true --out $finalApk $alignedApk
if ($LASTEXITCODE -ne 0) { throw "APK signing failed" }

# Step 6: Sign AAB (Jarsigner)
Write-Host "`n[5/6] Signing AAB with jarsigner..." -ForegroundColor Yellow
$finalAab = "$appDir\jbacApp-0.0.46.aab"
$playAab = "$appDir\appreleasesigned.aab"
Copy-Item -Force $rawAab.FullName $finalAab
& $jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore $keystore -storepass $password -keypass $password $finalAab $alias
if ($LASTEXITCODE -ne 0) { throw "AAB signing failed" }
Copy-Item -Force $finalAab $playAab

# Step 7: Verification
Write-Host "`n[6/6] Verifying signatures and targetSdkVersion..." -ForegroundColor Yellow
Write-Host "--- APK Signature Verification ---" -ForegroundColor Cyan
& $apksigner verify --verbose $finalApk

Write-Host "`n--- AAB Signature Verification ---" -ForegroundColor Cyan
& $jarsigner -verify $finalAab

Write-Host "`n--- AAPT Badging Check ---" -ForegroundColor Cyan
& $aapt dump badging $finalApk | Select-String "package:|targetSdkVersion|uses-permission:"

Write-Host "`n=============================================" -ForegroundColor Green
Write-Host " Build & Signing Successfully Completed!" -ForegroundColor Green
Write-Host " APK: $finalApk" -ForegroundColor Green
Write-Host " AAB: $finalAab" -ForegroundColor Green
Write-Host " Play AAB: $playAab" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
