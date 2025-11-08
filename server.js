const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const replicaApp = process.env.APP_NAME

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by node app ${replicaApp}`);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`${replicaApp} node app is listening on port ${port}`);
}); 