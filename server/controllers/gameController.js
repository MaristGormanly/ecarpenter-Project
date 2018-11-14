// use require to import other js files
var topTen2 = require('../models/topTen2');
var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');
var gameData = require('../models/gameData');
var gameStats = gameData.gameInfo();
//var gameChange = setup.createGameObject();

// PACE

var currentPace = []; // the array that contains top ten scores at that time
currentPace1 = pace.paceOptions("Steady", 0, 20);
currentPace2 = pace.paceOptions("Strenuous", -3, 30);
currentPace3 = pace.paceOptions("Grueling", -8, 35);
currentPace4 = pace.paceOptions("Resting", +5, 0);

currentPace.push(currentPace1);
currentPace.push(currentPace2);
currentPace.push(currentPace3);
currentPace.push(currentPace4);

// GET PACE

exports.getCurrentPaces = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentPace);
  }

  exports.changePace = function(req,res){
    gameData.gameStats.currentPace[req.params.paceId] = req.body.currentPace;
    if (userinput == 1){
      currentPace = currentPace1
      //gameStats.milesTraveled += 20
    }
    else if (userinput == 2){
      currentPace = currentPace2
      //gameStats.milesTraveled += 30
    }
    else if (userinput == 3){
      currentPace = currentPace3
      //gameStats.milesTraveled += 35
    }
    else if (userinput == 4){
      currentPace = currentPace4
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(currentPace);
  }



  defaultPace = function (){
    return currentPace1;
  }

// UPDATE PACE

// exports.updateCurrentPaces = function(req, res) {
//
//     	var updatedPaces = currentPace[req.params.paceId];
//
//     	console.log(req.body.paceName);
//     	if(req.body.paceName)
//     		updatedPaces.paceName = req.body.paceName;
//         console.log("working 1");
//     	if(req.body.paceHealth)
//     		updatedPaces.paceHealth = req.body.paceHealth;
//         console.log("working 2");
//     	if(req.body.paceMileage)
//     		updatedPaces.paceMileage = req.body.paceMileage;
//         console.log("working 3");
//
//
//     	currentPace[req.params.paceId] = updatedPaces;
//
//     	res.setHeader('Content-Type', 'application/json');
//     	res.send(currentPace[req.params.paceId]);
//     }

// WEATHER

var currentWeather = []; // the array that contains top ten scores at that time
currentWeather1 = weather.weatherOptions(1, "Very Hot", -8, .7, .1);
currentWeather2 = weather.weatherOptions(2, "Hot", -3, .9, .1);
currentWeather3 = weather.weatherOptions(3, "Warm", +1, 1, .2);
currentWeather4 = weather.weatherOptions(4, "Cool", +1, .95, .1);
currentWeather5 = weather.weatherOptions(5, "Cold", -5, .8, .1);
currentWeather6 = weather.weatherOptions(6, "Very Cold", -12, .7, .1);
currentWeather7 = weather.weatherOptions(7, "Rain", -4, .6, .1);
currentWeather8 = weather.weatherOptions(8, "Heavy Rain", -8, .4, .05);
currentWeather9 = weather.weatherOptions(9, "Snow", -15, .3, .05);
currentWeather10 = weather.weatherOptions(10, "Blizzard", -30, .1, .05);
currentWeather11 = weather.weatherOptions(11, "Heavy Fog", -3, .5, .05);

currentWeather.push(currentWeather1);
currentWeather.push(currentWeather2);
currentWeather.push(currentWeather3);
currentWeather.push(currentWeather4);
currentWeather.push(currentWeather5);
currentWeather.push(currentWeather6);
currentWeather.push(currentWeather7);
currentWeather.push(currentWeather8);
currentWeather.push(currentWeather9);
currentWeather.push(currentWeather10);
currentWeather.push(currentWeather11);

// exports.currentWeather.push(weather.weatherOptions(1, "Very Hot", -8, .7, .1));

weightedWeather = function (){
    var weights =[];

  for (var i=0; i<100;i++){
    if(i<10){
        weights[i]=currentWeather1;
        //gameStats.milesTraveled *= .7;
    }
    else if(i>=10 && i<=19){
      weights[i]=currentWeather2
      //gameStats.milesTraveled *= .9;
    }
    else if(i>=19 && i<=39){
      weights[i]=currentWeather3
    }
    else if(i>=39 && i<=49){
      weights[i]=currentWeather4
      //gameStats.milesTraveled *= .95;
    }
    else if(i>=49 && i<=59){
      weights[i]=currentWeather5
      //gameStats.milesTraveled *= .8;
    }
    else if(i>=59 && i<=69){
      weights[i]=currentWeather6
      //gameStats.milesTraveled *= .7;
    }
    else if(i>=69 && i<=79){
      weights[i]=currentWeather7
      //gameStats.milesTraveled *= .6;
    }
    else if(i>=79 && i<=84){
      weights[i]=currentWeather8
      //gameStats.milesTraveled *= .4;
    }
    else if(i>=84 && i<=89){
      weights[i]=currentWeather9
      //gameStats.milesTraveled *= .3;
    }
    else if(i>=89 && i<=94){
      weights[i]=currentWeather10
      //gameStats.milesTraveled *= .1;
    }
    else if(i>=94 && i<=99){
      weights[i]=currentWeather11
      //gameStats.milesTraveled *= .5;
    }
  }
  var random = Math.floor(Math.random() * 100);
  return weights[random];
}

// GET WEATHER

exports.getCurrentWeathers = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(weightedWeather());
}

