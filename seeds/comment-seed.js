const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I love RU bootcamps"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "ugh not this again!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Testing"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Que?"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Nope!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Wait, what?!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "I don't like you"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "OMG"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;