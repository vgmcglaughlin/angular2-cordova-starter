# angular2-cordova-starter

My attempt to get an Angular CLI-generated app running in cordova.

Originally created following these steps:
```
npm install -g cordova
npm install -g angular-cli
mkdir <root>
cd <root>
ng new starter-app
cd ..
cordova create starter-app-native
cd starter-app-native
cordova platform add ios
cordova platform add android
```

Build:
```
cd <root>/starter-app/
ng build -prod
cd ..
rm -rf starter-app-native/www/* && cp -r starter-app/dist/ starter-app-native/www/
```
Manually edit starter-app/native/www/index.html to remove this line:
```
<base href="/">
```
Then:
```
cd <root>/starter-app-native
cordova build ios
```

Necessary changes to get it running:
* Need to remove base href line from index.html (need to look at downstream effects)
* starter-app.component.css cannot be empty, throws an error if it is
* Use ng cli prod build to remove ember cli dependency
