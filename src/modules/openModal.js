const openModal = () => {
  const openModalLink = document.getElementById("openModalLink");
  const modalWrap = document.getElementById("modalWrap");
  const modalClose = document.getElementById("modalClose");
  const body = document.querySelector("body");

  openModalLink.addEventListener("click", (event) => {
    event.preventDefault();
    modalWrap.style.display = "flex";
    body.classList.add("no-scroll");
  });

  modalClose.addEventListener("click", (event) => {
    event.preventDefault();
    modalWrap.style.display = "none";
    body.classList.remove("no-scroll");
  });

  modalWrap.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    if (!target.closest("#modalBlock")) {
      modalWrap.style.display = "none";
      body.classList.remove("no-scroll");
    }
  });
};

export default openModal;
