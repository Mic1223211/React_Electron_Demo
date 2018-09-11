// Basic init
const electron = require('electron');
const {app, BrowserWindow} = electron;

require('electron-reload')(__dirname);

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 850});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
