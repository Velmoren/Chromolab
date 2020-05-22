import calc from "./calc";

//   подсчет в блоке футера
const calculateActive = () => {
  const radioBtns = document.querySelectorAll(".radio-btn-calc");
  const radioBtns2 = document.querySelectorAll(".radio-btn-calc2");

  radioBtns.forEach((btn) => {
    btn.addEventListener("input", () => {
      calc();
    });
  });

  radioBtns2.forEach((btn) => {
    btn.addEventListener("input", () => {
      calc();
    });
  });
};

export default calculateActive;
