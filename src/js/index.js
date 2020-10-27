//??-----------------------Impots JS---------------------------
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import NewsApi from './modules/NewsApi';
import DataStorage from './modules/DataStorage';
import {
    formateDate
} from './utils/formateDate';
import {
    cards,
    FORM,
    CARD_CONTAINER,
    API_KEY,
    BUTTON_SHOW_MORE,
    TODAY,
    LAST_DAY
} from './constants/constants_index';
import '../pages/index.css';
//??--------------------------------------------------

let LOCALSTOR_NEWS = JSON.parse(localStorage.getItem('news'));
let ARRAY_LENGTH = 0;
const preloaderBlock = document.querySelector('.searching');


function show() {
    console.log(JSON.parse(localStorage.getItem('news')));
    if (JSON.parse(localStorage.getItem('news')) != null) {
        if (a > JSON.parse(localStorage.getItem('news')).articles.length || JSON.parse(localStorage.getItem('news')).articles.length < 3) {
            BUTTON_SHOW_MORE.style.display = 'none';
        } else {
            BUTTON_SHOW_MORE.style.display = 'block';
        }
    }
}
show();


//?? ----------   function callBack Card's infromation
function createCardCallBack(link, img, date, title, text, source) {
    const newDate = formateDate(date);
    if (img == null) {
        img = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
    }

    return new NewsCard(link, img, newDate, title, text, source).create();
}
//??-----------------------


//?? function Hide GRID ----------------------------
function hideGrid(results) {
    if (results > 0) {
        document.querySelector('.results').classList.remove('hide-block');
        document.querySelector('.nothing-found').classList.add('hide-block');
    } else {
        document.querySelector('.results').classList.add('hide-block');
        document.querySelector('.nothing-found').classList.remove('hide-block');
    }
}
//??  ------------------------------------


//?? Classes ------------------------------------
const apiNews = new NewsApi(LAST_DAY, TODAY, API_KEY);
const cardList = new NewsCardList(CARD_CONTAINER, apiNews, createCardCallBack, hideGrid, preloaderBlock);
const localStr = new DataStorage(apiNews, cardList, LOCALSTOR_NEWS);
//?? ------------------------------------



//?? Form reset --------------------------
function formReset(form) {
    form.reset();
}
formReset(FORM);
//?? --------------------------


//?? Remove Cards --------------------------
function removeCrds() {
    while (CARD_CONTAINER.firstChild) {
        CARD_CONTAINER.firstChild.remove();
    }
}
//?? --------------------------
let a = 3;
let b = 0;
//?? Submit FORM ----------------
FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);

    localStorage.setItem('searchWord', JSON.stringify(input.value));

    localStr.setItems(input.value, cards);

    formReset(FORM);
    removeCrds();
    a = 3;
    b = JSON.parse(localStorage.getItem('news')).articles.length;
    show();
});
//?? -------------------------------------



//?? Show More --------------------------


BUTTON_SHOW_MORE.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('news')));
    a += 3;

    cardList.render(LOCALSTOR_NEWS, a);
    // cardList.render(a);

    // console.log(LOCALSTOR_NEWS.articles.length);
    console.log(a);

    console.log(JSON.parse(localStorage.getItem('news')).articles.length);


    show();
})
//?? --------------------------





//?? fucntion render
function renderIndex(LOCALSTOR_NEWS, cards) {
    // console.log(LOCALSTOR_NEWS.articles.length);
    // console.log(cards);

    if (localStorage.getItem('news') != null) {
        cardList.render(LOCALSTOR_NEWS, cards);
        show();

    }


    // if (localStorage.getItem('news') != null) {
    //         cardList.render(LOCALSTOR_NEWS, cards);

    //     }
}

renderIndex(LOCALSTOR_NEWS, cards);

//?? -----------------------