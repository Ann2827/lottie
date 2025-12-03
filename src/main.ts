import "./style.css";
import lottie from "lottie-web";

const element = document.querySelector("#lottie-container");
if (element) {
  const animation = lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation.json", // the path to the animation json
  });
}
