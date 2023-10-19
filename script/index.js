/**
 * QR CODE REVIEW
 */
const qrCodeBox = document.getElementById('qr-code-reveal');

qrCodeBox.addEventListener('click', () => {
    if (qrCodeBox.classList.contains('qr-code-reveal--show')) {
        qrCodeBox.classList.remove('qr-code-reveal--show');
    } else {
        qrCodeBox.classList.add('qr-code-reveal--show');
    }
});

/**
 * TOGGLE VIDEO
 */

const video = document.getElementById("video");
const playButton = document.getElementById("play-button");
const mediaWrapper = document.getElementById("media-wrapper");
video.controls = false;

function requestFullscreen() {
    // if (video.requestFullscreen) {
    //     video.requestFullscreen();
    // } else if (video.mozRequestFullScreen) { // Firefox
    //     video.mozRequestFullScreen();
    // } else if (video.webkitRequestFullscreen) { // Chrome, Safari e Opera
    //     video.webkitRequestFullscreen();
    // } else if (video.msRequestFullscreen) { // Internet Explorer e Edge
    //     video.msRequestFullscreen();
    // }
    mediaWrapper.classList.add("view--cases-detail__media--video-fullscreen");
}

function exitFullscreen() {
    // if (document.exitFullscreen) {
    //     document.exitFullscreen();
    // } else if (document.mozCancelFullScreen) { // Firefox
    //     document.mozCancelFullScreen();
    // } else if (document.webkitExitFullscreen) { // Chrome, Safari, e Opera
    //     document.webkitExitFullscreen();
    // } else if (document.msExitFullscreen) { // Internet Explorer e Edge
    //     document.msExitFullscreen();
    // }

    mediaWrapper.classList.remove("view--cases-detail__media--video-fullscreen");
}

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        mediaWrapper.classList.add("view--cases-detail__media--video-played");
        requestFullscreen();
    } else {
        video.pause();
        mediaWrapper.classList.remove("view--cases-detail__media--video-played");
    }
});

video.addEventListener("ended", function () {
    mediaWrapper.classList.remove("view--cases-detail__media--video-played");
});

const fullscreenButton = document.getElementById("fullscreen-button");

fullscreenButton.addEventListener("click", function () {
    if (mediaWrapper.classList.contains("view--cases-detail__media--video-fullscreen")) {
        exitFullscreen();
    } else {
        requestFullscreen();
    }
});
