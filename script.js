/*==========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active-menu");

});

/*==========================================
        CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active-menu");

    });

});

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*==========================================
        STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(15,23,42,.98)";
        navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(15,23,42,.95)";
        navbar.style.boxShadow="none";

    }

});

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==========================================
        TYPING EFFECT
==========================================*/

const typing=document.querySelector(".typing-text");

const words=[

    "Full Stack Java Developer",

    "React.js Developer",

    "Spring Boot Developer",

    "Problem Solver"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

    const current=words[wordIndex];

    if(!deleting){

        typing.textContent=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(type,1200);

            return;

        }

    }

    else{

        typing.textContent=current.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(type,deleting?50:90);

}

type();

/*==========================================
        SCROLL REVEAL
==========================================*/

const reveals=document.querySelectorAll(

".skill-card,.project-card,.education-card,.certificate-card,.contact-card,.timeline-content,.info-box"

);

function reveal(){

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const top=item.getBoundingClientRect().top;

        if(top<windowHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
        SCROLL TO TOP BUTTON
==========================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.className="top-btn";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("show-top");

    }

    else{

        topBtn.classList.remove("show-top");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*==========================================
        DYNAMIC CSS
==========================================*/

const style=document.createElement("style");

style.innerHTML=`

.active{

color:#3b82f6!important;

}

.show{

opacity:1!important;

transform:translateY(0)!important;

}

.skill-card,
.project-card,
.education-card,
.certificate-card,
.contact-card,
.timeline-content,
.info-box{

opacity:0;

transform:translateY(40px);

transition:.8s;

}

.top-btn{

position:fixed;

bottom:25px;

right:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#2563eb;

color:#fff;

font-size:20px;

cursor:pointer;

display:flex;

justify-content:center;

align-items:center;

opacity:0;

pointer-events:none;

transition:.3s;

box-shadow:0 15px 30px rgba(0,0,0,.25);

}

.show-top{

opacity:1;

pointer-events:auto;

}

.top-btn:hover{

transform:translateY(-5px);

background:#1d4ed8;

}

@media(max-width:768px){

.active-menu{

display:flex!important;

flex-direction:column;

position:absolute;

top:80px;

left:0;

width:100%;

background:#0f172a;

padding:25px;

gap:20px;

text-align:center;

}

}

`;

document.head.appendChild(style);

/*==========================================
        PRELOADER
==========================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

/*==========================================
        CONSOLE
==========================================*/

console.log("🚀 Portfolio Loaded Successfully");