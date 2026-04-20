import "./style.css";
import lottie from "lottie-web";

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

const elementSleep = document.querySelector("#lottie-container-sleep");
if (elementSleep) {
  lottie.loadAnimation({
    container: elementSleep, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "sleep.json", // the path to the animation json
  });
}
const elementSleep2 = document.querySelector("#lottie-container-sleep2");
if (elementSleep2) {
  lottie.loadAnimation({
    container: elementSleep2, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "sleep2.json", // the path to the animation json
  });
}

const elementOne = document.querySelector("#lottie-container-one");
if (elementOne) {
  lottie.loadAnimation({
    container: elementOne, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "one.json", // the path to the animation json
  });
}

const elementHm = document.querySelector("#lottie-container-hm");
if (elementHm) {
  lottie.loadAnimation({
    container: elementHm, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "hm.json", // the path to the animation json
  });
}
