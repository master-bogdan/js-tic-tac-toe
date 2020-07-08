// 1. Добавить возможность ничьей
// 2. Добавить кнопку обнулить игру (начать новую) - сделано
// 3. Добавить счет побед крестиков и ноликов - сделано
// 4. Добавить возможность выбора крестика или нолика - сделано

const area = document.querySelector('#tic-tac-toe');
const field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let current = 1;
let count = 0;

const fieldRender = () => {
    for (let i = 0; i < field.length; i++) {
        for (let k = 0; k < field[i].length; k++) {
            area.innerHTML += `<div class="ttt-item" data="${field[i][k]}"></div>`;
        }
    }
};

fieldRender();



