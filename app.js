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
/*Not working as intended*/
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
  navSections.forEach((individualSection) => {
    if (individualSection) {
      individualSection.className = "active";
    } else {
      individualSection.className = "";
    }
  });
});
*/
