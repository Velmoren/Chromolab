const calc = () => {
  const price = document.getElementById("price-quiz");
  const priceFirst = document.getElementById("price-first");
  const priceSecond = document.getElementById("price-second");
  const finalPrice = document.getElementById("final-price");
  const activeDopForm = document.querySelectorAll(".active-dop-form");
  const radioBtns = document.querySelectorAll(".radio-btn-calc");
  const radioBtns2 = document.querySelectorAll(".radio-btn-calc2");

  let priceScience = 4500;
  let mens = 190;
  let location = 3000;

  // radioBtns.forEach((btn) => {
  //   if (btn.checked) {
  //     location = btn.value;
  //   }
  // });

  // radioBtns2.forEach((btn) => {
  //   if (btn.checked) {
  //     priceScience = btn.value;
  //   }
  // });

  radioBtns.forEach((btn) => {
    if (btn.checked) {
      location = btn.getAttribute("data-price");
    }
  });

  radioBtns2.forEach((btn) => {
    if (btn.checked) {
      priceScience = btn.getAttribute("data-price");
    }
  });

  let priceScienceCount = String(
    +priceScience + priceScience * activeDopForm.length
  );

  let count = String(
    +location +
      +priceScience +
      +priceScience * activeDopForm.length +
      +mens +
      +mens * activeDopForm.length
  );

  let countSecond = String(+mens + mens * activeDopForm.length);

  price.textContent = location.charAt(0) + " " + location.substr(1);

  if (countSecond.length < 4) {
    priceSecond.textContent = countSecond;
  } else if (countSecond.length === 4) {
    priceSecond.textContent = `${countSecond.charAt(0)} ${countSecond.substr(
      1
    )}`;
  } else if (countSecond.length === 5) {
    priceSecond.textContent = `${countSecond.substr(0, 2)} ${countSecond.substr(
      2
    )}`;
  } else if (countSecond.length === 6) {
    priceSecond.textContent = `${countSecond.substr(0, 3)} ${countSecond.substr(
      3
    )}`;
  }

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

export default calc;
