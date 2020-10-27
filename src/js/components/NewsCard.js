export default class NewsCard {
  constructor(link, img, date, title, text, source) {
    this.link = link;
    this.img = img;
    this.date = date;
    this.title = title;
    this.text = text;
    this.source = source;
  }
  create() {
    const createCard = `
        <a class="results__block" target="_blank">
  <img
    class="results__photo"
    alt="Plants"
  />
  <div class="results__news">
    <span class="results__news-date"></span>
    <h4 class="results__news-title"></h4>
    <p class="results__news-text"></p>
    <span class="results__news-source"></span>
  </div> </a
>`;

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', createCard);
    const newCard = element.firstElementChild;
    this.newCard = newCard;


    newCard.querySelector('.results__photo').parentElement.setAttribute('href', `${this.link}`);
    newCard.querySelector('.results__photo').setAttribute('src', `${this.img}`);
    newCard.querySelector('.results__news-date').textContent = this.date;
    newCard.querySelector('.results__news-title').textContent = this.title;
    newCard.querySelector('.results__news-text').textContent = this.text;
    newCard.querySelector('.results__news-source').textContent = this.source;



    return newCard;
  }
}