// TERRAIN

var currentTerrain = []; // the array that contains top ten scores at that time
currentTerrain1 = terrain.terrainOptions("Mountains", "mountain.gif", -5);
currentTerrain2 = terrain.terrainOptions("Grassland", "field.gif", +5);
currentTerrain3 = terrain.terrainOptions("Plains", "greatplains.jpg", +5);
currentTerrain4 = terrain.terrainOptions("Forrest", "", 0);
currentTerrain5 = terrain.terrainOptions("Mountains", "mountain.gif", -5);

currentTerrain.push(currentTerrain1);
currentTerrain.push(currentTerrain2);
currentTerrain.push(currentTerrain3);
currentTerrain.push(currentTerrain4);
currentTerrain.push(currentTerrain5);

// exports.currentTerrain.push(terrain.terrainOptions("Mountains", "mountain.gif", -5));

function weightedTerrains (){
    var terrainWeights =[];
  for (var i=0; i<100;i++){
    if(i<19){
      terrainWeights[i]=currentTerrain1;
      //gameStats.milesTraveled -= 5
    }
    else if(i>=19 && i<=39){
      terrainWeights[i]=currentTerrain2
      //gameStats.milesTraveled += 5
    }
    else if(i>=39 && i<=59){
      terrainWeights[i]=currentTerrain3
      //gameStats.milesTraveled += 5
    }
    else if(i>=59 && i<=79){
      terrainWeights[i]=currentTerrain4
    }
    else if(i>=79 && i<=99){
      terrainWeights[i]=currentTerrain5
      //gameStats.milesTraveled += -5
    }

  }
  var randomTerrain = Math.floor(Math.random() * 100);
  return terrainWeights[randomTerrain];

}

exports.getCurrentTerrains = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTerrain);
}

// ONLY APIS NEEDED IS NEXT DAY RESET GAME AND CHANGE PACE

// change pace, weather, terrain, health,

exports.updateGame = function(req, res) {

  updateHealth();
  gameStats.milesTraveled += updateMiles();
  gameStats.daysOnTrail++;
  gameStats.playerProfession = pickProfession();
  gameStats.currentWeather = weightedWeather();
  gameStats.currentTerrain = weightedTerrains();
  gameStats.startMonth =
  res.setHeader('Content-Type', 'application/json');
  res.send(gameStats)

}

exports.getGameData = function(req, res) {
    //console.log(gameData)
    res.setHeader('Content-Type', 'application/json');
    res.send(gameStats);
    return(gameStats);
}

exports.getData = function (){
  return gameStats;
}

exports.updateGameData = function(req, res) {
    //console.log(gameStats)
    res.setHeader('Content-Type', 'application/json');
    res.send(gameStats);

    var prob1 = 0.03;
    var prob2 = 0.10;
    if(gameStats.groupHealth >=80) {

    }
    else if(gameStats.groupHealth >=50 && gameStats.groupHealth <80){

    }
    else if(gameStats.groupHealth >=20 && gameStats.groupHealth <50){
      for (var i = 0; i < gameStats.playerStatus.length; i++) {
        if(gameStats.playerStatus[i] == true){
          var random = Math.floor(Math.random() * 100 + 1) / 100
          if (random == 1){
            random = .99;
            random = random - prob1;
          }
          if (random <= 0) {
            gameStats.playerStatus[i] = false;
            message.push(gameStats.playerNames[i] + "has died")
          }

        }
      }

    }

    else if (gameStats.groupHealth >0 && gameStats.groupHealth < 20){
      for (var i = 0; i < gameStats.playerStatus.length; i++){
        if (gameStats.playerStatus[i] == true){
          var random = Math.floor(Math.random() * 100 + 1) / 100
          if (random == 1){
            random = .99;}
            random = random - prob2;
          if (random <= 0) {
            gameStats.playerStatus[i] = false;
            message.push(gameStats.playerNames[i] + "has died")
          }
        }
      }
    }
  }

  var pickMonth = [];
  month1 = pickMonth.push("April");
  month2 = pickMonth.push("May");
  month3 = pickMonth.push("June");
  month4 = pickMonth.push("July");
  month5 = pickMonth.push("August");

    function randomMonth () {
      var anyMonth = Math.floor(Math.random() * pickMonth.length);
      var activeMonth = pickMonth[anyMonth];
      return activeMonth;
    }





// if (gameStats.daysOnTrail >30) {
//
// }




