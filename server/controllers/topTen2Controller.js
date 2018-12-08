var topTen2 = require('../models/topTen2');

// var currentTopScores = []; // the array that contains top ten scores at that time
// currentTopScores1 = topTen2.addScore("Ethan", 5, "03/01/2019");
// currentTopScores2 =topTen2.addScore("Devin", 10, "03/01/2019");
// currentTopScores3 =topTen2.addScore("Andrew", 20, "03/01/2019");
// currentTopScores4 =topTen2.addScore("Justin", 30, "03/01/2019");
//
// currentTopScores.push(currentTopScores1);
// currentTopScores.push(currentTopScores2);
// currentTopScores.push(currentTopScores3);
// currentTopScores.push(currentTopScores4);


//MYSQL 


// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("MySQL DB connected");
//   var sql = "use otTopTen;";
//   con.query(sql, function (err, result){
//     if (err) throw err;
//   });
// })

// didnt have any of this^^ but going off of the github example

// OLD WAY I HAD IT
// exports.currentTopScores = []; // the array that contains top ten scores at that time
// exports.currentTopScores.push(topTen2.addScore("Ethan", 5, "03/01/2019"));
// exports.currentTopScores.push(topTen2.addScore("Devin", 10, "03/01/2019"));
// exports.currentTopScores.push(topTen2.addScore("Andrew", 20, "03/01/2019"));
// exports.currentTopScores.push(topTen2.addScore("Justin", 30, "03/01/2019"));


// getting the scores

exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTopScores);
    //        ^^^ used to be exports.currentTopScores
}

// saving the scores

exports.saveCurrentScores = function(req, res) {
	var saveScores = topTen2.addScore(req.body.playerName, req.body.playerScore, req.body.playerDate);
	currentTopScores.push(saveScores);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentTopScores);
}

// deleting the scores

exports.deleteCurrentScores = function(req, res) {
	currentTopScores.splice(req.params.topTenId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentTopScores);
}

// updating the scores

exports.updateCurrentScores = function(req, res) {

	var updatedScores = currentTopScores[req.params.topTenId];


	console.log(req.body.playerName);
	if(req.body.playerName)
		updatedScores.playerName = req.body.playerName;
    console.log("working 1");
	if(req.body.playerScore)
		updatedScores.playerScore = req.body.playerScore;
    console.log("working 2");
	if(req.body.playerDate)
		updatedScores.playerDate = req.body.playerDate;
    console.log("working 3");


	currentTopScores[req.params.topTenId] = updatedScores;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentTopScores[req.params.topTenId]);
}
