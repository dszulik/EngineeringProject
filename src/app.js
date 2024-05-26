const express = require('express');
const bodyParser = require('body-parser');
const { connectNames } = require('./controllers/namesController');
const { getNeo4jDriver ,configNeo4jDriver } = require('./config');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to Neo4j database
const driver = getNeo4jDriver();

// Routes
app.post('/connect-names', connectNames);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
