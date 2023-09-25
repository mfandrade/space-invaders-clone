const screen = document.querySelector('#grid');

const DEBUG_MODE = true;
const TILES_PER_ROW = 15;

let shooterPos = ((TILES_PER_ROW-1) * TILES_PER_ROW) - (Math.round(TILES_PER_ROW/2));
let invadersDirection = 0;


for (let i = 0; i < TILES_PER_ROW ** 2; i++) {
    const tile = document.createElement('div');
    if (DEBUG_MODE) {
        tile.innerHTML = i;
        tile.style.textAlign = "center";
        tile.style.fontSize = "8px";
        tile.style.fontFamily = "Courier,mono";
        tile.style.color = "gray";
    }
    screen.appendChild(tile);
}

const tiles = Array.from(document.querySelectorAll('#grid div'));

const invadersPos = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

function drawInvaders() {
    for (let i = 0; i < invadersPos.length; i++) {
        tiles[invadersPos[i]].classList.add('invader');
    }
}
drawInvaders();

function removeInvaders() {
    for (let i = 0; i < invadersPos.length; i++) {
        tiles[invadersPos[i]].classList.remove('invader');
    }
}

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

function moveInvaders() {
    const firstInvader = invadersPos.at(0);
    const lastInvader  = invadersPos.at(-1);
    const onLeft = (firstInvader % TILES_PER_ROW) === 0;
    const onRight = (lastInvader % TILES_PER_ROW) === TILES_PER_ROW-1;

    removeInvaders();
    for (let i = 0; i < invadersPos.length; i++) {
        if (onRight) invadersDirection = -1;
        if (onLeft)  invadersDirection = +1;

        invadersPos[i] += invadersDirection;
    }
    drawInvaders();
}

setInterval(moveInvaders, 500);
