const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World! [' + Math.round(Math.random() * 100) + ']'));

app.listen(PORT, () => console.log('App is listening on port ' + PORT));
