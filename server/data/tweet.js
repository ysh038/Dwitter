let tweets = [
    {
        id: "1",
        text: "화이팅",
        createdAt: Date.now().toString(),
        name: "Bob",
        username: "bob",
        url: "https://picsum.photos/200",
    },
    {
        id: "2",
        text: "ㅎㅇ",
        createdAt: Date.now().toString(),
        name: "Ellie",
        username: "ellie",
        url: "https://picsum.photos/200",
    },
];

export async function getAll() {
    return tweets;
}

export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
    return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

export async function update(id, text) {
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);
}
