const grid = document.querySelector('#grid');

const TILES_PER_ROW = 15;

let spaceshipPos = ((TILES_PER_ROW-1) * TILES_PER_ROW) - (Math.round(TILES_PER_ROW/2));


for (let i = 0; i < TILES_PER_ROW ** 2; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('#grid div'));

const alienPos = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

function draw() {
    for (let i = 0; i < alienPos.length; i++) {
        squares[alienPos[i]].classList.add('invader');
    }
}
draw();

squares[spaceshipPos].classList.add('shooter');

