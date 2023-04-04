const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const highScoresContainer = document.getElementById('highScores');

const highScoresList = highScores.map(scores => `<li>${scores.name}: ${scores.score}</li>`);
highScoresContainer.innerHTML=highScoresList.join('');
const clearScoresButton = document.getElementById('clearScoresButton');
clearScoresButton.addEventListener('click', function() {
  localStorage.removeItem('highScores');
  highScoresContainer.innerHTML = '';
});