function updateHealth (){

// weather health effect

  if (gameStats.currentWeather == currentWeather1) {
    gameStats.groupHealth -= 8 }
  else if (gameStats.currentWeather == currentWeather2){
    gameStats.groupHealth -= 3 }
  else if (gameStats.currentWeather == currentWeather3){
    gameStats.groupHealth += 1 }
  else if (gameStats.currentWeather == currentWeather4){
    gameStats.groupHealth += 1 }
  else if (gameStats.currentWeather == currentWeather5){
    gameStats.groupHealth -= 5 }
  else if (gameStats.currentWeather == currentWeather6){
    gameStats.groupHealth -= 12 }
  else if (gameStats.currentWeather == currentWeather7){
    gameStats.groupHealth -= 4 }
  else if (gameStats.currentWeather == currentWeather8){
    gameStats.groupHealth -= 8 }
  else if (gameStats.currentWeather == currentWeather9){
    gameStats.groupHealth -= 15 }
  else if (gameStats.currentWeather == currentWeather10){
    gameStats.groupHealth -= 30 }
  else if (gameStats.currentWeather == currentWeather11){
    gameStats.groupHealth -= 3 }

}
// pace health effect

  if (gameStats.currentPace == currentPace2){
    gameStats.groupHealth -= 3 }
  else if (gameStats.currentPace == currentPace3){
    gameStats.groupHealth -= 8 }
  else if (gameStats.currentPace == currentPace4){
    gameStats.groupHealth += 5 }








function pickProfession(){

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

    var chooseProfession = [];
    chooseProfession.push("Banker")
    chooseProfession.push("Farmer")
    chooseProfession.push("Carpenter")

    function randomProfession() {
      var randomNum = Math.floor(Math.random() * chooseProfession.length);
      var currentProfession = chooseProfession[randomNum];
      return currentProfession;
    }






  // function updateMiles (){
  //
  //   // pace milesEffect effect
  //
  //     if (gameStats.currentPace == currentPace1) {
  //       gameStats.milesTraveled += 20 }
  //     else if (gameStats.currentPace == currentPace2) {
  //       gameStats.milesTraveled += 30 }
  //     else if (gameStats.currentPace == currentPace3) {
  //       gameStats.milesTraveled += 35 }
  //     else if (gameStats.currentPace == currentPace4) {
  //       gameStats.milesTraveled += 0 }
  //
  //   }
  //   // terrain milesEffect effect
  //
  //     if (gameStats.currentTerrain == currentTerrain1){
  //       gameStats.milesTraveled -= 5 }
  //     else if (gameStats.currentTerrain == currentTerrain2){
  //       gameStats.milesTraveled += 5 }
  //     else if (gameStats.currentTerrain == currentTerrain3){
  //       gameStats.milesTraveled += 5 }
  //     else if (gameStats.currentTerrain == currentTerrain4){
  //       gameStats.milesTraveled += 0 }
  //     else if (gameStats.currentTerrain == currentTerrain5){
  //       gameStats.milesTraveled -= 5 }
  //
  //       // weather milesEffect effect
  //
  //     if (gameStats.currentWeather == currentWeather1){
  //       gameStats.milesTraveled += pace.paceMileage * .7 }
  //     else if (gameStats.currentWeather == currentWeather2){
  //       gameStats.milesTraveled += pace.paceMileage * .9 }
  //     else if (gameStats.currentWeather == currentWeather3){
  //       gameStats.milesTraveled += pace.paceMileage * 1 }
  //     else if (gameStats.currentWeather == currentWeather4){
  //       gameStats.milesTraveled += pace.paceMileage * .95 }
  //     else if (gameStats.currentWeather == currentWeather5){
  //       gameStats.milesTraveled += pace.paceMileage * .8 }
  //     else if (gameStats.currentWeather == currentWeather6){
  //       gameStats.milesTraveled += pace.paceMileage * .7}
  //     else if (gameStats.currentWeather == currentWeather7){
  //       gameStats.milesTraveled += pace.paceMileage * .6 }
  //     else if (gameStats.currentWeather == currentWeather8){
  //       gameStats.milesTraveled += pace.paceMileage * .4 }
  //     else if (gameStats.currentWeather == currentWeather9){
  //       gameStats.milesTraveled += pace.paceMileage * .3 }
  //     else if (gameStats.currentWeather == currentWeather10){
  //       gameStats.milesTraveled += pace.paceMileage * .1 }
  //     else if (gameStats.currentWeather == currentWeather11){
  //       gameStats.milesTraveled += pace.paceMileage * .5 }


    function updateMiles (){
      console.log(gameStats.currentPace.paceMileage);
        gameStats.milesTraveled += (gameStats.currentPace.paceMileage + gameStats.currentTerrain.terrainMilesEffect) * gameStats.currentWeather.weatherMiles ;
    }



var setup = require ('../controllers/setupController');


exports.resetGame = function(req, res) {
  gameStats = setup.createGameObject();
  gameStats.startMonth = randomMonth();
  gameStats.currentWeather = weightedWeather();
  gameStats.currentTerrain = weightedTerrains();
  gameStats.currentPace = defaultPace();
  gameStats.playerProfession = randomProfession();
  res.setHeader('Content-Type', 'application/json');
  res.send(gameStats);

}
