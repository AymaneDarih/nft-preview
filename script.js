"use:strict";
const nft = document.querySelector(".nft");
const nft__img = document.querySelector(".nft__img");
const html = ` <div class="nft__shadow" id="shadow"></div>`;

nft__img.addEventListener("mouseover", function (e) {
  console.log("yes baby");
  e.preventDefault();
  if (e.target.classList.contains("nft__img")) {
    nft.insertAdjacentHTML("beforeend", html);
  }
});

nft__img.addEventListener("mouseout", removeChild);

function removeChild() {
  const shadow = document.getElementById("shadow");
  const parent = shadow.parentNode;
  parent.removeChild(shadow);
  console.log("removed");
