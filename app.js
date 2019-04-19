const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

const CLIENT_URL = isDev ? 'http://localhost:3000' : `${__dirname}/client/build/index.html`;

let browserWindow;

app.on('ready', () => {
  browserWindow = new BrowserWindow({});
  browserWindow.loadURL(CLIENT_URL);
})
