const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isGameOver = false;

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(function() {
            dino.classList.remove('jump');
        }, 400);
    }
}

function checkCollision() {
    const dinoSize = dino.getBoundingClientRect();
    const cactusSize = cactus.getBoundingClientRect();
    if (
        dinoSize.top < cactusSize.bottom &&
        dinoSize.bottom > cactusSize.top &&
        dinoSize.right > cactusSize.left &&
        dinoSize.left < cactusSize.right 
    ) {
        gameOver();
        alert('Вы проиграли!');
    }
}

function gameOver() {
    isGameOver = true;
}

function gameLoop() {
    if (!isGameOver) {
        checkCollision();
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();