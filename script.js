const c1 = document.querySelector(".c-1")
const c2 = document.querySelector(".c-2")
const c3 = document.querySelector(".c-3")

const s1 = document.querySelector(".s-1")
const s2 = document.querySelector(".s-2")
const s3 = document.querySelector(".s-3")

c1.addEventListener("click", handleSlide1)
function handleSlide1(){
    s1.classList.add("active-slide")
    s2.classList.remove("active-slide")
    s3.classList.remove("active-slide")
    c1.classList.add("circle-active")
    c2.classList.remove("circle-active")
    c3.classList.remove("circle-active")
}
c2.addEventListener("click", handleSlide2)
function handleSlide2(){
    s2.classList.add("active-slide")
    s1.classList.remove("active-slide")
    s3.classList.remove("active-slide")
    c2.classList.add("circle-active")
    c1.classList.remove("circle-active")
    c3.classList.remove("circle-active")
}
c3.addEventListener("click", handleSlide3)
function handleSlide3(){
    s3.classList.add("active-slide")
    s1.classList.remove("active-slide")
    s2.classList.remove("active-slide")
    c3.classList.add("circle-active")
    c2.classList.remove("circle-active")
    c1.classList.remove("circle-active")
}

// responsive
const btnHamb = document.querySelector(".btn-hamb");
const navLink = document.querySelector(".box-nav-link");

btnHamb.addEventListener("click", btnHambActive)
function btnHambActive(){
    btnHamb.classList.toggle("btn-hamb-active")
    navLink.classList.toggle("nav-link-active")
}