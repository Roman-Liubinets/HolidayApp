const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const PORT = 8000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	"extended": "true"
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'city'
});

app.use(cors());

app.get("*",function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});


//Запус сервера
app.listen(PORT, function (err){
	if (err) throw err;
	console.log("Server start on port 8000!");
});

//назва міста в БД
app.get('/names', function (req, res) {
    connection.query('SELECT * FROM names', function (err, rows) {
        if (err) throw err;
        console.log('get all items, length: ' + rows.length);
        res.status(200).send(rows);
    });
});

app.post('/cityName-add', function(req, res) {
    connection.query('INSERT INTO names SET ?', req.body, function(err, result) {
        if(err) throw err;
        console.log('user added to database with id: ' +result.insertId);
    });
    res.sendStatus(200);
});