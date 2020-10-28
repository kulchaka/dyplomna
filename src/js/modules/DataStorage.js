export default class DataStorage {
    constructor(api, cardList, object, funcShowBtn) {
        this.api = api;
        this.cardList = cardList;
        this.object = object;
        this.funcShowBtn = funcShowBtn;
    }

    setItems(word, cards) {
        this.api.getNews(word)
            .then((res) => {
                localStorage.setItem('news', JSON.stringify(res));
                this.object = JSON.parse(localStorage.getItem('news'));
                this.cardList.render(this.object, cards);

            })
            .then((res) => {
                this.funcShowBtn();
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject(`Error: ${res.status}`);
            });
    }
}