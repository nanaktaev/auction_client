let frogElement;
let frogLeftElement;
let rotationAngle = 0;
let rotationAngleLeft = 0;
let keys = {};

$(window).on('load', function () {
    frogElement = $('.rotate');
    frogLeftElement = $('.rotate-left');
    rotateFrog();
    rotateFrogLeft();
});

function rotateFrog() {
    rotationAngle += 360;
    frogElement.rotate(rotationAngle);
    frogElement.click(function () {
        rotationAngle += 360;
        if (keys["81"]) {
            const audio = new Audio('../assets/audio/frog.mp3');
            audio.play();
        }
        $(this).rotate(rotationAngle);
    });
}

function rotateFrogLeft() {
    rotationAngleLeft -= 360;
    frogLeftElement.rotate(rotationAngleLeft);
    frogLeftElement.click(function () {
        rotationAngleLeft -= 360;
        if (keys["81"]) {
            const audio = new Audio('../assets/audio/frog.mp3');
            audio.play();
        }
        $(this).rotate(rotationAngleLeft);
    });
}

jQuery.fn.rotate = function (degrees) {
    $(this).css({'transform': 'rotate(' + degrees + 'deg)'});
};

window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};