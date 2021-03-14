const functions = require("firebase-functions");

exports.everySixty = functions.pubsub
  .schedule("every 60 minutes")
  .onRun((context) => {
    console.log("This will be run every 60 minutes");
    return null;
  });