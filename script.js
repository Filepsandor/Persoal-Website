function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  scrollToElement(".header.container");
});

link2.addEventListener("click", () => {
  scrollToElement(".header");
});

link3.addEventListener("click", () => {
  scrollToElement(".js");
});

const getSrarted = document.getElementById("btn1");

getSrarted.addEventListener("click", () => {
  scrollToElement(".card");
});

document.addEventListener("DOMContentLoaded", function () {
  const joinNowButtons = document.querySelectorAll("#btn2");

  joinNowButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "payment.html";
    });
  });
});
