window.addEventListener('DOMContentLoaded', () => {

const area = document.querySelector('#tic-tac-toe');
const resetBtn = document.querySelector('#reset');
const xWin = document.querySelector('.x-win');
const oWin = document.querySelector('.o-win');
const choiseBtn = document.querySelector('.buttons');
const field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let current = 'x';
let count = 0;
let winStatus = false;
let xWinCount = 0;
let oWinCount = 0;

const startChar = (event) => {
    const data = event.target.getAttribute('data');
    current = data;
    document.querySelector('.out').textContent = `Your choise: ${current.toUpperCase()}`;
};

choiseBtn.addEventListener('click', startChar);

// Функция отрисовки игрового поля || Game field render
const fieldRender = () => {
    for (let i = 0; i < field.length; i++) {
        for (let k = 0; k < field[i].length; k++) {
            area.innerHTML += `<div class="ttt-item" data="${field[i][k]}"></div>`;
        }
    }
};

fieldRender();

const game = () => {
    let data = event.target.getAttribute('data');
    let currentSquare = event.target;
    if (current === 'x') {
        (count % 2 === 0) ? current = 'x' : current = 'o';
    } else {
        (count % 2 === 0) ? current = 'o' : current = 'x';
    }
    if (data == 0) {
        currentSquare.setAttribute('data', current);
        currentSquare.innerHTML = current;
        count++;
    }
    isWinner();
    isDraw(); 
};

area.addEventListener('click', game);

// Функция проверки победителя || Check winner function
const isWinner = () => {
    const [...squares] = document.querySelectorAll('.ttt-item');
    const winnerLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winnerLine.length; i++) {
        if (squares[winnerLine[i][0]].innerHTML === current
            && squares[winnerLine[i][1]].innerHTML === current
            && squares[winnerLine[i][2]].innerHTML === current) {
                winStatus = true;
                alert(current + ' win');
                if(current === 'x') {
                    xWinCount++;
                    xWin.textContent = `Total X Wins: ${xWinCount}`;
                } else {
                    oWinCount++;
                    oWin.textContent = `Total O Wins: ${oWinCount}`;
                }
                setTimeout(() => {
                    startNewGame();
                },1000);
            }
    }
};

// Функция проверки на ничью || check for draw
const isDraw = () => {
    if (count == 9 && winStatus == false) {
        alert('draw');
        setTimeout(() => {
            startNewGame();
        },1000);
    }
};

// Функция старта новой игры || Start new game function
const startNewGame = () => {
    const [...squares] = document.querySelectorAll('.ttt-item');
    squares.forEach(item => {
        item.setAttribute('data', 0);
        item.innerHTML = '';
    });
    count = 0;
    winStatus = false;
};

resetBtn.addEventListener('click', startNewGame);

});