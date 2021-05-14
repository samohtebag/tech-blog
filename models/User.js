const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

class user extends Model {

  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

user.init(
  {
    // copied from comment.js, not too many changes here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    // added username
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // added email
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },

    // added password
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5] // password must be least 5 characters long
        },
    },
  },

  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updateUserData) {
        updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
        return updateUserData;
      },
    },

  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = user;