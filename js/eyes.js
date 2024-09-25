// Cat Eyes

const eyes = document.getElementsByClassName("ball");

document.addEventListener("mousemove", (event) => {
  updateEyesPosition(event);
});

document.addEventListener("touchmove", (event) => {
  updateEyesPosition(event);
});

function updateEyesPosition(event) {
  let x, y;
  if (event.type === "mousemove") {
    x = (event.clientX * 100) / window.innerWidth + "%";
    y = (event.clientY * 100) / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse/finger
    //event.clientY => get the Vertical coordinate of the mouse/finger
  } else if (event.type === "touchmove") {
    x = (event.touches[0].clientX * 100) / window.innerWidth + "%";
    y = (event.touches[0].clientY * 100) / window.innerHeight + "%";
  }

  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height;
  for (let i = 0; i < 2; i++) {
    eyes[i].style.left = x;
    eyes[i].style.top = y;
    eyes[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
}
