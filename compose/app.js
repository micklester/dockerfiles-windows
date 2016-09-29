'use strict';

const assert = require('assert');
const dns = require('dns');

const MongoClient = require('mongodb').MongoClient;

const sleep = 10;
console.log('Sleeping',sleep,"seconds before connecting to MongoDB...");

var host = "mongo."; // append a dot right now

setTimeout(() => {
  // Connection URL
  var url = `mongodb://${host}:27017/myproject`;
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
  });
}, sleep*1000);
