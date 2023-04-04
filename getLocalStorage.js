const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const highScoresContainer = document.getElementById('highScores');

const highScoresList = highScores.map(scores => `${scores.name}: ${scores.score}`);
highScoresContainer.innerHTML=highScoresList.join('\n');

//fix scores to appear in new lines
