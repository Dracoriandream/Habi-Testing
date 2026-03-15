const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click",()=>{
  navLinks.classList.add("active");
});

closeMenu.addEventListener("click",()=>{
  navLinks.classList.remove("active");
});

/* ACTIVE NAV */
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-200;
    if(scrollY>=sectionTop){
      current=section.getAttribute("id");
    }
  });
  navLink.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }
  });
});