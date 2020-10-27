import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

function swipper() {
    const slider = document.querySelector('.swiper-container');
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
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
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            }
        }
    });
}


export {
    swipper
};