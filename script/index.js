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

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        mediaWrapper.classList.add("view--cases-detail__media--video-played");
    } else {
        video.pause();
        mediaWrapper.classList.remove("view--cases-detail__media--video-played");
    }
});

video.addEventListener("ended", function () {
    // O evento "ended" é acionado quando o vídeo chega ao fim.
    mediaWrapper.classList.remove("view--cases-detail__media--video-played");
});

const fullscreenButton = document.getElementById("fullscreen-button");

fullscreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari e Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // Internet Explorer e Edge
        video.msRequestFullscreen();
    }
});