Scroll-Test - Cordova
==========

An exploration into the responsiveness of the UI for cross-platform cordova applications. Loading content via webview rather than using native controls might not be adequate across devices. This project contains a simple list to build to multiple devices and interact with.

The project contains a simple page that generates a gradient of colors and loads them into a list via handlebars.js. The list is styled via jquery mobile.

### Installation

The cordova project requires npm. Cordova is a local dependency, and each platform needs to be set up individually.

```
sudo apt-get install nodejs nodejs-dev npm
## or windows binary from http://nodejs.org/download/

npm install
node_modules/cordova/bin/cordova create ios
node_modules/cordova/bin/cordova build ios
node_modules/cordova/bin/cordova serve ios
```

### Credits

[Jim Bumgardner](http://krazydad.com/about.php) coded the javascript color gradients that create the list items. Theres much more about color on his [website](http://krazydad.com/tutorials/makecolors.php).

I used [Mobjectify](http://www.mobjectify.com/) mock up a quick UI.
