// the ./ is important, because that show that we WATCH that current file

fetch("./navbar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("nav").innerHTML += data;

    // Navbar Toggler
    const collapsible = document.getElementById("navbar");
    const triggerer = document.querySelector(".nav__toggler");

    triggerer.addEventListener("click", function () {
      if (collapsible.id == "navbar") {
        collapsible.setAttribute("id", "navbar--expanded");
      } else {
        collapsible.setAttribute("id", "navbar");
      }
    });

    const searchInput = document.getElementById("searchbar-nav");

    searchInput.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        const searchWord = event.target.value;
        window.find(searchWord);
      }
    });
  });
