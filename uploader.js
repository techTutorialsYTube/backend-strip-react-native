var admin = require('firebase-admin');

var serviceAccount = require('./src/files/service_key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'src/files/firestore');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    var lastDotIndex = file.lastIndexOf('.');

    var menu = require('./src/files/firestore/' + file);

    menu.forEach(function (obj) {
      firestore
        .collection(file.substring(0, lastDotIndex))
        .add(obj)
        .then(function (docRef) {
          console.log('Document written');
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    });
  });
});
