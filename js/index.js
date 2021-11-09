const popupBox = document.getElementById("popupButton");
// console.log(popupBox);
const popUp = document.getElementById("popUp");
// console.log(popUp);
const pics = document.getElementsByClassName("pic");
//   console.log(pic);
const lightbox = document.getElementById("lightbox");
//   console.log(lightbox);
const lightboxImage = document.getElementById("lightboxImage");
//   console.log(lightboxImage);

popupBox.addEventListener("click", () => {
    popUp.style.display = "block";
})

for (i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", showLightbox);
}
function showLightbox() {
    const bigLocation = this.getAttribute("data-src");
    console.log(bigLocation);
    lightboxImage.setAttribute("src", bigLocation);
    lightbox.style.display = "block";
}

//   lightbox 닫기
lightbox.onclick = function () {
    lightbox.style.display = "none";
};