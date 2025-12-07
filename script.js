// Carousel auto défilement (version améliorée)
// défilement ultra fluide et continu
document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".track");

    if(!track) return;

    let speed = 1;

    function animate(){
        track.scrollLeft += speed;

        if(track.scrollLeft >= track.scrollWidth/2){
            track.scrollLeft = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();

});

/* Effet glass + ombre pour catégories */
.categorie-btn{
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

