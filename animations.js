lottie.loadAnimation({
  container: document.getElementById("lottie-bg"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/fondo.json",
});

lottie.loadAnimation({
  container: document.getElementById("backend__animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/backend.json",
});

const animacionSupport = lottie.loadAnimation({
  container: document.getElementById("ico_support"),
  renderer: "svg",
  loop: true,
  autoplay: true,

  path: "assets/support.json",
});
const animacionDev = lottie.loadAnimation({
  container: document.getElementById("ico_dev"),
  renderer: "svg",
  loop: true,
  autoplay: true,

  path: "assets/dev.json",
});
animacionDev.setSpeed(0.65);
animacionSupport.setSpeed(0.75);
