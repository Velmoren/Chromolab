//   смена активного таба и текста Десктоп
const chengeTab = () => {
  const tabs = document.querySelectorAll(".tabs-item");
  const sections = document.querySelectorAll(".prophylaxis-block");

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
};

export default chengeTab;

// const profLink = document.getElementById("prof-link");
// const conditionsLink = document.getElementById("conditions-link");
// const checkYouLink = document.getElementById("check-you-link");

// profLink.addEventListener("click", (event) => {
//   event.preventDefault();

//   tabs.forEach((item) => item.classList.remove("active"));
//   tabs[0].classList.add("active");
//   sections.forEach((item) => (item.style.display = "none"));
//   sections[1].style.display = "block";
// });

// conditionsLink.addEventListener("click", (event) => {
//   event.preventDefault();

//   tabs.forEach((item) => item.classList.remove("active"));
//   tabs[1].classList.add("active");
//   sections.forEach((item) => (item.style.display = "none"));
//   sections[2].style.display = "block";
// });

// checkYouLink.addEventListener("click", (event) => {
//   event.preventDefault();

//   tabs.forEach((item) => item.classList.remove("active"));
//   tabs[2].classList.add("active");
//   sections.forEach((item) => (item.style.display = "none"));
//   sections[3].style.display = "block";
// });
