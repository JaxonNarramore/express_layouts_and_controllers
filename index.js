// Import stuff
const express = require('express');
const app = express();

// Create at least 1 route
app.get('/', (req, res) => {
    res.send('Hello')
});
// app.listen
app.listen(8000, () => {
    console.log('Server has started');
});