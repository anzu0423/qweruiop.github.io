// module
export default function () {
    // 必要な要素を非表示状態で作成
    // コマンドラインのコンテナ
    let commandline_Elm = document.createElement('form');
    commandline_Elm.className = 'commandline_container';
    commandline_Elm.setAttribute('style', 'display: none;');

    // コマンドラインの入力エリア
    let commandinout_Elm = document.createElement('input');
    commandinout_Elm.setAttribute('type', 'text');
    commandinout_Elm.setAttribute('id', 'commandinout');
    commandinout_Elm.setAttribute('autocomplete', 'off');
    commandinout_Elm.className = 'commandinout';
    commandinout_Elm.setAttribute('placeholder', 'Enter command');

    commandline_Elm.appendChild(commandinout_Elm);

    // 要素をぶちこむ
    document.body.appendChild(commandline_Elm);


    // コマンドのログんのコンテナ
    let commandlog_Elm = document.createElement('div');
    commandlog_Elm.setAttribute('id', 'commandlog');
    commandlog_Elm.className = 'commandlog_container';
    document.body.appendChild(commandlog_Elm);




    //console.log('in module');

    // shift + / で開く
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Slash' && e.shiftKey) {
            //commandline_oc('open');
            commandLine.open();
        }
    });

    // escで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            //commandline_oc('close');
            commandLine.close();
        }
    });

    // enterで実行 (空でないこと、フォーカスされていること)
    document.addEventListener('submit', (e) => {
        e.preventDefault();

        if (commandinout_Elm.value !== '' && commandinout_Elm.value.match(/\S/g) && commandinout_Elm === document.activeElement) {
            //commandline_oc('exec');
            console.log('go');
            commandLine.exec(commandinout_Elm.value);
            commandLine.close();
        }
    });
}
function test() {
    console.log('test');
}

window.commandLine = {
    open() { // コマンドラインを開く
        if (event.code === 'Slash') {
            event.preventDefault();
        }
        let commandline = document.querySelector('.commandline_container');
        let commandinout = document.querySelector('.commandinout');
        commandline.style.display = 'block';
        commandinout.focus();
        return true;
    },
    close() { // コマンドラインを閉じる
        let commandline = document.querySelector('.commandline_container');
        let commandinout = document.querySelector('.commandinout');
        commandline.style.display = 'none';
        commandinout.value = '';
    },
    exec(command) { // コマンドを実行する
        let command_arr = command.split(' ');
        import(`./command_module/${command_arr[0]}.js`)
            .then((module) => {
                module.default(command_arr);
            }).catch((err) => {
                commandLine.log('error: そのようなコマンドはありません。');
                console.error(err);
            });
    },
    log(message) { // コマンドのログを出力する
        let commandlog = document.getElementById('commandlog');
        let commandlogmsg_Elm = document.createElement('div');
        commandlogmsg_Elm.className = 'commandlog_message';
        commandlogmsg_Elm.innerText = message;
        commandlog.appendChild(commandlogmsg_Elm);
        // 3秒後に消す
        setTimeout(() => {
            commandlog.removeChild(commandlogmsg_Elm);
        }, 5000);
    }
}