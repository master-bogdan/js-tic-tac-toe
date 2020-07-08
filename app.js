// 2. Добавить кнопку обнулить игру (начать новую) - сделано
// 3. Добавить счет побед крестиков и ноликов - сделано
// 4. Добавить возможность выбора крестика или нолика - сделано

const area = document.querySelector('#tic-tac-toe');
const field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let current = '';
let count = 0;
let winStatus = false;

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
    console.log(currentSquare);
    (count % 2 === 0) ? current = 'x' : current = 'o';
    if (data == 0) {
        currentSquare.setAttribute('data', current);
        currentSquare.innerHTML = current;
        count++;
    }
    isWinner();
    isDraw(); 
};

area.addEventListener('click', game);

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
            }
    }
};

const isDraw = () => {
    if (count == 9 && winStatus == false) {
        alert('draw');
    }
};
