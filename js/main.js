//  Document Fav Icon Render
let link1 = document.createElement("link");

link1.rel = "icon";
link1.href = "/images/fav-icon.jpg";
document.head.appendChild(link1);

// Put the AOS animations on every page for the scroll
let link2 = document.createElement("link");
link2.rel = "stylesheet";
link2.href = "https://unpkg.com/aos@next/dist/aos.css";
document.head.appendChild(link2);

//  Document Title Change and append the head with its coresponding stylsheet
const page = window.location.pathname;
let linkGeneral = document.createElement("link");
linkGeneral.rel = "stylesheet";

if (page === "/") {
  document.title = "Home | Catly";
  linkGeneral.href = "/css/home.css";
  document.head.appendChild(linkGeneral);
} else if (page === "/cats") {
  document.title = "Cats | Catly";
  linkGeneral.href = "/css/cats.css";
  document.head.appendChild(linkGeneral);
} else if (page === "/food") {
  document.title = "Food | Catly";
  linkGeneral.href = "/css/food.css";
  document.head.appendChild(linkGeneral);
} else if (page === "/contact") {
  document.title = "Contact | Catly";
  linkGeneral.href = "/css/contact.css";
  document.head.appendChild(linkGeneral);
}
