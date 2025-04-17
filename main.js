const navTb = document.querySelector("#nav-tb");
const navPc = document.querySelector("#nav-pc");

navTb.innerHTML = navPc.innerHTML;

// const playBtn = document.querySelector("#playVideo"); // đang lấy <video>
// const video = document.querySelector("#aboutVideo");
// console.log(playBtn);
// console.log(video);
// playBtn.addEventListener("click", function () {
//     video.play();
//     playBtn.style.display = "none";
// });

// video.addEventListener("click", function () {
//     if (!video.paused) {
//         video.pause();
//         playBtn.style.display = "block";
//     }
// });

const projectBtn = document.querySelector("#project-cta");

const modalProject = new Popzy({
    templateId: "project-tab",
    closeMethods: ["overlay", "escape", "button"],
    cssClass: ["popzy__container", "custom-class-2"],
    // footer: true,
});

console.log(modalProject);
// modalProject.addFooterButton("New Tab", "btn left", function (e) {

// });

// modalProject.addFooterButton("Cancel", "btn margin-top", function (e) {
//     modalProject.close();
// });

projectBtn.onclick = () => {
    modalProject.open();

    const tabs = new Tabzy("#tabs", {
        remember: true,
    });
};
