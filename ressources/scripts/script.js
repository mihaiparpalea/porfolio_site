let imgSrc=""

function smileyImg(x) {
  imgSrc = x.src;
  x.src="/ressources/images/tongue.gif";
}
function normalImg(x) {
  x.src = imgSrc;
}