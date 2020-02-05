const {app, BrowserWindow} = require('electron');
var $ = require("jquery")
require('electron-reload')(__dirname);
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  //win.maximize();
  win.loadFile('index.html');
}
app.on('ready', createWindow);
