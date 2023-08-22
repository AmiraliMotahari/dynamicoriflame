function pageDeactivator(target) {
  target.classList.remove("activator");
  target.classList.remove("fadeIn");
  target.classList.remove("fadeOut");
}
function pageActivator(target) {
  target.classList.toggle("fadeIn");
  target.classList.remove("fadeOut");
  pageDeactivator(document.querySelector("div.searchResult"));
  if (
    target.classList.contains("fadeIn") ||
    target.classList.contains("activator")
  ) {
    setTimeout(() => {
      target.classList.toggle("activator");
    }, 150);
  } else {
    target.classList.toggle("activator");
  }
}
function ac_de(target, arr) {
  arr.forEach((element) => {
    if (target !== element) {
      if (target.classList.contains("shoppingBagPage")) {
        document
          .querySelector("div.right>div.shoppingButton>a>span")
          .classList.remove("fa-solid");
        document
          .querySelector("div.right>div.shoppingButton>a>span")
          .classList.add("fa-light");
      }
      pageDeactivator(element);
    } else {
      if (target.classList.contains("shoppingBagPage")) {
        document
          .querySelector("div.right>div.shoppingButton>a>span")
          .classList.remove("fa-light");
        document
          .querySelector("div.right>div.shoppingButton>a>span")
          .classList.add("fa-solid");
      }
      pageActivator(target);
    }
  });
}

export default {
  pageActivator,
  pageDeactivator,
  ac_de,
};
