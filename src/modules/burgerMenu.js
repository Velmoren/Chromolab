import animate from "./animate";
// burger
const burgerMenu = () => {
  const btn = document.getElementById("burger");
  const menu = document.getElementById("header-menu");
  const logoPink = document.getElementById("logo-pink");
  const logoWhite = document.getElementById("logo-white");

  let clientWidth = document.documentElement.clientWidth;
  let menuHeight = 620;

  window.addEventListener("resize", () => {
    clientWidth = document.documentElement.clientWidth;
  });

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");

    if (clientWidth <= 380) {
      menuHeight = 250;
    } else if (clientWidth > 380 && clientWidth <= 520) {
      menuHeight = 410;
    } else if (clientWidth > 520) {
      menuHeight = 620;
    }

    if (menu.classList.contains("active")) {
      logoPink.style.display = "block";
      logoPink.style.zIndex = "1000";
      logoWhite.style.display = "none";

      animate({
        // скорость анимации
        duration: 300,
        // Функция расчёта времени
        timing(timeFraction) {
          return timeFraction;
        },
        // Функция отрисовки
        draw(progress) {
          // в ней мы и производим вывод данных
          menu.style.height = progress * menuHeight + "px";
        },
      });
    } else {
      menu.style.height = 0 + "px";

      if (document.documentElement.scrollTop === 0) {
        logoPink.style.display = "none";
        logoPink.style.zIndex = "1";
        logoWhite.style.display = "block";
      }
    }
  });

  document.querySelector("body").addEventListener("click", (event) => {
    let target = event.target;
    if (
      menu.classList.contains("active") &&
      !target.classList.contains("header-burger")
    ) {
      if (!target.closest(".header-menu")) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        menu.style.height = 0 + "px";
      }
    }
  });
};

export default burgerMenu;
