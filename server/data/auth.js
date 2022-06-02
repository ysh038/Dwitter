import { getUsers } from "../db/database.js";
import MongoDb from "mongodb";

export async function findByUsername(username) {
    return getUsers()
        .findOne({ username })
        .then((data) => {
            console.log(data);
            return data;
        });
}

export async function findById(id) {
    return getUsers()
        .findOne({ _id: MongoDb.ObjectId(id) })
        .then((data) => {
            return { ...data, id: data._id };
        });
}

export async function createUser(user) {
    return getUsers()
        .insertOne(user)
        .then((data) => data.insertedId.toString());
}

function mapOptionalUser(user) {
    user ? { ...data, id: data._id } : null;
}
