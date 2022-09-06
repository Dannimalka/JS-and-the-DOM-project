/* adds elements to navbar and makes smooth scroll*/
let ul = document.getElementById("navbar");
const navSections = document.querySelectorAll("[data-nav]");

navSections.forEach((individualSection) => {
  linkText = individualSection.getAttribute("data-nav");
  console.log(linkText);
  let li = document.createElement("li");
  li.addEventListener("click", function () {
    individualSection.scrollIntoView({ behavior: "smooth" });
  });

  let text = document.createTextNode(linkText);
  li.appendChild(text);
  ul.appendChild(li);
});

//Not working as intended
/*
const navUlLi = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", function () {
  let current = "";
  navSections.forEach((individualSection) => {
    const linkText = individualSection.offsetTop;
    sectionHeight = individualSection.clientHeight;
    if (scrollY > linkText) {
      current = individualSection.getAttribute("data-nav");
    }
  });
  navUlLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
*/

//burgermenu, all it does is to add a class of active to .burger when clicked on

const navBurger = () => {
  const burgerMenu = document.querySelector(".burger");
  const navBar = document.querySelector(".navbar-ul");

  burgerMenu.addEventListener("click", function () {
    navBar.classList.toggle("burger-active");
  });
};
navBurger();
