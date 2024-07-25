const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/client', express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/index.html'))
});

//error handler

//serve the backend
app.listen((PORT), ()=> {
    console.log(`Listening on PORT ${PORT}`)
})