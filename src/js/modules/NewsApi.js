export default class NewsApi {
    constructor(prevDay, today, apiKey) {
        this.prevDay = prevDay;
        this.today = today;
        this.apiKey = apiKey;
    }

    getNews(word) {
        return fetch(`https://newsapi.org/v2/everything?q=${word}&from=${this.prevDay}&to=${this.today}&pageSize=100&apiKey=${this.apiKey}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
    }
}