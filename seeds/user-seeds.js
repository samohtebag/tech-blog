const { User } = require('../models');

const userData = [
    {
        username: "gabe_thomas",
        github: "samohtebag",
        email: "gthomas513@gmail.com",
        password: "password01"
    },
    {
        username: "pat_walker",
        github: "pat31477",
        email: "pat31477@yahoo.com",
        password: "password02"
    },
    {
        username: "big_jay",
        github: "Jbarbss",
        email: "medianman0101@gmail.com",
        password: "password03"
    },
    {
        username: "chloe_yu",
        github: "chloeyu17",
        email: "chloeyu17@gmail.com",
        password: "password04"
    }
    
    
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;
