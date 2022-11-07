


function checkAgree() {
    if (agree.checked) {
        goform.disabled = false;
    } else {
        goform.disabled = true;
    }
}

function appendForm(e) {
    let form = document.getElementById("joinForm");
    let box = document.createElement("div");
    let section;
    console.log(e);
    if (e == undefined || e == null) {
        section = 'default';
    } else {
        section = e;
    }
    console.log(section);
    let appendFormTmp = document.querySelector(`#joinForm_container form template[section=${section}]`);
    console.log(appendFormTmp.content);

    let tmpClone = appendFormTmp.content.cloneNode(true);
    box.setAttribute("class", "formdata_container");
    box.setAttribute("section", section);
    box.appendChild(tmpClone);
    form.appendChild(box);


}

function loadForm() {
    let formContainer = document.getElementById("joinForm_container");
    let form = document.createElement("form");
    form.setAttribute("id", "joinForm");


    const xhr = new XMLHttpRequest();
    xhr.open('GET', './html/form.html', true);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log('success');
            form.innerHTML = this.responseText;
            formContainer.appendChild(form);

            appendForm();
        }
    }
    xhr.send();

}

//agree のチェックを外しておく
//window.addEventListener('DOMContentLoaded', () => {
//
//    loadForm();
//
//    let agree = document.getElementById("agree");
//    let goform = document.getElementById("goform");
//
//    checkAgree();
//
//    agree.addEventListener("change", () => {
//        checkAgree();
//    });
//
//    goform.addEventListener("click", () => {
//        goform.disabled = true;
//        agree.disabled = true;
//        loadForm();
//    });
//});


function requiedCheck() {
    let required = document.querySelectorAll("#joinForm_container form input[required]");
    for (let i = 0; i < required.length; i++) {
        if (required[i].value == '') {
            alert('必須項目を入力してください');
            return false;
        }
    }
    return true;
}

// custom elements 

class questionContainer extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('input', (e) => {

            let savedata = JSON.parse(localStorage.getItem('savedata'));
            if (savedata == null) {
                savedata = {};
            }
            let containerSection = this.closest('.formdata_container').getAttribute('section');
            if (savedata[containerSection] == undefined) {
                savedata[containerSection] = {};
            }
            let required = e.target.hasAttribute('required');



            let name = e.target.name;
            let value = e.target.value;
            if (this.getAttribute('check') == 'noValue') {
                savedata[containerSection][name] = {
                    value: savedata[containerSection][name].value,
                    required: required
                };
            } else {
                savedata[containerSection][name] = {
                    value: value,
                    required: required
                };
            }
            localStorage.setItem('savedata', JSON.stringify(savedata));

            console.log(`${e.target.name}: ${e.target.value}`);


        });

        this.addEventListener('change', (e) => {

            // required check
            if (e.target.getAttribute('required') != null) {
                if (e.target.value == '') {
                    e.target.classList.add('required');
                } else {
                    e.target.classList.remove('required');
                }
            }
        });
    }
}

customElements.define('form-question', questionContainer);


class formNext extends HTMLElement {
    constructor() {
        super();

        let button = this.querySelector('input[type="button"]');

        button.addEventListener('click', () => {
            let savedata = JSON.parse(localStorage.getItem('savedata'));
            let containerSection = this.closest('.formdata_container').getAttribute('section');
            //let sectionData = savedata[containerSection];



            // required check


            let section = this.getAttribute("sectionTo");

            if (section[0] == '$') {
                let Varsection = section.slice(1);
                let containerSection = this.closest('.formdata_container').getAttribute('section');
                section = savedata[containerSection][Varsection].value;
            }

            appendForm(section);
        });
    }
}

customElements.define('form-next', formNext);


class textList extends HTMLElement {
    constructor() {
        super();

        let input = this.querySelector('div[textList="input"]');
        let inputElm = input.querySelector('input[type="text"]');
        let addButton = input.querySelector('input[type="button"]');
        let list = this.querySelector('div[textList="list"]');

        addButton.addEventListener('click', () => {
            let inputValue = inputElm.value;
            console.log(inputValue);
            if (inputValue != '') {
                let li = document.createElement('li');
                li.textContent = inputValue;
                list.appendChild(li);

                let savedata = JSON.parse(localStorage.getItem('savedata'));
                let containerSection = this.closest('.formdata_container').getAttribute('section');
                let namme = inputElm.getAttribute('name');
                console.log(namme);

                if (savedata[containerSection][namme].value == undefined) {
                    savedata[containerSection][namme].value = [];
                }

                savedata[containerSection][namme].value.push(inputValue);

                localStorage.setItem('savedata', JSON.stringify(savedata));
                inputElm.value = '';

            }
        });

        inputElm.addEventListener('input', (e) => {
            console.log(e.target.value);
        });

        inputElm.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                addButton.click();
            }
        });


    }
}

customElements.define('text-list', textList);

// form.mjsからとってきたデータをそのままlocalStorageに保存する
// この時、question内の各questionにvalueを追加する なお、型はtypeで判断する