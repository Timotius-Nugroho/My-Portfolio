function goToSimpleTalk() {
  window.open("https://simple-talk.netlify.app/", "_blank");
}
function goToDompetMu() {
  window.open("https://dompetmu.vercel.app/landing", "_blank");
}
function goToCoffeeExpress() {
  window.open("https://coffee-frontend.vercel.app/", "_blank");
}
function goToTiketinAja() {
  window.open("https://tiketinaja.netlify.app/", "_blank");
}
function goToCatchPoke() {
  window.open("https://catchpoke-v2.netlify.app/", "_blank");
}

document
  .getElementById("simple-talk")
  .addEventListener("click", goToSimpleTalk);
document.getElementById("dompet-mu").addEventListener("click", goToDompetMu);
document
  .getElementById("coffee-express")
  .addEventListener("click", goToCoffeeExpress);
document
  .getElementById("tiketin-aja")
  .addEventListener("click", goToTiketinAja);
document.getElementById("catch-poke").addEventListener("click", goToCatchPoke);
