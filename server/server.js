const express = require('express')
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));

console.log("using config:")
console.log(config)

if (!config.port) {
	throw "'port' must be specified!"
}

app.use('/static', express.static(path.join(__dirname, '../static')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../static/html/index.html'));
})

if (!config.certPath || !config.certKey) {
	http.createServer(app).listen(config.port, () => {
		console.log(`HTTP Homepage is listening on port ${config.port}`)
	})
} else {
	https.createServer({
		key: fs.readFileSync(config.certKey),
		cert: fs.readFileSync(config.certPath)
	},app).listen(config.port, () => {
		console.log(`HTTP Homepage is listening on port ${port}`)
	})
}
