let inputok = false;
let jumon_input;
let jumon_err;
let jumon_errmsg_elm;

let inputkey = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let inputtime = 0;

let jumon_errlist = {
    default: "じゅもんが　ちがいます。",
    cantuse: "まだつかえません。",
    unko: "💩",
    thanks: "arigatou"
}

let jumon_list = {
    // jumon コマンド
    // type 呪文のタイプを指定する。
    //      lc (location) = 指定のURLへジャンプ
    //      cu (cantuse) = 呪文エラー「まだつかえません。」を表示する
    //      nf (notfound) = 呪文エラー「じゅもんが　ちがいます」を表示する
    // content typeに合わせた文字列を指定してください。
    loula: {
        home: {
            jumon: "home",
            url: "/"
        },
        services: {
            jumon: "activities",
            url: "/activities/",
        },
        contact: {
            jumon: "contact",
            url: "/contact/"
        },
        join: {
            jumon: "join",
            url: "/join/"
        },
        members: {
            jumon: "members",
            url: "/members/"
        },
    },
    betaaccess: {
        rpg: {
            jumon: "gamerpg",
            err: jumon_errlist.cantuse
        }
    },
    joke: {
        unko: {
            jumon: "unko",
            err: jumon_errlist.unko
        },
        love: {
            jumon: "love",
            err: jumon_errlist.thanks
        }
    }
}

window.addEventListener('keydown', (event) => {
    if (inputok === true) {
        let text = jumon_input.textContent;
        if (event.key == 'Enter') {
            jumon_check(text);

        } else if (event.key == 'Backspace') {
            if (inputtime == 0) {
                jumon_input.textContent = '';
                jumonerr_close();
                inputtime++

            } else if (inputtime >= 1) {
                jumon_input.textContent = text.slice(0, -1);

            }
        } else if (inputkey.indexOf(event.key) !== -1) {
            if (inputtime == 0) {
                //console.log(event.key);
                jumon_input.textContent = event.key;
                jumonerr_close();
                inputtime++

            } else if (inputtime >= 1) {
                //console.log(event.key);
                jumon_input.textContent += event.key;
                inputtime++

            }
        }
    }
});

function jumon_check(input_jumon) {
    let i = 0;
    let j = 0;
    var a;
    var b;

    function load_a() {
        a = jumon_list[Object.keys(jumon_list)[i]][Object.keys(jumon_list[Object.keys(jumon_list)[i]])[j]];
    }
    function load_b() {
        b = jumon_list[Object.keys(jumon_list)[i]];
    }
    load_a();
    load_b();

    for (; ;) {
        //console.log('1\tj = ' + j + '\t' + 'i = ' + i + '\t' + a.jumon);

        if (a.jumon === input_jumon) {
            if (a.url === undefined && a.err !== undefined) {
                jumonerr_open(a.err);
                break;
            } else if (a.url !== undefined && a.err === undefined) {
                location.href = a.url;
                break;
            } else {
                jumonerr_open();
                break;
            }
        } else {

            if (j < Object.keys(b).length - 1) {
                j += 1;
                load_a();
                load_b();
            } else if (j >= Object.keys(b).length - 1) {
                i += 1;
                j = 0;

                if (i === Object.keys(jumon_list).length) {
                    //console.log('break');
                    jumonerr_open();
                    break;
                }
                load_a();
                load_b();

            }

        }
    }
}


function jumonerr_open(errmsg) {
    //console.log(errmsg);
    if (errmsg !== undefined) {
        jumon_errmsg_elm.innerText = errmsg;
    }
    jumon_err.style.visibility = '';
    inputtime = 0;
}

function jumonerr_close() {
    jumon_errmsg_elm.innerText = jumon_errlist.default;
    jumon_err.style.visibility = 'hidden';
}

export function jumonSet() {
    console.log('jumonSet');
    jumon_input = document.getElementById('jumon_input');
    jumon_err = document.getElementById('jumon_err');
    jumon_errmsg_elm = document.getElementById('message_a');
    jumonerr_close();

    
    let url = location.href;
    //console.log(url.length);

    //console.log(jumon_errlist.default)
    jumon_errmsg_elm.innerText = jumon_errlist.default;


    let i = 0;
    function urloutput() {
        jumon_input.innerText += url[i]
        //console.log(i + 1)

        if (i + 1 < url.length) {
            i++
        } else {
            jumonerr_open();
            inputok = true;
            clearInterval(outtiming);
        }
    }
    let outtiming = setInterval(urloutput, 1000 / url.length);
}

export default jumonSet();