const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}))


app.use(express.static('../client/public'));
const port = 1337

app.get('/', function (req, res) { res.sendFile('index.html', {root: '../client/views' })
})
app.get('/mainmenu', function (req, res) { res.sendFile('mainmenu.html', {root: '../client/views' })
})
app.get('/topten', function (req, res) { res.sendFile('topten.html', {root: '../client/views' })
})
app.get('/setup', function (req, res) { res.sendFile('setup.html', {root: '../client/views' })
})
app.get('/trail', function (req, res) { res.sendFile('trail.html', {root: '../client/views' })
})
app.get('/game', function (req, res) { res.sendFile('game.html', {root: '../client/views' })
})
//app.get('/', (req, res) => res.send('Hello World!'))

// top ten controller

var topTen2Controller = require('./controllers/topTen2Controller');
var setupController = require('./controllers/setupController');
var gameController = require('./controllers/gameController');

app.route('/api/topTen2')
  .get(topTen2Controller.getCurrentScores)
  .post(topTen2Controller.saveCurrentScores)

app.route('/api/topTen2/:topTenId')
  .delete(topTen2Controller.deleteCurrentScores)
  .patch(topTen2Controller.updateCurrentScores)

// game controlller for PACE


app.route('/api/pace/:paceid?')
  .get(gameController.getCurrentPaces)
  .post(gameController.setPace)



//app.route('/api/pace/:paceId')
//  .patch(gameController.updateCurrentPaces)

// game controlller for WEATHER



app.route('/api/weather/weather')
  .get(gameController.getCurrentWeathers);

//  game controlller for TERRAIN:

app.route('/api/terrain/terrain')
  .get(gameController.getCurrentTerrains);


  //  game controlller for GAMEDATA

  app.route('/api/game/getGameData')
    .get(gameController.getGameData);

  app.route('/api/game/data')
    .get(gameController.getGameData);


  app.route('/api/game/updateGame')
    .get(gameController.updateGameData);

  app.route('/api/game/reset')
    .get(gameController.resetGame);

// setup screens

  app.route('/api/setup/wagonLeader/:name1')
    .post(gameController.setLeader);

  app.route('/api/setup/member/:name2/:name3/:name4/:name5')
    .post(gameController.setMembers);

  app.route('/api/setup/profession/:profession')
    .post(gameController.pickProfession);

  app.route('/api/setup/month/:month')
    .post(gameController.setMonth);




// get screens

  app.route('/api/setup/screen/:id')
    .get(setupController.getGameScreen);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
