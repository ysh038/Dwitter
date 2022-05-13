export default class TweetService {
    tweets = [
        {
            id: 1,
            text: "드림코딩에서 강의 들으면 너무 좋으다",
            createdAt: "2021-05-09T04:20:57.000Z",
            name: "Bob",
            username: "bob",
            url: "https://picsum.photos/200",
        },
    ];

    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async getTweets(username) {
        const query = username ? `?username=${username}` : "";
        const response = await fetch(`${this.baseURL}/tweets${query}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(data.message);
        }
        return data;
    }

    async postTweet(text) {
        const response = await fetch(`${this.baseURL}/tweets`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, username: "ellie", name: "Ellie" }),
        });
        const data = await response.json();
        if (response.status !== 201) {
            throw new Error(data.message);
        }
        return data;
    }

    async deleteTweet(tweetId) {
        const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        if (response.status !== 204) {
            throw new Error();
        }
    }

    async updateTweet(tweetId, text) {
        const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(data.message);
        }
        return data;
    }
}
