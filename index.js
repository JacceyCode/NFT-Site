const navlink = document.querySelector(".navlinks");
const body = document.querySelector("body");
const section2CardContainer = document.querySelector(
  ".section-2-card-container"
);

const handleShowSidebar = () => {
  navlink.classList.add("navlinksShow");
  body.classList.add("bodyUnscroll");
};

const handleRemoveSidebar = () => {
  navlink.classList.remove("navlinksShow");
  body.classList.remove("bodyUnscroll");
};

const handleScrollRight = () => {
  section2CardContainer.scrollBy(500, 0);
};

const handleScrollLeft = () => {
  section2CardContainer.scrollBy(-500, 0);
};
