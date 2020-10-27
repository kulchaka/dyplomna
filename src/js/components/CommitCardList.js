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

                localStorage.setItem('git', JSON.stringify(res));
                const el = JSON.parse(localStorage.getItem('git'));
                console.log(el);
                // el.forEach(element => {
                //     // console.log(element.author.avatar_url);
                //     // if (element.author == null) {
                //     //     element.author.avatar_url = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
                //     // }
                //     this.addCard(element.commit.committer.date, element.commit.committer.name, element.commit.committer.email, element.commit.message);
                // });

                for (let i = 0; i < 20; i++) {
                    this.addCard(el[i].commit.committer.date, el[i].author.avatar_url, el[i].commit.committer.name, el[i].commit.committer.email, el[i].commit.message);
                }
            })
            .then((res) => {
                console.log(res);
                this.swipper();
            })

    }
}