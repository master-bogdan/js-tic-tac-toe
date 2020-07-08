const board = document.querySelector('.tic-tac-toe');
const [...allitem] = document.querySelectorAll('.ttt-item');
const reset = document.querySelector('#reset');
const xOut = document.querySelector('.xWin');
const oOut = document.querySelector('.oWin');

// Функция сброса
const resetResult = () => {
    allitem.forEach(item => {
        item.innerHTML = '';
        count = 0;
    });
};

// Сброс игры по нажатию кнопки
reset.addEventListener('click', resetResult);

let count = 0;
let currentChar = (count % 2 === 0) ? 'x' : 'o';
let xWin = 0;
let oWin = 0;
// 1. Добавить возможность ничьей
// 2. Добавить кнопку обнулить игру (начать новую) - сделано
// 3. Добавить счет побед крестиков и ноликов - сделано
// 4. Добавить возможность выбора крестика или нолика

board.addEventListener('click', (event) => {
    currentChar = (count % 2 === 0) ? 'x' : 'o';
    let currentItem = event.target;
    if (currentItem.classList.contains('ttt-item') 
        && currentItem.innerHTML === '') {
        currentItem.innerHTML = currentChar;
        count++;
    } 
    checkWinner();
    resetResult;
});

// Функция поиска победителя
const checkWinner = () => {
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winnerLines.length; i++) {
        if (allitem[winnerLines[i][0]].innerHTML === currentChar
            && allitem[winnerLines[i][1]].innerHTML === currentChar
            && allitem[winnerLines[i][2]].innerHTML === currentChar ) {
            alert (currentChar + ' win');
            if (currentChar === 'x') {
                xWin++;
                xOut.innerHTML = `Total X Wins: ${xWin}`;
            } 
            else {
                oWin++;
                oOut.innerHTML = `Total O Wins: ${oWin}`;
            }
            resetResult();
        } 
    }
};



