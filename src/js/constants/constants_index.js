const cards = 3;

const FORM = document.querySelector('.page__form');
const CARD_CONTAINER = document.querySelector('.results__news-grid');
const BUTTON_SHOW_MORE = document.querySelector('.button_show-more');

//?? Date constants ------------------------------------
const TODAY = new Date().toISOString().slice(0, 10);
const LAST_DAY = (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
//??  ------------------------------------

const API_KEY = 'e6997ee34e694849937232ec11161de7';

export {
    cards,
    FORM,
    CARD_CONTAINER,
    API_KEY,
    BUTTON_SHOW_MORE,
    TODAY,
    LAST_DAY
};