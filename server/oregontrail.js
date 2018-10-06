const express = require('express')
const app = express()


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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
