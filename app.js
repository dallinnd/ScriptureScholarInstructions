document.addEventListener("DOMContentLoaded", () => {
    const hasVisited = localStorage.getItem("visitedBefore");
    const welcomePopup = document.getElementById("welcome-popup");
    const introVideo = document.getElementById("intro-video");

    if (hasVisited) {
        welcomePopup.style.display = "none";
        document.getElementById("home-page").style.display = "block";
    }

    // Transition to Home when video ends
    introVideo.onended = () => {
        closeWelcome();
    };
});

function closeWelcome() {
    localStorage.setItem("visitedBefore", "true");
    document.getElementById("welcome-popup").style.display = "none";
    document.getElementById("home-page").style.display = "block";
    document.getElementById("intro-video").pause();
}

function openVideo(src) {
    const player = document.getElementById("main-player");
    player.src = src;
    document.getElementById("video-overlay").style.display = "flex";
}

function closeVideo() {
    const player = document.getElementById("main-player");
    player.pause();
    document.getElementById("video-overlay").style.display = "none";
}
