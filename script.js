document.addEventListener("DOMContentLoaded", () => {
    
    const track = document.querySelector(".track");
    const left = document.getElementById("arrowLeft");
    const right = document.getElementById("arrowRight");

    let paused = false;

    // pause au survol
    track.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
        paused = true;
    });

    track.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
        paused = false;
    });

    // flèches
    left.onclick = () => {
        track.style.transform = `translateX(${getX() + 300}px)`;
    };

    right.onclick = () => {
        track.style.transform = `translateX(${getX() - 300}px)`;
    };

    function getX(){
        const m = getComputedStyle(track).transform;

        if(m === "none") return 0;

        return parseFloat(m.split(",")[4]);
    }

});
