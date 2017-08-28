"use strict";
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        center: true,
        'transparent': true,
        'frame': false,
        'always-on-top': true
    });
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
  });
});
