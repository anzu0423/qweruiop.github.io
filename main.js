// コードリーディングかい？ほう！まじめだねぇ！

const firstloaded = sessionStorage.getItem('firstloaded');

function checkFirstLoaded() {
    let firstloaded = sessionStorage.getItem('firstloaded');
    if (firstloaded === null) {
        sessionStorage.setItem('firstloaded', 'true');
    }
}

// nav open script for mobile
let open = false;
function navButton_oc() {
    // console.log('gfeef');
    let navbutton = document.querySelector('nav');
    let hamburger_bar1 = document.getElementById('hamburger_bar1');
    let hamburger_bar3 = document.getElementById('hamburger_bar3');
    let nav_bg = document.getElementById('nav_bg');
    if (open === false) {
        navbutton.classList.add('nav_isopen');
        hamburger_bar1.classList.add('hamburger_bar1_isopen');
        hamburger_bar3.classList.add('hamburger_bar3_isopen');
        nav_bg.classList.add('nav_bg_isopen');
        open = true;
    } else if (open === true) {
        navbutton.classList.remove('nav_isopen');
        hamburger_bar1.classList.remove('hamburger_bar1_isopen');
        hamburger_bar3.classList.remove('hamburger_bar3_isopen');
        nav_bg.classList.remove('nav_bg_isopen');
        open = false;
    }
}

function preLoad_mobileMenu() {
    //console.log('gfe');
    var newElement = document.createElement('span');
    newElement.setAttribute('id', 'nav_bg');
    newElement.setAttribute('class', 'nav_bg');
    document.body.appendChild(newElement);
    let headburger = document.getElementById('nav_hamburger');
    let nav_bg = document.getElementById('nav_bg');

    nav_bg.addEventListener('click', navButton_oc);
    headburger.addEventListener('click', navButton_oc);

}

// loaded header animation controll
function headerAnimation() {
    if (firstloaded === null) {
        let header = document.querySelector('header > *');
        header.style.animation = 'header_ani 1s ease 0s both';
    }
}

// eg
function loadEgg() {
    let commandline_flag = localStorage.getItem('eggFlag_cmd');
    if (commandline_flag) {
        import('./_api/commandline/main.js')
            .then((module) => {
                module.default();

                console.log('commandline is ready.');

                if (commandline_flag == 0) {
                    commandLine.log('commandline is ready.');
                    localStorage.setItem('eggFlag_cmd', 1);
                }
            });

    }
}


function loadOpening() {
    //スクロール禁止
    document.body.style.overflow = 'hidden';

    let loadscreen = document.createElement('div');
    loadscreen.setAttribute('id', 'loadscreen');
    loadscreen.setAttribute('class', 'loadscreen');

    loadscreen.innerHTML = `
    <video id="load_video" class="load_video" width="125" height="125" autoplay muted loop playsinline>
        <source src="/_src/logo_ani/out_250.webm" type="video/webm">
        <source src="/_src/logo_ani/img_0001.png" type="image/png">
    </video>
    `

    //let load_ani = document.createElement('video');
    //load_ani.setAttribute('id', 'load_ani');
    //load_ani.setAttribute('class', 'load_ani');
    //load_ani.setAttribute('src', '/_src/logo_ani/out.webm');
    //load_ani.setAttribute('autoplay', 'autoplay');
    //load_ani.setAttribute('loop', 'loop');
    //load_ani.setAttribute('muted', 'muted');
    //load_ani.setAttribute('playsinline', 'playsinline');
    //load_ani.setAttribute('width', '125px');
    //load_ani.setAttribute('height', '125px');

    //loadscreen.appendChild(load_ani);

    document.body.appendChild(loadscreen);

    loadOpening_logoAnimation();
}

function closeOpening() {
    document.body.style.overflow = 'auto';

    let loadscreen = document.getElementById('loadscreen');
    loadscreen.style.transition = 'opacity 1s ease 0s';
    loadscreen.style.opacity = '0';
    setTimeout(() => {
        loadscreen.remove();
    }, 1000);
}


window.addEventListener('DOMContentLoaded', () => {
    checkFirstLoaded();
    if (firstloaded === null) {
        loadOpening();
    }
});

window.addEventListener('load', () => {
    preLoad_mobileMenu();

    if (firstloaded === null) {
        headerAnimation();
        loadEgg();

        closeOpening();
    }
});

//////////////////////////////////////////////////////////////


function loadOpening_logoAnimation() {
    let logo_container = document.getElementById('load_logo_container');
    let logo_parts_1_1 = document.getElementById('load_logo_parts_1-1');
    let logo_parts_1_2 = document.getElementById('load_logo_parts_1-2');
    let logo_parts_2_1 = document.getElementById('load_logo_parts_2-1');
    let logo_parts_2_2 = document.getElementById('load_logo_parts_2-2');
    let logo_parts_2_3 = document.getElementById('load_logo_parts_2-3');

}

