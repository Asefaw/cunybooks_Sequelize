"use strict";

const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const sequelize = new Sequelize('cunybooks', 'cunybooks', 'cunybooks', {
    host: 'localhost',
    dialect: 'postgres', 
    define: {
        timestamps: false
    },
    pool: {
        max: 9,
        min: 0, 
        idle: 10000
    }
});
 
const db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
