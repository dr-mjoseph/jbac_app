const fs = require('fs');
const path = require('path');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping (file not found): ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Remove deprecated bintray and android-maven classpath dependencies
  content = content.replace(/classpath\s+['"][^'"]*gradle-bintray-plugin[^'"]*['"]/g, '// [CI] Removed gradle-bintray-plugin');
  content = content.replace(/classpath\s+['"][^'"]*android-maven-gradle-plugin[^'"]*['"]/g, '// [CI] Removed android-maven-gradle-plugin');

  // 2. Remove plugin applications
  content = content.replace(/apply plugin:\s+['"][^'"]*android-maven['"]/g, '// [CI] Removed android-maven plugin');
  content = content.replace(/apply plugin:\s+['"][^'"]*bintray['"]/g, '// [CI] Removed bintray plugin');

  // 3. Remove or comment out install and bintray configuration blocks
  content = content.replace(/\binstall\s*\{[\s\S]*?\n\}/g, '/* [CI] Removed install block */');
  content = content.replace(/\bbintray\s*\{[\s\S]*?\n\}/g, '/* [CI] Removed bintray block */');

  // 4. Ensure mavenCentral() is added inside repositories blocks after google()
  content = content.replace(/repositories\s*\{([\s\S]*?)\}/g, (match, body) => {
    if (!body.includes('mavenCentral()')) {
      return match.replace(/google\(\)/g, 'google()\n        mavenCentral()');
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully patched: ${filePath}`);
  } else {
    console.log(`No changes needed for: ${filePath}`);
  }
}

// Files to patch (both templates in node_modules and instantiated project in platforms/android)
const filesToPatch = [
  path.join(__dirname, '..', 'node_modules', 'cordova-android', 'framework', 'build.gradle'),
  path.join(__dirname, '..', 'node_modules', 'cordova-android', 'bin', 'templates', 'project', 'build.gradle'),
  path.join(__dirname, '..', 'platforms', 'android', 'CordovaLib', 'build.gradle'),
  path.join(__dirname, '..', 'platforms', 'android', 'build.gradle')
];

filesToPatch.forEach(patchFile);
