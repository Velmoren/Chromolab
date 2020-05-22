const openModalContacts = () => {
  const openModalContactsLink = document.getElementById(
    "openModalContactsLink"
  );
  const modalWrapContacts = document.getElementById("modalWrapContacts");
  const modalCloseContacts = document.getElementById("modalCloseContacts");
  const body = document.querySelector("body");

  openModalContactsLink.addEventListener("click", (event) => {
    event.preventDefault();
    modalWrapContacts.style.display = "flex";
    body.classList.add("no-scroll");
  });

  modalCloseContacts.addEventListener("click", (event) => {
    event.preventDefault();
    modalWrapContacts.style.display = "none";
    body.classList.remove("no-scroll");
  });

  modalWrapContacts.addEventListener("click", (event) => {
    let target = event.target;

    if (!target.closest("#modalBlockContacts")) {
      console.log(target);
      modalWrapContacts.style.display = "none";
      body.classList.remove("no-scroll");
    }
  });
};

export default openModalContacts;
