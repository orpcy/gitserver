let express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Web = require('./models/web');

mongoose.connect('mongodb://localhost/gitserver', { useNewUrlParser:true })
.then( success => {
    console.log("Db connected");
}).catch( error => {
    console.log('error connecting to the database', error);
})

const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Testing if everything is working perfectly.....');
});

app.post('/api/web', (req, res) => {
    var web = req.body;
    Web.create(web, (err, value) => {
        if(err){
            res.send(err);
        }
        res.json(value);
    });
});

//making a get request to see the data in my collections
app.get('/api/web', (req, res) => {
    Web.find((err, web) => {
        if(err){
            res.send(err);
        }
        res.json(web);
    });
});

app.listen(4000);
console.log('running on port 4000...');