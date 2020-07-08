// 1. Добавить возможность ничьей
// 2. Добавить кнопку обнулить игру (начать новую) - сделано
// 3. Добавить счет побед крестиков и ноликов - сделано
// 4. Добавить возможность выбора крестика или нолика - сделано

const chooseButtons = document.querySelector('.choose-buttons');
const charChoiseOut = document.querySelector('.choise');
const board = document.querySelector('.tic-tac-toe');
const [...allSquares] = document.querySelectorAll('.ttt-item');
const reset = document.querySelector('#reset');
const xOut = document.querySelector('.x-win');
const oOut = document.querySelector('.o-win');

let setChar1 = 'x';
let setChar2 = 'o';

// Функция выбора символа
const charChoise = (event) => {
    let choise = event.target.getAttribute('id');
    if (choise === 'x') {
        setChar1 = 'x';
        setChar2 = 'o';
    } 
    else {
        setChar1 = 'o';
        setChar2 = 'x';
    } 
    charChoiseOut.innerHTML = `You choose ${setChar1.toLocaleUpperCase()}`;
};

chooseButtons.addEventListener('click', charChoise);

// Счетчик ходов и следующего символа
let count = 0;
let currentChar = (count % 2 === 0) ? setChar1 : setChar2;

// Счетчики побед Х или О
let xWin = 0;
let oWin = 0;

// Функция сброса
const resetResult = () => {
    allSquares.forEach(item => {
        item.innerHTML = '';
        count = 0;
    });
};

// Сброс игры по нажатию кнопки
reset.addEventListener('click', resetResult);

// Функция заполнения квадратов символами
const boardFill = (event) => {
    currentChar = (count % 2 === 0) ? setChar1 : setChar2;
    let currentSquare = event.target;
    if (currentSquare.classList.contains('ttt-item') 
        && currentSquare.innerHTML === '') {
        currentSquare.innerHTML = currentChar;
        count++;
    } 
    checkWinner();
};

board.addEventListener('click', boardFill);

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
        if (allSquares[winnerLines[i][0]].innerHTML === currentChar
            && allSquares[winnerLines[i][1]].innerHTML === currentChar
            && allSquares[winnerLines[i][2]].innerHTML === currentChar ) {
            alert (currentChar + ' win');

            // Условие для отображения счетчика победа Х или О
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



