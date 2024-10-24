const express = require('express');
const app = express();

// Simulating sensitive data (hardcoded secret)
const apiKey = '12345-SECRET-API-KEY';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
