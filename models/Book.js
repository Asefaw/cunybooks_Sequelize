const bcrypt = require('bcryptjs');
//const models = require('../models');

module.exports = function(sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    title: {   	
      	type: DataTypes.STRING,
      	allowNull: false,
      	validate: {
        	notEmpty: true,
      	},
    }, 
    isbn: {
      	type: DataTypes.STRING,
      	allowNull: false,
      	unique: true,
      	validate: {
        	notEmpty: true, 
      	},
    },
    edition: {
      	type: DataTypes.STRING,
      	allowNull: false,
      	validate: {
        	notEmpty: true,
      	},
    },
     author: {
      	type: DataTypes.STRING,
      	allowNull: false,
      	validate: {
        	notEmpty: true,
      },
    },
    price: {
      	type: DataTypes.DOUBLE,
      	allowNull: false,
      	validate: {
        	notEmpty: true,
      	},
    },
    quantity: {
      	type: DataTypes.INTEGER,
      	allowNull: false,
      	validate: {
        	notEmpty: true,
      	},
    },
  },{
    classMethods: {
    	associate: function(models){
    		Book.belongsTo(models.User, {
    			onDelete: 'cascade'
    		});
    	}		   
    }
    }); 
  return Book;
};
