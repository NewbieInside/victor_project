const admin = require('firebase-admin');
const serviceAccount = require('./communa-2794b-firebase-adminsdk-zj7af-282e1204d0.json');
const fetch = require('node-fetch');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

function dataBaseUpd() {
  fetch('https://spreadsheets.google.com/feeds/list/1CPboYPGoVMEG2SqHJjsyV2fxyeAgyCcMyp79O1zq-RM/od6/public/full?alt=json')
    .then(res => res.json())
    .then(json => {
      const guests = json.feed.entry;
      for (let i = 0; i < guests.length; i++) {
        const guestData = {
          name: guests[i].gsx$имя.$t,
          contacts: guests[i].gsx$контакты.$t,
          job: guests[i].gsx$деятельность.$t,
          info: guests[i].gsx$информация.$t,
          photo: guests[i].gsx$фото.$t,
        };
        db.collection('guests').doc(`guest${i}`).set(guestData).then(() => {
          console.log('Success! New guest has been written to the database.');
        });
      }
    }).catch((err) => console.log('An error occured', err));
}

dataBaseUpd();

module.exports = {
  dataBaseUpd,
}
