const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/testIndex.html');
});

//------這一行都不會跑....
app.post('/', (req,res) =>{
	console.log(req.hostname);
});

app.listen(3000, () => {
	console.log("Server(:3000) running..");
});
