const express = require('express');
const firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig.json');

// Init express
const app = express();
const port = process.env.port || 3000; 

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Init Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let dbHomepageImages;
let dbCars;

database.ref('images/homepage-slider-images').on('value', snapshot => {
    dbHomepageImages = snapshot.val();
}, error => {
    console.error('Error while loading homepage slider images ' + error);
});

database.ref('cars').on('value', snapshot => {
    dbCars = snapshot.val();
}, error => {
    console.log('Error while loading cars ' + error);
});

// Endpoints
app.get('/', (req, res) => {
    res.send('Service works! :)');
});

app.get('/api/homepage-slider-images', (req, res) => {
    res.send(dbHomepageImages);
});

app.get('/api/cars', (req, res) => { 
    res.send(dbCars);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}. URL: http://localhost:${port}`);
});