export default class NewsCardList {
    constructor(container, api, createCardCallBack, hideGrid, preloaderBlock) {
        this.container = container;
        this.api = api;
        this.createCardCallBack = createCardCallBack;
        this.hideGrid = hideGrid;
        this.preloaderBlock = preloaderBlock;
    }

    addCard(link, img, date, title, text, source) {

        const newCard = this.createCardCallBack(link, img, date, title, text, source);

        this.container.append(newCard);
    }

    render(obj, cards) {
        this.preloaderBlock.style.display = 'block';
        this.api.getNews()
            .then((res) => {
                this.preloaderBlock.style.display = 'none';
                this.hideGrid(JSON.parse(localStorage.getItem('news')).totalResults);
                // obj.articles.forEach((element) => {
                //     this.addCard(element.url, element.urlToImage, element.publishedAt, element.title, element.description, element.source.name);
                // })

                for (let index = cards - 3; index < cards; index++) {
                    const element = JSON.parse(localStorage.getItem('news')).articles[index];
                    if (element) {
                        this.addCard(element.url, element.urlToImage, element.publishedAt, element.title, element.description, element.source.name);
                    }
                }
            })

    }

}