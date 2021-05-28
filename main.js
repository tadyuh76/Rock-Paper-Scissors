let choice = ['keo', 'bua', 'bao']
    choiceBox = document.querySelector('.choice-box')
    resultBox = document.querySelector('.result-box')
    result = document.querySelector('.result')
    playerChoice = document.querySelector('.player-choice')
    computerChoice = document.querySelector('.computer-choice')
    playerChoiceImg = document.querySelector('.player')
    computerChoiceImg = document.querySelector('.computer');


function run(player) {
    choiceBox.style.display = 'none';
    resultBox.style.display = 'block';

    playerChoiceImg.src = `/img/${player}.png`;
    playerChoice.append(playerChoiceImg);

    computer = choice[Math.floor(Math.random() * 3)];
    computerChoiceImg.src = `/img/${computer}.png`;
    computerChoice.append(computerChoiceImg);

    if (player == computer) {
        result.innerText = 'Hòa';
        result.style.color = 'efb700';
    }
    else if (player == 'keo' && computer == 'bao' || player == 'bua' && computer == 'keo' || player == 'bao' && computer == 'bua') {
        result.innerText = 'Bạn Thắng';
        result.style.color = '#008450';
    }
    else {
        result.innerText = 'Bạn Thua';
        result.style.color = '#b81d13';
    }
}

function playAgain() {
    choiceBox.style.display = 'block';
    resultBox.style.display = 'none';
}