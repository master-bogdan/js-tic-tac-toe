const board = document.querySelector('.tic-tac-toe');
const [...allitem] = document.querySelectorAll('.ttt-item');

let count = 0;

// 1. Добваить возможность ничьей
// 2. Добавить кнопку обнулить игру (начать новую) - сделано
// 3. Добавить счет побед крестиков и ноликов
// 4. Добавить возможность выбора крестика или нолика

board.addEventListener('click', (event) => {
    let currentItem = event.target;
    if (currentItem.classList.contains('ttt-item') 
        && currentItem.innerHTML === '') {
        (count % 2 === 0) ? currentItem.innerHTML = 'x' : currentItem.innerHTML = 'o';
        count++;
    } 
    checkWinner();
    resetResult();
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
        if (allitem[winnerLines[i][0]].innerHTML === 'x'
            && allitem[winnerLines[i][1]].innerHTML === 'x'
            && allitem[winnerLines[i][2]].innerHTML === 'x' ) {
            alert ('x win');
        } 
        else if (allitem[winnerLines[i][0]].innerHTML === 'o'
                && allitem[winnerLines[i][1]].innerHTML === 'o'
                && allitem[winnerLines[i][2]].innerHTML === 'o' ) {
            alert('o win');
        }
    }
};



// Функция сброса
const resetResult = () => {
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        allitem.forEach(item => {
            item.innerHTML = '';
            count = 0;
        });
    });
};

