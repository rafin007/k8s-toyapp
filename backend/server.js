const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/status', async (req, res) => {
    res.status(200).send();
});

app.get('/api/hello', async (req, res) => {
    res.status(200).send('Hello world!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));