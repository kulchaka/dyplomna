export default class CommitCardList {
    constructor(container, api, callbackFunc, swipper) {
        this.container = container;
        this.api = api;
        this.callbackFunc = callbackFunc;
        this.swipper = swipper;
    }

    addCard(date, img, name, mail, text) {
        const newCard = this.callbackFunc(date, img, name, mail, text);
        this.container.append(newCard);
    }

    render() {
        this.api.getCommits()
            .then((res) => {
                console.log(res.length);
                localStorage.setItem('git', JSON.stringify(res));
                const el = JSON.parse(localStorage.getItem('git'));

                for (let i = 0; i < res.length; i++) {
                    this.addCard(el[i].commit.committer.date, el[i].author.avatar_url, el[i].commit.committer.name, el[i].commit.committer.email, el[i].commit.message);
                }
            })
            .then((res) => {
                this.swipper();
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject(`Error: ${res.status}`);
            });

    }
}