const { User, Post, Comment } = require('../models');
const sequelize = require('../config/connection');

const commentSeed = require('./comment-seed.json');
const postSeed = require('./post-seed.json');
const userSeed = require('./user-seed.json');

const seedEverything = async () => {

    await sequelize.sync({
        force: true
    });
    console.log('\n----- DATABASE SYNCED -----\n');

    await commentSeed();
    console.log('\n----- COMMENTS SEEDED -----\n');

    await postSeed();
    console.log('\n----- POSTS SEEDED -----\n');
    
    await userSeed();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
};

seedEverything();