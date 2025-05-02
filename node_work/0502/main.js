//electron 라이브러리는 데스크탑 프로그램을 만들때 사용하는 라이브러리
const { app, BrowserWindow } = require('electron');
const path = require('path'); //path와 http 라이브러리는 node에서 원래 제공
//http 라이브러리는 웹서버를 동작 시킬때 사용하는 라이브러리

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true, // 필요 시 활성화
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
