 const bcrypt = require('bcryptjs');
 //const models = require('../models');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
     college: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    classMethods: {
      generateHash: function(password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
      },
      associate: function(models){
        User.hasMany(models.Book, {
          onDelete: 'cascade'
        });
      }
    }
    }); 
  return User;
};
