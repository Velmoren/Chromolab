// paralax
const paralax = () => {
  const heroSection = document.querySelector(".hero");
  const paralaxFirst = document.getElementById("paralaxFirst");
  const paralaxSecond = document.getElementById("paralaxSecond");
  const paralaxThird = document.getElementById("paralaxThird");
  const paralaxFourth = document.getElementById("paralaxFourth");
  const paralaxFifth = document.getElementById("paralaxFifth");
  const paralaxSixth = document.getElementById("paralaxSixth");
  const paralaxSeventh = document.getElementById("paralaxSeventh");
  const paralaxEighth = document.getElementById("paralaxEighth");

  heroSection.addEventListener("mousemove", (event) => {
    const x = event.pageX / document.documentElement.clientWidth;
    const y = event.pageY / document.documentElement.clientHeight;

    const giveCssText = (xAd, yAd, deg) => {
      return `transform: 
        translate(-${x * xAd}px,
           -${y * yAd}px)  rotate(${x * y * deg}deg)`;
    };

    paralaxFirst.style.cssText = giveCssText(30, 30, 40);
    paralaxSecond.style.cssText = giveCssText(35, 35, -45);
    paralaxThird.style.cssText = giveCssText(25, 25, 15);
    paralaxFourth.style.cssText = giveCssText(20, 20, 30);
    paralaxFifth.style.cssText = giveCssText(18, 18, -58);
    paralaxSixth.style.cssText = giveCssText(23, 23, 43);
    paralaxSeventh.style.cssText = giveCssText(38, 38, -18);
    paralaxEighth.style.cssText = giveCssText(31, 31, 91);
  });
};

export default paralax;
