import express from "express";
import "express-async-errors";

const tweets = [
    {
        id: "1",
        text: "화이팅",
        createdAt: Date.now().toString(),
        name: "Bob",
        username: "bob",
        url: "https://picsum.photos/200",
    },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/");
// GET /tweets/:id
// POST /tweets
// PUT / tweets/:id
// DELETE / tweets/:id
export default router;
