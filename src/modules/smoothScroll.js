import openNormBlocks from "./openNormBlocks";

// плавная прокрутка
const smoothScroll = () => {
  const links = document.querySelectorAll(".smooth-link");
  const nameInput = document.getElementById("name");

  for (let link of links) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openNormBlocks();

      let BlockID = link.getAttribute("href").substr(1);

      document.getElementById(BlockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        nameInput.focus();
      }, 600);
    });
  }
};

export default smoothScroll;
