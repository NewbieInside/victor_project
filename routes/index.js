const express = require('express')
const router = express.Router();
const admin = require('firebase-admin');
const dataBaseUpd = require('../database/database')
const db = admin.firestore();

router.get('/', async (req, res) => {
  const snapshot = await db.collection('guests').get();
  const guests = snapshot.docs.map(doc => doc.data());
  res.render('index', {
    guests,
  });
});

module.exports = router;
