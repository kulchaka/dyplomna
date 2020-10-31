export default class SearchInput {
    constructor() {

    }
    formValidation(event) {
        if (event.target.querySelector('input').value.length > 1) {
            return true;
        }
    }
    inputValidation(event) {
        if (event.target.value.length > 1) {
            event.target.parentNode.querySelector('.page__error').style.opacity = '0';
            event.target.parentNode.querySelector('button').style.cursor = 'pointer';
            event.target.parentNode.querySelector('button').removeAttribute('disabled');

        } else {
            event.target.parentNode.querySelector('.page__error').style.opacity = '1';
            event.target.parentNode.querySelector('button').setAttribute('disabled', true);
            event.target.parentNode.querySelector('button').style.cursor = 'not-allowed';
        }
    }
}