const btn = document.getElementById("btn");
const btnText = document.getElementById("btnText");

btn.onclick = function () {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
};
