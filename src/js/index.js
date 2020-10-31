//??-----------------------Impots JS---------------------------
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import NewsApi from './modules/NewsApi';
import DataStorage from './modules/DataStorage';
import SearchInput from './components/SearchInput';
import {
    formateDate
} from './utils/formateDate';
import {
    removeCrds
} from './utils/removeCrds';
import {
    formReset
} from './utils/formReset';
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
const preloaderBlock = document.querySelector('.searching');


function show() {
    if (JSON.parse(localStorage.getItem('news')) != null) {
        if (cardСount > JSON.parse(localStorage.getItem('news')).articles.length || JSON.parse(localStorage.getItem('news')).articles.length < 3) {
            console.log('doesn`t show BTN MORE');
            BUTTON_SHOW_MORE.style.display = 'none';
        } else {
            console.log('show BTN MORE');
            BUTTON_SHOW_MORE.style.display = 'block';
        }
    }
}



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
const localStr = new DataStorage(apiNews, cardList, LOCALSTOR_NEWS, show);
const searchInput = new SearchInput();
//?? ------------------------------------








let cardСount = 3;
// let lengthArray = 0;
//?? Submit FORM ----------------
FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchInput.formValidation(event)) {
        localStorage.setItem('searchWord', JSON.stringify(input.value));

        localStr.setItems(input.value, cards);

        formReset(FORM);
        removeCrds(CARD_CONTAINER);
        cardСount = 3;

    } else {
        event.target.querySelector('button').style.cursor = 'not-allowed';
        event.target.querySelector('button').setAttribute('disabled', true);;
        event.target.querySelector('.page__error').style.opacity = '1';
    }
});

FORM.elements.input.addEventListener('input', searchInput.inputValidation);

//?? Show More Button--------------------------
BUTTON_SHOW_MORE.addEventListener('click', (event) => {
    event.preventDefault();

    cardСount += 3;

    cardList.render(LOCALSTOR_NEWS, cardСount);

    show();
})
//?? --------------------------


// //?? Function Cards Count ------
// function lengthOfArray() {
//     let lengthArray = JSON.parse(localStorage.getItem('news')).articles.length;
// }
// //?? -------------------------------------


//?? fucntion render
function renderIndex(LOCALSTOR_NEWS, cards) {

    if (localStorage.getItem('news') != null) {
        cardList.render(LOCALSTOR_NEWS, cards);
        show();

    }
}

formReset(FORM);
renderIndex(LOCALSTOR_NEWS, cards);

//?? -----------------------