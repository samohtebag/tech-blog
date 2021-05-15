const { User, Post, Comment } = require('../models');
const sequelize = require('../config/connection');

const commentSeed = require('./commentSeed.json');
const postSeed = require('./postSeed.json');
const userSeed = require('./userSeed.json');

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