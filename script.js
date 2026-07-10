/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

/* ==========================
   HEARTS
========================== */

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 35) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);

}

setInterval(createHeart,300);

/* ==========================
   PETALS
========================== */

const petals = document.getElementById("petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"%";

    petal.style.animationDuration=
    (6+Math.random()*6)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },12000);

}

setInterval(createPetal,500);

/* ==========================
   SHOOTING STARS
========================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*40+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},5000);

}

setInterval(shootingStar,3500);

/* ==========================
   MUSIC
========================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=function(){

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸️";

}else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵";

}

}

/* ==========================
   BUTTON
========================== */

document.getElementById("enterBtn").onclick=function(){

document.querySelector(".intro").scrollIntoView({

behavior:"smooth"

});

}
/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";
        lightboxImg.src=img.src;

    });

});

closeBtn.onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};
/* ===========================
TIMELINE ANIMATION
=========================== */

const timelineItems = document.querySelectorAll(".timeline-box");

const timelineObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.2});

timelineItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(80px)";
    item.style.transition=".8s";

    timelineObserver.observe(item);

});
/* ==========================
LOVE LETTER
========================== */

const envelope=document.getElementById("envelope");

const paper=document.getElementById("letterPaper");

let openLetter=false;

envelope.onclick=function(){

if(!openLetter){

paper.style.transform="translateY(-260px)";

paper.style.opacity="1";

openLetter=true;

}else{

paper.style.transform="translateY(180px)";

paper.style.opacity="0";

openLetter=false;

}

}
/* ==========================
PROPOSAL
========================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");

/* YES */

yesBtn.onclick = function(){

    celebration.style.display = "flex";

}

/* NO Button Bhaagega */

noBtn.addEventListener("mouseover",()=>{

    let x = Math.random()*(window.innerWidth-200);

    let y = Math.random()*(window.innerHeight-100);

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

});
function fireworks(){

for(let i=0;i<60;i++){

const fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*100+"vh";

fire.style.fontSize=(20+Math.random()*30)+"px";

fire.style.zIndex="999999";

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},2500);

}

}

yesBtn.addEventListener("click",fireworks);