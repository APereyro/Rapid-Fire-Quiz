const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveBtn = document.getElementById('saveScoreBtn');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = mostRecentScore;

const saveHighScore = function(e) {
    e.preventDefault();

    if (username.value === '') {
        alert('Please enter your name');
        return;
    }

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'scoreboard.html';
};



saveScoreBtn.addEventListener('click', saveHighScore);
