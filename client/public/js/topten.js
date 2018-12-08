window.addEventListener("keypress", function pressSpace(key){
  if (key.keyCode === 32) {
    window.location.href = "/mainmenu";
  }
});

topScores = []

fetch ("api/topTen2") .then(
  function (response){
    response.text().then(function(currentTopScores){
        console.log('success' + currentTopScores);
        topScores = currentTopScores;
    })

})

function topScore (name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

// var topScore1 = new topScore('Paul', 15, '2/28/18');
// var topScore2 = new topScore('Andrew', 20, '3/28/18');
// var topScore3 = new topScore('Devin', 30, '3/15/18');
// var topScore4 = new topScore('Gordon', 40, '4/28/18');
// var topScore5 = new topScore('Kevin', 50, '4/10/18');
// var topScore6 = new topScore('Ethan', 60, '4/5/18');
// var topScore7 = new topScore('Justin', 70, '4/6/18');
// var topScore8 = new topScore('Peyton', 80, '5/28/18');
// var topScore9 = new topScore('Joey', 90, '5/10/18');
// var topScore10 = new topScore('Charlie', 5, '5/15/18');
//
// var topScores = [];
// topScores.push(topScore1);
// topScores.push(topScore2);
// topScores.push(topScore3);
// topScores.push(topScore4);
// topScores.push(topScore5);
// topScores.push(topScore6);
// topScores.push(topScore7);
// topScores.push(topScore8);
// topScores.push(topScore9);
// topScores.push(topScore10);

window.addEventListener('load', function(){
  var topTenList = document.getElementById('topTen');
  for(el in topScores){
    topTenList.innerHTML += "Player Name" + topScores[el].playerName + "<br />";
    topTenList.innerHTML += "Player Score" + topScores[el].playerScore + "<br />";
    topTenList.innerHTML += "Player Date" + topScores[el].playerDate + "<br />";
  }
});
