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

database.ref('images/homepage-slider-images').on('value', snapshot => {
    dbHomepageImages = snapshot.val();
}, error => {
    console.error('Error while loading homepage slider images ' + error);
});

function createArrayFromObject(data) {
    let newData = new Array();
  
    for (let key in data) {
        let obj = data[key];
        obj.id = key;
        newData.push(obj);    
    }
  
    return newData;
}

app.get('/', (req, res) => {
    res.send('Service works! :)');
});

app.get('/homepage-slider-images', (req, res) => {
    res.send(dbHomepageImages);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}. URL: http://localhost:${port}`);
});