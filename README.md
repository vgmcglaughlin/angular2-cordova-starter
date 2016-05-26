# angular2-cordova-starter

This is a basic angular 2 app running in cordova, used as a playground for testing.

Copy dev to cordova (would use a more elegant process for a real app):
```
cd <root>
rm -rf starter-app-native/www/* && cp -r starter-app/* starter-app-native/www/
```

Then:
```
cd <root>/starter-app-native
cordova build ios
```
