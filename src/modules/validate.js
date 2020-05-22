// валидация
const validate = () => {
  const email = document.getElementById("email");
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const sex = document.getElementById("sex");
  const age = document.getElementById("age");
  const checks = document.getElementById("check-ok");
  const btnSend = document.getElementById("btnSend");
  const btnSend2 = document.getElementById("btnSend2");

  btnSend.disabled = true;
  btnSend2.disabled = true;

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
      btnSend2.classList.add("active");
      btnSend2.classList.remove("no-active");
      btnSend2.disabled = false;
    } else {
      btnSend.classList.remove("active");
      btnSend.classList.add("no-active");
      btnSend.disabled = true;
      btnSend2.classList.remove("active");
      btnSend2.classList.add("no-active");
      btnSend2.disabled = true;
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

export default validate;
