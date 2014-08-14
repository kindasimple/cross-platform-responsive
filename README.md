Scroll-Test
==========

An exploration into the responsiveness of the UI for cross-platform cordova applications. Loading content via webview rather than using native controls might not be adequate across devices. This project contains a simple list to build to multiple devices and interact with.

### Projects

* **Safari** - for loading in mobile safari
* **Cordova** - HTML5 application for ios, android, and windows

### Details

The project contains a simple page that generates a gradient of colors and loads them into a list via handlebars.js. The list is styled via jquery mobile.

### Installation

The page for mobile safari requires hosting which can be achieved from a development machine with python and ngrok

```
python -m SimpleHTTPServer &
ngrok 8000
```

The cordova project requires npm. Cordova is a local dependency, and each platform needs to be set up individually.

```
npm install
node_modules/cordova/bin/cordova create ios
node_modules/cordova/bin/cordova build ios
node_modules/cordova/bin/cordova serve ios
```
