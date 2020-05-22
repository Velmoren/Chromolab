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

export default chengeTabMobile;
