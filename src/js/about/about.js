//??-----------------------Impots---------------------------
import CommitCard from '../components/CommitCard';
import CommitCardList from '../components/CommitCardList';
import GithubApi from '../modules/GithubApi';
import {
    formateDate
} from '../utils/formateDate';
// import swipper from '../utils/swipper';
import 'swiper/swiper-bundle.css';
import '../../pages/about.css';
//??--------------------------------------------------


//??-----------------------Swiper---------------------------
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

function swipper() {
    const slider = document.querySelector('.swiper-container');
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 8,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            991: {
                spaceBetween: 16,
                slidesPerGroup: 2,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            }
        },
    });
}
//??--------------------------------------------------

const gitContainer = document.querySelector('.swiper-wrapper');
// const linkGithub = 'https://api.github.com/repos/yandex/localization-context-extension/commits';
const linkGithub = 'https://api.github.com/repos/kulchaka/dyplomna/commits';


//?? Classes ------------------------------------
const apiGithub = new GithubApi(linkGithub);
const commitsList = new CommitCardList(gitContainer, apiGithub, callbackFunc, swipper);
//?? ------------------------------------

//?? ---------- callBackfunction
function callbackFunc(date, img, name, mail, text) {

    const newDate = formateDate(date);

    return new CommitCard(newDate, img, name, mail, text).create();
}
//??-----------------------


commitsList.render();