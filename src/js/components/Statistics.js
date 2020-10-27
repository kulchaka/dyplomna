export default class Statistics {
    constructor(localstor, resHtml, word, domWeek, domTitles, domDay_1, domDay_2, domDay_3, domDay_4, domDay_5, domDay_6, domDay_7, numOfTitles_1, numOfTitles_2, numOfTitles_3, numOfTitles_4, numOfTitles_5, numOfTitles_6, numOfTitles_7, domMounth, funCallback) {
        this.localstor = localstor;
        this.resHtml = resHtml;
        this.word = word;
        this.domWeek = domWeek;
        this.domTitles = domTitles;
        this.domDay_1 = domDay_1;
        this.domDay_2 = domDay_2;
        this.domDay_3 = domDay_3;
        this.domDay_4 = domDay_4;
        this.domDay_5 = domDay_5;
        this.domDay_6 = domDay_6;
        this.domDay_7 = domDay_7;
        this.numOfTitles_1 = numOfTitles_1;
        this.numOfTitles_2 = numOfTitles_2;
        this.numOfTitles_3 = numOfTitles_3;
        this.numOfTitles_4 = numOfTitles_4;
        this.numOfTitles_5 = numOfTitles_5;
        this.numOfTitles_6 = numOfTitles_6;
        this.numOfTitles_7 = numOfTitles_7;
        this.domMounth = domMounth;
        this.funCallback = funCallback;
    }
    getInfo() {

        //Вы спросили: 
        this.resHtml.textContent = this.localstor.totalResults;

        //Новостей за неделю:
        this.domWeek.textContent = `«${this.word[0].toUpperCase() + this.word.slice(1)}»`;

        //Упоминаний в загаловках:
        let mention = 0;
        this.localstor.articles.forEach((element) => {
            element.title.split(' ').forEach((w) => {
                if (w.toLowerCase() === this.word || w.toLowerCase().substring(0, w.length - 1) === this.word || w.toLowerCase().substring(0, w.length - 2) === this.word) {
                    mention += 1;
                }
            });
        });
        this.domTitles.textContent = mention;

        //Аналитика по дням:
        let day1 = 0;
        let day2 = 0;
        let day3 = 0;
        let day4 = 0;
        let day5 = 0;
        let day6 = 0;
        let day7 = 0;

        this.localstor.articles.forEach((element => {

            //toDay
            if (element.publishedAt.slice(8, 10) == new Date(Date.now()).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day1 += 1;
                        }
                    });
                }
                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day1 += 1;
                        }
                    })
                }
            }
            //-1Day
            if (element.publishedAt.slice(8, 10) == new Date(Date.now() - 86400000).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day2 += 1;
                        }
                    });
                }
                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day2 += 1;
                        }
                    })
                }

            }
            //-2Day
            if (element.publishedAt.slice(8, 10) == new Date(Date.now() - 172800000).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day3 += 1;
                        }
                    });
                }
                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day3 += 1;
                        }
                    })
                }

            }
            //-3Day
            if (element.publishedAt.slice(8, 10) == new Date(Date.now() - 259200000).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day4 += 1;
                        }
                    });
                }

                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day4 += 1;
                        }
                    })
                }
            }
            //-4Day
            if (element.publishedAt.slice(8, 10) == new Date(Date.now() - 345600000).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day5 += 1;
                        }
                    });
                }
                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day5 += 1;
                        }
                    })
                }
            }
            //-5Day
            if (element.publishedAt.slice(8, 10) == new Date(Date.now() - 432000000).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day6 += 1;
                        }
                    });
                }
                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day6 += 1;
                        }
                    })
                }

            }
            //-6Day
            if (element.publishedAt.slice(8, 10) == new Date(Date.now() - 518400000).getDate()) {
                if (element.description) {
                    element.description.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day7 += 1;
                        }
                    });
                }

                if (element.title) {
                    element.title.split(' ').forEach((e) => {
                        if (e.toLowerCase() === this.word || e.toLowerCase().substring(0, e.length - 1) === this.word || e.toLowerCase().substring(0, e.length - 2) === this.word) {
                            day7 += 1;
                        }
                    })
                }
            }
        }));


        //add days
        this.domDay_1.textContent = (new Date(Date.now() - 518400000)).getDate() + ', ' + this.funCallback((new Date(Date.now() - 518400000)).getDay());
        this.domDay_2.textContent = (new Date(Date.now() - 432000000)).getDate() + ', ' + this.funCallback((new Date(Date.now() - 432000000)).getDay());
        this.domDay_3.textContent = (new Date(Date.now() - 345600000)).getDate() + ', ' + this.funCallback((new Date(Date.now() - 345600000)).getDay());
        this.domDay_4.textContent = (new Date(Date.now() - 259200000)).getDate() + ', ' + this.funCallback((new Date(Date.now() - 259200000)).getDay());
        this.domDay_5.textContent = (new Date(Date.now() - 172800000)).getDate() + ', ' + this.funCallback((new Date(Date.now() - 172800000)).getDay());
        this.domDay_6.textContent = (new Date(Date.now() - 86400000)).getDate() + ', ' + this.funCallback((new Date(Date.now() - 86400000)).getDay());
        this.domDay_7.textContent = (new Date(Date.now())).getDate() + ', ' + this.funCallback((new Date(Date.now())).getDay());

        //addNum and styles
        this.numOfTitles_1.textContent = day7;
        this.numOfTitles_2.textContent = day6;
        this.numOfTitles_3.textContent = day5;
        this.numOfTitles_4.textContent = day4;
        this.numOfTitles_5.textContent = day3;
        this.numOfTitles_6.textContent = day2;
        this.numOfTitles_7.textContent = day1;

        this.numOfTitles_1.style.width = day7 + '%';
        this.numOfTitles_2.style.width = day6 + '%';
        this.numOfTitles_3.style.width = day5 + '%';
        this.numOfTitles_4.style.width = day4 + '%';
        this.numOfTitles_5.style.width = day3 + '%';
        this.numOfTitles_6.style.width = day2 + '%';
        this.numOfTitles_7.style.width = day1 + '%';

        //add Month
        const date = new Date(Date.now());
        this.domMounth.textContent = `(${new Intl.DateTimeFormat('ru-RU', {
            month: 'long'
        }).format(date)})`;



        // console.log(day1, (new Date(Date.now())));
        // console.log(day2, new Date(Date.now() - 86400000));
        // console.log(day3, new Date(Date.now() - 172800000));
        // console.log(day4, new Date(Date.now() - 259200000));
        // console.log(day5, new Date(Date.now() - 345600000));
        // console.log(day6, new Date(Date.now() - 432000000));
        // console.log(day7, new Date(Date.now() - 518400000));
    }
}