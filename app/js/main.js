const svgImgs        = document.getElementsByTagName ('svg');
const header         = document.querySelector ('.header__inner');
const main           = document.querySelector ('.main__inner');
const mainTitle      = document.querySelector ('.main__title');
const footer         = document.querySelector ('.footer__inner');
const footerContacts = document.getElementsByClassName ('footer__contacts-item');
const smallBlocks    = document.getElementsByClassName ('small-block');
const bigBlocks      = document.getElementsByClassName ('big-block');
const modal          = document.querySelector ('.modal');
const modalBtn       = document.querySelector ('.modal__btn');
const modalClose     = document.querySelector ('.modal__close');

const inputLight = document.querySelector ('#inputLight');
const inputDark  = document.querySelector ('#inputDark');
const inputGray  = document.querySelector ('#inputGray');

const btnLight = document.querySelector ('#btnLight');
const btnDark  = document.querySelector ('#btnDark');
const btnGray  = document.querySelector ('#btnGray');

const select = document.querySelector ('#select');

const lightTheme = {
    headerBackgr:  '#b0bec5',
    headerBorder:  '#808080',
    headerColor:   '#000000',
    mainBackgr:    '#e2f1f8',
    mainTitle:     '#000000',
    footerBackgrn: '#b0bec5',
    footerBorder:  '#808080',
    footerColor:   '#000000'
}
const darkTheme = {
    headerBackgr:  '#212121',
    headerBorder:  '#000000',
    headerColor:   '#a4b2a9',
    mainBackgr:    '#484848',
    mainTitle:     '#ffffff',
    footerBackgrn: '#212121',
    footerBorder:  '#000000',
    footerColor:   '#ffffff'
}
const grayTheme = {
    headerBackgr:  '#757575',
    headerBorder:  '#494949',
    headerColor:   '#ffffff',
    mainBackgr:    '#a4a4a4',
    mainTitle:     '#ffffff',
    footerBackgrn: '#757575',
    footerBorder:  '#494949',
    footerColor:   '#ffffff'
}
inputLight.addEventListener ('change', () => {
    changeTheme(lightTheme);
    activeElementsLight();
}, false);
inputDark.addEventListener  ('change', () => {
    changeTheme(darkTheme);
    activeElementsDark();
}, false);
inputGray.addEventListener  ('change', () => {
    changeTheme(grayTheme);
    activeElementsGray();
}, false);

btnLight.addEventListener ('click', ()=> {
    changeTheme(lightTheme);
    activeElementsLight();
}, false);
btnDark.addEventListener  ('click', ()=> {
    changeTheme(darkTheme);
    activeElementsDark();
}, false);
btnGray.addEventListener  ('click', ()=> {
    changeTheme(grayTheme);
    activeElementsGray();
}, false);

select.addEventListener ('change', (e) => {
    if (e.target.value == 'light'){
        changeTheme(lightTheme);
        activeElementsLight();
        return;
    }
    if (e.target.value == 'dark') {
        changeTheme(darkTheme);
        activeElementsDark();
        return;}
    if (e.target.value == 'gray') {
        changeTheme(grayTheme);
        activeElementsGray();
        return;}
},false)

function changeTheme(theme) {
    header.style.background    = theme.headerBackgr;
    header.style.borderBottom  = `5px solid ${theme.headerBorder}`;
    header.style.color         = theme.headerColor;
    main.style.background      = theme.mainBackgr;
    mainTitle.style.color      = theme.mainTitle;
    footer.style.background    = theme.footerBackgrn;
    footer.style.borderTop     = `5px solid ${theme.footerBorder}`;
    footerContacts[0].style.color = theme.footerColor;
    footerContacts[1].style.color = theme.footerColor;

    for (let i=0; i<svgImgs.length; i++) {
        svgImgs[i].setAttribute('fill', theme.footerColor);
    }
}

function activeElementsLight() {
    btnLight.classList.add ('header__toggle-btn--active');
    btnDark.classList.remove ('header__toggle-btn--active');
    btnGray.classList.remove ('header__toggle-btn--active');
    inputLight.checked = true;
    select.selectedIndex = 0;
}
function activeElementsDark() {
    btnLight.classList.remove ('header__toggle-btn--active');
    btnDark.classList.add ('header__toggle-btn--active');
    btnGray.classList.remove ('header__toggle-btn--active');
    inputDark.checked = true;
    select.selectedIndex = 1;
}
function activeElementsGray() {
    btnLight.classList.remove ('header__toggle-btn--active');
    btnDark.classList.remove ('header__toggle-btn--active');
    btnGray.classList.add ('header__toggle-btn--active');
    inputGray.checked = true;
    select.selectedIndex = 2;
}

for (let i=0; i<smallBlocks.length;i++) {
    smallBlocks[i].addEventListener ('click', showModal, false);
}
for (let i=0; i<bigBlocks.length;i++) {
    bigBlocks[i].addEventListener ('click', showModal, false);
}

modalBtn.addEventListener   ('click',closeModal, false);
modalClose.addEventListener ('click',closeModal, false);

function showModal() {
   modal.style.display = 'flex';
}
function closeModal() {
    modal.classList.add ('hide-modal');
    setTimeout(function(){
    modal.style.display = 'none';
    modal.classList.remove ('hide-modal');
    }, 1000);
} 