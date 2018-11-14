// need to create functions to choose profession, startMonth, random terrain
var gameController = require('../controllers/gameController');
var gameData = require('../models/gameData');
var gameStats = gameData.gameInfo();

exports.createGameObject = function () {
  var newGame = gameController.getData();
  return newGame;
}


var chooseProfession = [];
chooseProfession.push("Banker")
chooseProfession.push("Farmer")
chooseProfession.push("Carpenter")

exports.randomProfession = function  () {
  var anyProfession = Math.floor(Math.random() * chooseProfession.length);
  var activeProfession = chooseProfession[anyProfession];
  return activeProfession;
}

exports.pickProfession = function(){

  if (gameStats.playerProfession = "Banker"){
    gameStats.playerMoney = 2000;
  }
  else if (gameStats.playerProfession = "Farmer"){
    gameStats.playerMoney = 1800;
  }
  else if (gameStats.playerProfession = "Carpenter"){
    gameStats.playerMoney = 1500;
  }
}



// exports.defaultProfession = function(){
//   return "Banker";
// }


// function saveProfession(playerProfession) {
//   // this will change the game data based on what profession they choose
//   // and chage the money they start with
//   gameController.gameData.playerProfession = playerProfession;
//   var incomes = professionIncomes[playerProfession];
//   gameController.gameData.playerMoney = playerMoney;
// }

exports.getProfession = function (req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send(saveProfession);
}

exports.changeProfession = function(req, res) {
  gameData.playerProfession[req.params.id] = req.body.playerProfession;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameData.playerProfession);
}

exports.changeStartMonth = function(req, res) {
  gameData.startMonth[req.params.id] = req.body.startMonth;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameData.startMonth);
}

exports.savePlayerNames = function (playerNames) {
  gameController.gameData.playerNames = playerNames;
  var names = gameData.gameInfo = req.body.playerNames;
  return (names);
}

exports.getPlayerNames = function (playerNames) {
  gameController.gameData.playerNames = req.body.playerNames;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameData.playerNames);
}
