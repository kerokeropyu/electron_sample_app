const { app, BrowserWindow } = require('electron');
const html = '<html><head>'
    + '<title>HTML STRING</title>'
    + '</head><body>'
    + '<h1>HTML STRING</h1>'
    + '<p>This is string content.</p>'
    +'</body></html>';

function createWindow() {
    let win = new BrowserWindow({
        width: 700,
        height: 500,
        backgroundColor: '#660066',
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
    // 開発者ツールを表示する。
    win.webContents.openDevTools();

    // let child = new BrowserWindow({
    //     width: 350,
    //     height: 200,
    //     // 親子ウィンドウ
    //     parent: win,
    //     // モーダルウィンドウ
    //     frame: false,
    //     modal: true,
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // });
    // // child.loadURL('data:text/html;charset=utf-8,' + html);
    // child.loadFile('sub.html');

    let child1 = new BrowserWindow({
        width: 350,
        height: 200,
        parent: win,
        frame: false,
        // transparent: true,
    });
    child1.loadFile('sub.html');

    let child2 = new BrowserWindow({
        width: 350,
        height: 200,
        parent: win,
        opacity: 0.5
    });
    child2.loadFile('sub.html');
}
app.whenReady().then(createWindow);

