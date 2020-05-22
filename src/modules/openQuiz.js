//   открытие квиза
const openQuiz = () => {
  const btns = document.querySelectorAll(".btn-link");
  const heroMain = document.getElementById("hero-main");
  const heroQuiz = document.getElementById("hero-quiz");
  const tabs = document.getElementById("tabs");
  const infoBlocks = document.querySelectorAll(".info-blocks");
  const sectionBtn = document.getElementById("section-btn");
  const questItem = document.querySelectorAll(".quests-item");
  const quest = document.querySelector(".quests");
  const questSecondItem = document.querySelector(".quests-form-block");
  const nextQuestBtn1 = document.getElementById("next-quest-btn1");
  const nextQuestBtn = document.getElementById("next-quest-btn");
  const footerCalc = document.querySelector(".footer-calc");
  const footerOk = document.querySelector(".footer-ok");
  const heroBg = document.querySelector(".hero-bg");
  const heroHotLine = document.querySelector(".hero-hot-line");

  questItem[1].style.display = "none";

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      heroMain.style.display = "none";
      tabs.style.display = "none";
      sectionBtn.style.display = "none";
      questSecondItem.style.display = "none";
      footerOk.style.display = "none";
      heroHotLine.style.display = "none";
      questItem[1].style.display = "none";

      infoBlocks.forEach((block) => {
        block.style.display = "none";
      });

      heroBg.classList.add("hero-bg-noHeight");

      heroQuiz.style.display = "block";
      quest.style.display = "block";
      questItem[0].style.display = "block";
      footerCalc.style.display = "flex";

      setTimeout(() => {
        quest.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    });
  });

  nextQuestBtn1.addEventListener("click", () => {
    questItem[0].style.display = "none";
    questItem[1].style.display = "block";
  });
  nextQuestBtn.addEventListener("click", () => {
    questItem[1].style.display = "none";
    questSecondItem.style.display = "block";
    footerOk.style.display = "flex";
  });
};

export default openQuiz;
