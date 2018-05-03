const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');
const router = express.Router();
const appRoutes = require('./routes/api')(router);

const app = express();

// Port Number
const port = process.env.PORT || 8080;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'app')));

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use('/api', appRoutes);


// Index Route
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/src/index.html'));
});

// Start Server
app.listen(port, function() {
    console.log( 'Server is running on port' + ' ' + port );
});