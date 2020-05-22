import calc from "./calc";
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
      const form = parent.querySelector(".form-new-answer");
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

export default activateSecondForm;
