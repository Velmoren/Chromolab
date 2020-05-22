// смена лого
const resizeWin = () => {
  const header = document.querySelector(".header");
  const logoPink = document.getElementById("logo-pink");
  const logoWhite = document.getElementById("logo-white");
  let clientWidth = document.documentElement.clientWidth;
  let scrollTop = document.documentElement.scrollTop;

  window.addEventListener("resize", () => {
    clientWidth = document.documentElement.clientWidth;
  });

  window.addEventListener("scroll", () => {
    if (clientWidth <= 768) {
      scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        header.classList.add("gray-back");
        logoPink.style.display = "block";
        logoPink.style.zIndex = "1000";
        logoWhite.style.display = "none";
      } else {
        header.classList.remove("gray-back");
        logoPink.style.display = "none";
        logoPink.style.zIndex = "1";
        logoWhite.style.display = "block";
      }
    }
  });
};

export default resizeWin;
