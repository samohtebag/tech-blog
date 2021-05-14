const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class comment extends Model {}

comment.init(
  {
    // no changes to ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id',
      }
    },

    comment_txt: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { 
            len: [1] 
        }
    },

    // same as user ID, changed model and cat
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id',
        },
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = comment;

// used the models from the last HW on the e-commerce backend for my template. 