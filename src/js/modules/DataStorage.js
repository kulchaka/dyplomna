export default class DataStorage {
    constructor(api, cardList, object) {
        this.api = api;
        this.cardList = cardList;
        this.object = object;
    }

    setItems(word, cards) {
        console.log(word, cards);
        this.api.getNews(word)
            .then((res) => {
                console.log(res.articles.length);
                localStorage.setItem('news', JSON.stringify(res));
                this.object = JSON.parse(localStorage.getItem('news'));

                this.cardList.render(this.object, cards);
            })

            .catch((err) => {
                console.log(err);
                return Promise.reject(`Error: ${res.status}`);
            });
    }
}