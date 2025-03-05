console.log("Welcome to world of Music.")
const play = document.querySelector('.play');
let audioElement = new Audio('shub.mp3');

let playing = false;
const seekbar = document.querySelector('#progressbar');
const mygif = document.querySelector('.musicgif');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const ntn = document.querySelector('.ntn');
const ptp = document.querySelector('.ptp');
const inplay = document.querySelectorAll('.inplaybox');
const playlist = [
    'shub.mp3', 'diljit.mp3', '295.mp3', 'allblack.mp3', 'getupjawani.mp3', 'brownrang.mp3', 'hanuman.mp3'
]
let count = 0;
inplay[0].classList.add('specialeffect');
// function currplaybutton() {
//     for (let i = 0; i < inplay.length; i++) {
//         if (i != count) { inplay[i].style.opacity = 0; }
//     }
//     inplay[count].style.opacity = 1;
// }

function setSeekbar() {

    audioElement.currentTime = 0;
    audioElement.src = playlist[count];
    for (let element of inplay) {
        element.innerHTML = '<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
        element.classList.remove('specialeffect');
    }
    inplay[count].classList.add('specialeffect');
    // currplaybutton();
    if (playing) {
        audioElement.play();

        inplay[count].innerHTML = '<path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
        inplay[count].id = "true";
    }
}

function nextMusic() {


    if (count < playlist.length - 1) {
        count++;
    }
    else {
        count = 0
    }
    setSeekbar();



}


function previousMusic() {

    if (count > 0) {
        count--;
    }

    else {
        count = playlist.length - 1;
    }
    setSeekbar()




}


function isplay() {
    for (let element of inplay) {
        element.innerHTML = '<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
    }

    if (!playing) {
        audioElement.play();
        seekbar.max = audioElement.duration;
        playing = true;
        play.innerHTML = '<path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>'
        mygif.style.opacity = 1;
        inplay[count].innerHTML = '<path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
        inplay[count].id = 'true';
    }
    else {
        audioElement.pause();
        playing = false;
        play.innerHTML = '<path d="M382-306.67 653.33-480 382-653.33v346.66ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />'
        mygif.style.opacity = 0;
        inplay[count].id = 'false';
    }
}




play.addEventListener('click', isplay)

audioElement.addEventListener('timeupdate', () => {
    seekbar.value = audioElement.currentTime;
    seekbar.max = audioElement.duration;
    console.log(audioElement.duration);
    if (audioElement.currentTime == audioElement.duration) {
        isplay();
    }
})

seekbar.addEventListener('change', () => {
    audioElement.currentTime = seekbar.value;
})
next.addEventListener('click', nextMusic)
previous.addEventListener('click', previousMusic)
ntn.addEventListener('click', () => {
    if (count < playlist.length - 2) {
        count += 2;
    }
    else {
        count = 0;
    }
    setSeekbar();
})
ptp.addEventListener('click', () => {
    if (count > 1) {
        count -= 2;
    }
    else {
        count = playlist.length - 1
    }
    setSeekbar();
})




for (let i = 0; i < inplay.length; i++) {
    inplay[i].addEventListener('click', () => {
        for (let j = 0; j < inplay.length; j++) {
            if (j != i) {
                inplay[j].id = '';
            }
        }
        if (inplay[i].id === 'false') {
            isplay();
            inplay[i].innerHTML = '<path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
            inplay[i].id = 'true';
        }

        else if (inplay[i].id === 'true') {
            inplay[i].id = 'false';
            inplay[i].innerHTML = '<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
            isplay();
        }
        else {
            inplay[i].id = 'true';
            count = i;
            setSeekbar();
            for (let element of inplay) {
                element.innerHTML = '<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
            }
            inplay[i].innerHTML = '<path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />';
            if (!playing) { isplay(); }
        }
    })
}
