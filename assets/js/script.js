document.addEventListener("DOMContentLoaded", () => {
  // общая функция анимаций
  function animate({ duration, draw, timing }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      let progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

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
  };

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

  // смена цвета у select
  const chengeColorSelect = () => {
    const selects = document.querySelectorAll(".selectColors");

    selects.forEach((select) => {
      select.addEventListener("change", () => {
        if (+select.value === 1) {
          select.classList.remove("black-text");
          select.classList.add("gray-text");
        } else {
          select.classList.remove("gray-text");
          select.classList.add("black-text");
        }
      });
    });
  };

  // активация второй формы
  const activateSecondForm = () => {
    const newForms = document.querySelectorAll(".quest-new-form");
    const activateBtns = document.querySelectorAll(".btnCreateForm");

    newForms.forEach((newForm, indexNewForm) => {
      if (indexNewForm !== 0) newForm.style.display = "none";
    });

    activateBtns.forEach((item, i) => {
      item.addEventListener("change", function () {
        const parent = this.parentNode.parentNode;
        const form = parent.querySelector("form");
        const label = parent.querySelector("label");
        form.style.opacity = 1;
        form.style.pointerEvents = "auto";

        parent.classList.add("active-dop-form");

        if (item.checked) {
          label.classList.add("activate-second-form__activate");
          if (i + 1 < newForms.length) {
            newForms[i + 1].style.display = "block";
          }

          if (i > 0) {
            activateBtns.forEach((btn, iBtn) => {
              if (iBtn < i) {
                btn.parentNode.style.pointerEvents = "none";
              }
            });
          }
        } else {
          label.classList.remove("activate-second-form__activate");

          parent.classList.remove("active-dop-form");
          newForms[i + 1].style.display = "none";

          if (i > 0) {
            activateBtns[i - 1].parentNode.style.pointerEvents = "auto";
          }
        }
        calc();
      });
    });
  };

  const calc = () => {
    const price = document.getElementById("price-quiz");
    const priceFirst = document.getElementById("price-first");
    const priceSecond = document.getElementById("price-second");
    const finalPrice = document.getElementById("final-price");
    const activeDopForm = document.querySelectorAll(".active-dop-form");
    const radioBtns = document.querySelectorAll(".radio-btn-calc");

    let priceScience = 4500;
    let mens = 1000;
    let location = 3000;

    radioBtns.forEach((btn) => {
      if (btn.checked) {
        location = btn.value;
      }
    });

    let priceScienceCount = String(
      priceScience + priceScience * activeDopForm.length
    );

    let count = String(
      +location +
        priceScience +
        priceScience * activeDopForm.length +
        mens +
        mens * activeDopForm.length
    );
    let countSecond = String(1000 + mens * activeDopForm.length);

    price.textContent = location.charAt(0) + " " + location.substr(1);
    priceSecond.textContent =
      countSecond.charAt(0) + " " + countSecond.substr(1);

    if (priceScienceCount.length < 4) {
      priceFirst.textContent = priceScienceCount;
    } else if (priceScienceCount.length === 4) {
      priceFirst.textContent = `${priceScienceCount.charAt(
        0
      )} ${priceScienceCount.substr(1)}`;
    } else if (priceScienceCount.length === 5) {
      priceFirst.textContent = `${priceScienceCount.substr(
        0,
        2
      )} ${priceScienceCount.substr(2)}`;
    } else if (priceScienceCount.length === 6) {
      priceFirst.textContent = `${priceScienceCount.substr(
        0,
        3
      )} ${priceScienceCount.substr(3)}`;
    }

    if (count.length < 4) {
      finalPrice.textContent = count;
    } else if (count.length === 4) {
      finalPrice.textContent = `${count.charAt(0)} ${count.substr(1)}`;
    } else if (count.length === 5) {
      finalPrice.textContent = `${count.substr(0, 2)} ${count.substr(2)}`;
    } else if (count.length === 6) {
      finalPrice.textContent = `${count.substr(0, 3)} ${count.substr(3)}`;
    }
  };

  //   подсчет в блоке футера
  const calculateActive = () => {
    const radioBtns = document.querySelectorAll(".radio-btn-calc");

    radioBtns.forEach((btn) => {
      btn.addEventListener("input", () => {
        calc();
      });
    });
  };

  //   открытие квиза
  const openQuiz = () => {
    const btns = document.querySelectorAll(".btn-link");
    const heroMain = document.getElementById("hero-main");
    const heroQuiz = document.getElementById("hero-quiz");
    const tabs = document.getElementById("tabs");
    const infoBlocks = document.querySelectorAll(".info-blocks");
    const sectionBtn = document.getElementById("section-btn");
    const questItem = document.querySelector(".quests-item");
    const quest = document.querySelector(".quests");
    const questSecondItem = document.querySelector(".quests-form-block");
    const nextQuestBtn = document.getElementById("next-quest-btn");
    const footerCalc = document.querySelector(".footer-calc");
    const footerOk = document.querySelector(".footer-ok");
    const heroBg = document.querySelector(".hero-bg");
    const heroHotLine = document.querySelector(".hero-hot-line");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        heroMain.style.display = "none";
        tabs.style.display = "none";
        sectionBtn.style.display = "none";
        questSecondItem.style.display = "none";
        footerOk.style.display = "none";
        heroHotLine.style.display = "none";

        infoBlocks.forEach((block) => {
          block.style.display = "none";
        });

        heroBg.classList.add("hero-bg-noHeight");

        heroQuiz.style.display = "block";
        quest.style.display = "block";
        questItem.style.display = "block";
        footerCalc.style.display = "flex";

        setTimeout(() => {
          polyfill();
          quest.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      });
    });

    nextQuestBtn.addEventListener("click", () => {
      questItem.style.display = "none";
      questSecondItem.style.display = "block";
      footerOk.style.display = "flex";
    });
  };

  //   смена активного таба и текста Десктоп
  const chengeTab = () => {
    const tabs = document.querySelectorAll(".tabs-item");
    const sections = document.querySelectorAll(".prophylaxis-block");
    const profLink = document.getElementById("prof-link");
    const conditionsLink = document.getElementById("conditions-link");
    const checkYouLink = document.getElementById("check-you-link");

    sections.forEach((item) => (item.style.display = "none"));
    sections[0].style.display = "block";

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        sections.forEach((item) => (item.style.display = "none"));
        sections[index + 1].style.display = "block";
      });
    });

    profLink.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach((item) => item.classList.remove("active"));
      tabs[0].classList.add("active");
      sections.forEach((item) => (item.style.display = "none"));
      sections[1].style.display = "block";
    });

    conditionsLink.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach((item) => item.classList.remove("active"));
      tabs[1].classList.add("active");
      sections.forEach((item) => (item.style.display = "none"));
      sections[2].style.display = "block";
    });

    checkYouLink.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach((item) => item.classList.remove("active"));
      tabs[2].classList.add("active");
      sections.forEach((item) => (item.style.display = "none"));
      sections[3].style.display = "block";
    });
  };

  //   смена активного таба и текста мобайл
  const chengeTabMobile = () => {
    const tabs = document.querySelectorAll(".mob-tab");
    const sections = document.querySelectorAll(".prophylaxis-block");
    const menu = document.getElementById("header-menu");
    const btn = document.getElementById("burger");

    sections.forEach((item) => (item.style.display = "none"));
    sections[0].style.display = "block";

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();

        menu.classList.toggle("active");
        burger.classList.toggle("active");
        menu.style.height = 0 + "px";

        tabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        sections.forEach((item) => (item.style.display = "none"));
        sections[index + 1].style.display = "block";
      });
    });
  };

  // валидация
  const validate = () => {
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const sex = document.getElementById("sex");
    const age = document.getElementById("age");
    const checks = document.getElementById("check-ok");
    const btnSend = document.getElementById("btnSend");

    btnSend.disabled = true;

    // const emailRegExp = /^\w+@\w+\.\w+$/g;
    const emailRegExp = /@/;
    // const nameRegExp = /[а-яА-ЯёЁ]/gi;
    const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;

    const chechInputs = () => {
      if (
        email.classList.contains("valid") &&
        name.classList.contains("valid") &&
        phone.classList.contains("valid") &&
        sex.classList.contains("valid") &&
        age.classList.contains("valid") &&
        checks.checked
      ) {
        btnSend.classList.add("active");
        btnSend.classList.remove("no-active");
        btnSend.disabled = false;
      } else {
        btnSend.classList.remove("active");
        btnSend.classList.add("no-active");
        btnSend.disabled = true;
      }
    };

    checks.addEventListener("change", function () {
      if (checks.checked) {
        checks.classList.remove("invalid");
        checks.classList.add("valid");
      } else {
        checks.classList.remove("valid");
        checks.classList.add("invalid");
      }
      chechInputs();
    });

    email.addEventListener("input", function () {
      if (email.value.search(emailRegExp) > 0) {
        email.classList.remove("invalid");
        email.classList.add("valid");
      } else {
        email.classList.remove("valid");
        email.classList.add("invalid");
      }
      chechInputs();
    });

    sex.addEventListener("input", function () {
      if (sex.value !== "") {
        sex.classList.remove("invalid");
        sex.classList.add("valid");
      } else {
        sex.classList.remove("valid");
        sex.classList.add("invalid");
      }
      chechInputs();
    });

    age.addEventListener("input", function () {
      if (age.value !== "") {
        age.classList.remove("invalid");
        age.classList.add("valid");
      } else {
        age.classList.remove("valid");
        age.classList.add("invalid");
      }
      chechInputs();
    });

    name.addEventListener("input", function () {
      if (name.value !== "") {
        name.classList.remove("invalid");
        name.classList.add("valid");
      } else {
        name.classList.remove("valid");
        name.classList.add("invalid");
      }
      chechInputs();
    });

    phone.addEventListener("input", function () {
      if (phone.value.search(phoneRegExp) === 0) {
        phone.classList.remove("invalid");
        phone.classList.add("valid");
      } else {
        phone.classList.remove("valid");
        phone.classList.add("invalid");
      }
      chechInputs();
    });

    // маска телефона
    const maskPhone = (elem) => {
      const input = elem;
      let keyCode;

      const mask = (event) => {
        event.keyCode && (keyCode = event.keyCode);
        let pos = input.selectionStart;

        if (pos < 3) {
          event.preventDefault();
        }
        let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = input.value.replace(/\D/g, ""),
          newValue = matrix.replace(/[_\d]/g, (a) => {
            if (i < val.length) {
              return val.charAt(i++) || def.charAt(i);
            } else {
              return a;
            }
          });
        i = newValue.indexOf("_");

        if (i != -1) {
          i < 5 && (i = 3);
          newValue = newValue.slice(0, i);
        }

        let reg = matrix
          .substr(0, input.value.length)
          .replace(/_+/g, (a) => {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(input.value) ||
          input.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        ) {
          input.value = newValue;
        }
        if (event.type == "blur" && input.value.length < 5) {
          input.value = "";
        }
      };

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    };

    maskPhone(phone);
  };

  //обратное открытие текстов
  const openNormBlocks = () => {
    const heroMain = document.getElementById("hero-main");
    const heroQuiz = document.getElementById("hero-quiz");
    const quests = document.getElementById("quests");
    const prophylaxis = document.getElementById("prophylaxis");
    const footerCalc = document.querySelector(".footer-calc");
    const tabs = document.getElementById("tabs");
    const footerOk = document.querySelector(".footer-ok");
    const sectionBtn = document.getElementById("section-btn");

    heroMain.style.display = "block";
    heroQuiz.style.display = "none";
    prophylaxis.style.display = "block";
    quests.style.display = "none";
    footerCalc.style.display = "none";
    sectionBtn.style.display = "block";
    footerOk.style.display = "none";

    if (document.documentElement.clientWidth > 768) {
      tabs.style.display = "block";
    }
  };

  // плавная прокрутка
  const smoothScroll = () => {
    const links = document.querySelectorAll(".smooth-link");
    const nameInput = document.getElementById("name");

    for (let link of links) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openNormBlocks();
        polyfill();
        let BlockID = link.getAttribute("href").substr(1);

        document.getElementById(BlockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          nameInput.focus();
        }, 600);
      });
    }
  };

  smoothScroll();
  resizeWin();
  burgerMenu();
  paralax();
  chengeColorSelect();
  activateSecondForm();
  calculateActive();
  openQuiz();
  chengeTab();
  chengeTabMobile();
  validate();
});
