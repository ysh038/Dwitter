// abc1234 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVsbGllIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1Mjk1MDg2NywiZXhwIjoxNjUyOTUwODY5fQ._iS1eiRlM1ctNklR0I2gClgtOn27v-d9o-O0yjZwSco
let users = [
    {
        id: "1",
        username: "bob",
        password: "abc12345",
        name: "Bob",
        email: "bob@gmail.com",
        url: "https://picsum.photos/250/250",
    },
];

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}

export async function findById(id) {
    return users.find((user) => user.id === id);
}

export async function createdUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}
