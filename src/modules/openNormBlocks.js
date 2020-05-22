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

export default openNormBlocks;
