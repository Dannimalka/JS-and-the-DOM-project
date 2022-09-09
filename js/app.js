// adds elements to navbar and makes smooth scroll
// part 1
let ul = document.getElementById("navbar");
const navSections = document.querySelectorAll("[data-nav]");
const sectionsOnScreen = document.querySelectorAll("#section");

//console.log(sectionsOnScreen);
navSections.forEach((individualSection) => {
  linkText = individualSection.getAttribute("data-nav");

  let li = document.createElement("li");
  li.setAttribute("id", linkText);

  li.addEventListener("click", function () {
    individualSection.scrollIntoView({ behavior: "smooth" });
  });

  let text = document.createTextNode(linkText);

  li.appendChild(text);
  ul.appendChild(li);
});

// part 2 - Navbar & section highlighter

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  navSections.forEach((current) => {
    const sectionHeight = current.offsetHeight;

    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 50;
    sectionId = current.getAttribute("data-nav");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.getElementById(sectionId).classList.add("active");
      current.classList.add("section-active");
    } else {
      document.getElementById(sectionId).classList.remove("active");
      current.classList.remove("section-active");
    }
  });
}

//Part 3
//burgermenu, toggle on/off the burger menu and transforms the burger to an X

const navBurger = () => {
  const burgerMenu = document.querySelector(".burger");
  const navBar = document.querySelector(".navbar-ul");
  const burgerLine1 = document.querySelector(".line1");
  const burgerLine2 = document.querySelector(".line2");
  const burgerLine3 = document.querySelector(".line3");
  const x = document.querySelector(".x");

  burgerMenu.addEventListener("click", function () {
    navBar.classList.toggle("burger-active");
    burgerLine1.classList.toggle("line1-active");
    burgerLine2.classList.toggle("line2-active");
    burgerLine3.classList.toggle("line3-active");
    x.classList.toggle("x-active");
  });
};
navBurger();

// Part 4
//Subscribe button

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("submitted-active");
  form.textContent = "Thank you for that!";
});
