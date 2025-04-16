const navTb = document.querySelector("#nav-tb");
const navPc = document.querySelector("#nav-pc");

navTb.innerHTML = navPc.innerHTML;

const playBtn = document.querySelector("#playVideo"); // đang lấy <video>
const video = document.querySelector("#aboutVideo");
console.log(playBtn);
console.log(video);
playBtn.addEventListener("click", function () {
    video.play();
    playBtn.style.display = "none";
});

video.addEventListener("click", function () {
    if (!video.paused) {
        video.pause();
        playBtn.style.display = "block";
    }
});
