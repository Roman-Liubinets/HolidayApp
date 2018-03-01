const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	"extended": "true"
}));

app.use(cors());

app.get("*",function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});


//Запус сервера
app.listen(PORT, function (err){
	if (err) throw err;
	console.log("Server start on port 8000!");
});