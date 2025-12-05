import "./style.css";
import lottie from "lottie-web";

const elementLight = document.querySelector("#lottie-container-light");
if (elementLight) {
  const animation = lottie.loadAnimation({
    container: elementLight, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation-light.json", // the path to the animation json
  });
}

const elementDark = document.querySelector("#lottie-container-dark");
if (elementDark) {
  lottie.loadAnimation({
    container: elementDark, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation-dark.json", // the path to the animation json
  });
}

const elementUnauthorized = document.querySelector("#lottie-container-unauthorized");
if (elementUnauthorized) {
  lottie.loadAnimation({
    container: elementUnauthorized, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "unauthorized.json", // the path to the animation json
  });
}

const elementUnauthorizedColored = document.querySelector("#lottie-container-unauthorized-colored");
if (elementUnauthorizedColored) {
  lottie.loadAnimation({
    container: elementUnauthorizedColored, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "unauthorizedColored.json", // the path to the animation json
  });
}
