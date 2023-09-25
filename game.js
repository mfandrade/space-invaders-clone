const screen = document.querySelector('#grid');

const TILES_PER_ROW = 15;

let shooterPos = ((TILES_PER_ROW-1) * TILES_PER_ROW) - (Math.round(TILES_PER_ROW/2));


for (let i = 0; i < TILES_PER_ROW ** 2; i++) {
    const tile = document.createElement('div');
    screen.appendChild(tile);
}

const tiles = Array.from(document.querySelectorAll('#grid div'));

const invadersPos = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

function draw() {
    for (let i = 0; i < invadersPos.length; i++) {
        tiles[invadersPos[i]].classList.add('invader');
    }
}
draw();

tiles[shooterPos].classList.add('shooter');

function moveShooter(e) {
    tiles[shooterPos].classList.remove('shooter');

    switch(e.key) {
        case 'ArrowLeft':
            if (shooterPos % TILES_PER_ROW > 0) --shooterPos;
            break;
        case 'ArrowRight':
            if (shooterPos % TILES_PER_ROW < TILES_PER_ROW-1) ++shooterPos;
            break;
    }
    tiles[shooterPos].classList.add('shooter');
}
document.addEventListener('keydown', moveShooter);

