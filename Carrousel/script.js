var nbr = 5;
var p = 0;

var container = document.getElementById("container");
var left = document.getElementById("left");
var right = document.getElementById("right");

function displayHidden() {
  if (p == -nbr + 1) {
    right.style.visibility = "hidden";
  } else {
    right.style.visibility = "visible";
  }
  if (p == 0) {
    left.style.visibility = "hidden";
  } else {
    left.style.visibility = "visible";
  }
}

document.body.onload = function () {
  container.style.width = 800 * nbr + "px";

  for (i = 1; i <= nbr; i++) {
    let div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('assets/im" + i + ".jpg')";

    container.appendChild(div);
  }

  displayHidden();

  right.addEventListener("click", () => {
    if (p > -nbr + 1) {
      p--;
      container.style.transform = "translate(" + p * 800 + "px)";
      container.style.transition = "all 0.5s ease";
      displayHidden();
    }
  });

  left.addEventListener("click", () => {
    if (p < 0) {
      p++;
      container.style.transform = "translate(" + p * 800 + "px)";
      container.style.transition = "all 0.5s ease";
      displayHidden();
    }
  });
};
