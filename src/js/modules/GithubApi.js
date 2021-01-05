export default class GithubApi {
    constructor(linkApi) {
        this.linkApi = linkApi;
    }
    getCommits() {
        return fetch(this.linkApi)
            .then((res) => {
                if (res.ok) {

                    return res.json();
                }
            })

    }
}