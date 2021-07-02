const { Post } = require('../models');

const postData = [
    {
        title: "Something Something",
        post_content: "Something here....",
        user_id: 2
    },
    {
        title: "IDK write something",
        post_content: "MOAR comments",
        user_id: 3
    },
    {
        title: "Can you PLEASE put something here",
        post_content: "add something for the sake of it",
        user_id: 1

    },
    {
        title: "insert political joke",
        post_content: "The government sucks",
        user_id: 4
    },
    {
        title: "Nope",
        post_content: "Nope",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;