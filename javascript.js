let $button = document.querySelector(".nav-bar");
let $navlinks = document.querySelector(".nav-links");

$button.addEventListener("click", () => {
    $navlinks.classList.toggle("display");
});

let $mySong = document.getElementById('mySong');
let icon = document.getElementById('btn');
icon.onclick = () => {
    if ($mySong.paused) {
        $mySong.play();
        icon.src = 'pause.png'
    } else {
        $mySong.pause();
        icon.src = 'play.png'
    }
}
