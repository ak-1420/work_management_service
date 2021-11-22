// init firbase admin app
var admin = require("firebase-admin");

// const { initializeApp } = require('firebase-admin/app');

var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin