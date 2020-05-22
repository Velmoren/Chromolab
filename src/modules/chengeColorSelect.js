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

export default chengeColorSelect;
