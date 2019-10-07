const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
	  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/health', function(req, res) {
		  res.sendStatus(200);
});



app.listen(5000);
