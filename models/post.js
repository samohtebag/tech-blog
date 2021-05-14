const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class post extends Model {}

post.init(
  {
    // copied from comment.js, not too many changes here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // same user_id as comment.js
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id',
      }
    },
    // added title
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // creating post text data type. adding length, needs to be at least one character long
    post_txt: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        },
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = post;