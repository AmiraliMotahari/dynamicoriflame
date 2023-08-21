//debugger

import fetchData from "./fetch";
import globalFunctions from "./globalFunctions";
import menu from "./menu";
import search from "./search";
import views from "./views";

//dynamics

//whats new section dynamic!
const whatsNew = document.querySelector("div.newProductsContainer");
const whatsNewUrl = "http://localhost:3000/newProducts";

await views.productView(whatsNew, whatsNewUrl);

//best offers section dynamic!
const bestOffers = document.querySelector("div.productOffersContainer");
const bestOffersUrl = "http://localhost:3000/bestOffersProducts";

await views.productView(bestOffers, bestOffersUrl);

//hair and nail section dynamic!
const hairAndNail = document.querySelector(
  "section.hairNail div.productsContainer"
);
const hairAndNailUrl = "http://localhost:3000/hairProducts";

await views.productView(hairAndNail, hairAndNailUrl);

//swiper
const swiperTarget = document.getElementById("swiperTarget");
const swiperlUrl = "http://localhost:3000/swiper";

await views.swiperView(swiperTarget, swiperlUrl);

//menu
await menu.menuCreator();

let flag = 0;
let flag2 = 0;
let menuButton = document.querySelector("div.menuButton");
let miniMenuButton = document.querySelector("div.menuProductsButton");
let shoppingBag = document.querySelector("div.right>div.shoppingButton");
let shoppingbPage = document.querySelector("div.shoppingBagPage");
let activator = document.querySelectorAll("div.menuContainer>div.content");
let menuPage = document.querySelector("section.mainContainer>nav>div.menuPage");
let groupPage = document.querySelectorAll("div.group");
let ourStoryButton = document.getElementById("ourStory");
let ourStoryPage = document.querySelector("div.ourStoryPage");
let joinUsButton = document.getElementById("joinUs");
let joinUsPage = document.querySelector("div.joinUsPage");
let supBtn = document.querySelector("section.supportBtn");
let supportPage = document.querySelector("div.supportPage");
let closeBtn = document.getElementById("supportCloseBtn");
let minimizeBtn = document.getElementById("supportMinimizeBtn");
let logInButton = document.getElementById("logIn");
let logInPage = document.querySelector("div.logInPage");
let userEmailAuth = document.getElementById("userEmail");
let userPassAuth = document.getElementById("userPass");
let searchIconRight = document.getElementById("searchIconRight");
let searchBoxRightWrapper = document.querySelector("div.searchBoxRightWrapper");
let menuLogInBtn = document.querySelector("div.menuLogInButton");
let menuLogInPage = document.querySelector("div.menuLogInPage");
let menuPageFooter = document.querySelector("div.menuPageFooter");
let tabsContainer = document.querySelector("div.tabsContainer");
let showNextTab = document.querySelector(
  "section.menuTabsContainer>span.showNextTab"
);
let showPervTab = document.querySelector(
  "section.menuTabsContainer>span.showPrevTab"
);
let root = document.querySelector(":root");
let playVid = document.querySelector("button[id=playVid]");
let vid1 = document.querySelector("video[id=vid1]");
let siteLinkBtn = document.querySelectorAll(
  "section.siteLinks>div.container>div.col>h3"
);
let scrollable = tabsContainer.scrollWidth - tabsContainer.clientWidth;
const searchInput = document.querySelector("input#search");
const searchResult = document.querySelector("div.searchResult");
const searchResultTarget = document.querySelector(
  "div.searchResult>div.container"
);
const miniSearchInput = document.querySelector("input#miniSearch");
const miniSearchResult = document.querySelector("div.miniSearchResult");
const miniSearchResultTarget = document.querySelector(
  "div.miniSearchResult>div.container"
);
const pages = [
  ourStoryPage,
  joinUsPage,
  searchBoxRightWrapper,
  logInPage,
  shoppingbPage,
];

//scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    root.style.setProperty("--menuHeight", "60px");
  } else {
    root.style.setProperty("--menuHeight", "");
  }
});

function shoppingLogoDeactivator() {
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.remove("fa-solid");
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.add("fa-light");
}
function deactivator() {
  activator.forEach((elem) => {
    elem.childNodes[3].classList.remove("activator");
  });
}
function deactivator2(elemMain) {
  activator.forEach((elem) => {
    if (elem !== elemMain) {
      elem.childNodes[3].classList.remove("activator");
      elem.style.setProperty("--X", "0deg");
    }
  });
}
function deactivator3(elemMain2) {
  groupPage.forEach((elem) => {
    if (elem !== elemMain2 && elem.childNodes[3] !== undefined) {
      elem.childNodes[3].classList.remove("flexActivator");
      elem.style.setProperty("--Y", "0deg");
    }
  });
}
function toggleMenuPageDetails() {
  menuLogInPage.classList.toggle("activator");
  activator.forEach((elem) => {
    elem.classList.toggle("deactivator");
  });
  menuPageFooter.classList.toggle("flexDeactivator");
}

// let windowSize = window.innerWidth;
function calcWindowMode() {
  return window.innerWidth > 992 ? "big" : "small";
}

let windowMode = calcWindowMode();

function dynamicMenu(wMode) {
  // menu button
  menuButton.addEventListener("click", () => {
    if (wMode === "big") {
      if (flag === 0) {
        flag = menu.menuButtonActivator();
        globalFunctions.ac_de(menuPage, pages);
      } else {
        flag = menu.menuButtonDeactivator();
      }
    } else {
      flag = menu.menuButtonActivator();
      globalFunctions.ac_de(menuPage, pages);
    }
  });

  //menu page --->page
  if (wMode === "big") {
    activator.forEach((elem) => {
      elem.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        deactivator();
        elem.childNodes[3].classList.add("activator");
      });
    });
  } else if (wMode === "small") {
    activator.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        deactivator2(elem);
        elem.childNodes[3].classList.toggle("activator");
        if (elem.childNodes[3].classList.contains("activator")) {
          elem.style.setProperty("--X", "180deg");
        } else {
          elem.style.setProperty("--X", "0deg");
        }
      });
    });
  }
  menuPage.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target === menuPage) {
      //e.target.classList.toggle("activator");
      flag2 = menu.menuButtonDeactivator();
      if (flag2 === 1) {
        toggleMenuPageDetails();
        menuLogInBtn.style.backgroundColor = "";
        miniMenuButton.style.backgroundColor = "";
        flag2 = 0;
      }
    }
  });
  if (wMode === "small") {
    groupPage.forEach((elem) => {
      elem.addEventListener("click", function (e) {
        e.stopPropagation();
        deactivator3(elem);
        if (elem.childNodes[3] !== undefined) {
          elem.childNodes[3].classList.toggle("flexActivator");
          if (elem.childNodes[3].classList.contains("flexActivator")) {
            elem.style.setProperty("--Y", "180deg");
          } else {
            elem.style.setProperty("--Y", "0deg");
          }
        }
      });
    });

    //mini manu page
    miniMenuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (flag2 === 0) {
        flag2 = menu.menuButtonDeactivator();
      } else {
        toggleMenuPageDetails();
        menuLogInBtn.style.backgroundColor = "";
        miniMenuButton.style.backgroundColor = "";
        flag2 = 0;
      }
    });
  }

  //mini menu login page
  menuLogInBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (flag2 === 0) {
      toggleMenuPageDetails();
      menuLogInBtn.style.backgroundColor = "white";
      miniMenuButton.style.backgroundColor = "#f5f5f5";
      flag2 = 1;
    } else {
      flag2 = menu.menuButtonDeactivator();
      toggleMenuPageDetails();
      menuLogInBtn.style.backgroundColor = "";
      miniMenuButton.style.backgroundColor = "";
      // flag2 = 0;
    }
  });
}

//menu button
dynamicMenu(windowMode);
const temp = menuPage.innerHTML;
window.addEventListener("resize", () => {
  if (windowMode === "small" && window.innerWidth > 992) {
    flag = menu.menuButtonDeactivator();
    flag2 = 0;
    windowMode = calcWindowMode();
    window.location.reload();
  } else if (windowMode === "big" && window.innerWidth <= 992) {
    flag = menu.menuButtonDeactivator();
    flag2 = 0;
    windowMode = calcWindowMode();
    window.location.reload();
  }

  //menu tabs
  scrollable = tabsContainer.scrollWidth - tabsContainer.clientWidth;
  if (scrollable === 0) {
    showPervTab.classList.remove("activator");
    showNextTab.classList.remove("activator");
    showPervTab.classList.add("deactivator");
    showNextTab.classList.add("deactivator");
  }
});

//log in button
document
  .querySelector("div.left>div.logIn")
  .addEventListener("mouseenter", function () {
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.remove("fa-light");
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.add("fa-solid");
  });
document
  .querySelector("div.left>div.logIn")
  .addEventListener("mouseleave", function () {
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.remove("fa-solid");
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.add("fa-light");
  });

//search box
document
  .querySelector("div.searchBox>input")
  .addEventListener("focus", function () {
    document.querySelector("div.searchBox>span").style.visibility = "visible";
    document.querySelector("div.searchBox").style.boxShadow =
      "0 2px 3px rgba(0,0,0,0.16)";
  });
document
  .querySelector("div.searchBox>span")
  .addEventListener("click", function () {
    document.querySelector("div.searchBox>span").style.visibility = "hidden";
    document.querySelector("div.searchBox").style.boxShadow = "";
  });
document.addEventListener("click", function (e) {
  const outCheck = document.querySelector("div.searchBox");

  if (!outCheck.contains(e.target)) {
    document.querySelector("div.searchBox>span").style.visibility = "hidden";
    document.querySelector("div.searchBox").style.boxShadow = "";
  }
});
//mini search button
searchIconRight.addEventListener("click", function () {
  globalFunctions.ac_de(searchBoxRightWrapper, pages);
  flag = menu.menuButtonDeactivator();
  // shoppingBagPageDeactivator();
});
searchBoxRightWrapper.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === searchBoxRightWrapper) {
    e.target.classList.toggle("activator");
  }
});

//shopping bag
shoppingBag.addEventListener("mouseenter", function () {
  flag = menu.menuButtonDeactivator();
  globalFunctions.ac_de(shoppingbPage, pages);
});
shoppingBag.addEventListener("click", function () {
  flag = menu.menuButtonDeactivator();
  globalFunctions.ac_de(shoppingbPage, pages);
});

shoppingBag.addEventListener("mouseleave", shoppingLogoDeactivator);
document
  .querySelector("div.shoppingBagPage>div.shoppingContainer")
  .addEventListener("mouseleave", function () {
    setTimeout(() => {
      shoppingbPage.classList.remove("activator");
    }, 150);
    shoppingbPage.classList.remove("fadeIn");
    shoppingbPage.classList.add("fadeOut");
  });

//ourstory page
ourStoryButton.addEventListener("click", function (e) {
  e.stopPropagation();
  globalFunctions.ac_de(ourStoryPage, pages);
  flag = menu.menuButtonDeactivator();
});
ourStoryPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === ourStoryPage) {
    e.target.classList.toggle("activator");
  }
});
// document.querySelector("div.ourStoryPage>div.ourStoryContainer").addEventListener("mouseleave",function(){
//     ourStoryPageDeactivator();
// });

//join us page
joinUsButton.addEventListener("click", function () {
  // joinUsPage.classList.toggle("activator");
  globalFunctions.ac_de(joinUsPage, pages);
  flag = menu.menuButtonDeactivator();
});
joinUsPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === joinUsPage) {
    e.target.classList.toggle("activator");
  }
});

//login
logInButton.addEventListener("click", function () {
  globalFunctions.ac_de(logInPage, pages);
  flag = menu.menuButtonDeactivator();
});
logInPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === logInPage) {
    e.target.classList.toggle("activator");
  }
});

userEmailAuth.addEventListener("input", function () {
  document.querySelector("label[for=userEmail]").style.color = "#68BB93";
  this.style.borderBottomColor = "#68BB93";

  userPassAuth.style.borderBottomColor = "";
  document.querySelector("label[for=userPass]").style.color = "";
});
userPassAuth.addEventListener("input", function () {
  document.querySelector("label[for=userPass]").style.color = "#68BB93";
  this.style.borderBottomColor = "#68BB93";

  document.querySelector("label[for=userEmail]").style.color = "";
  userEmailAuth.style.borderBottomColor = "";
});

//support button
supBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  supportPage.classList.add("supportPageActivator");
});
minimizeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  supportPage.classList.remove("supportPageActivator");
  supBtn.style.backgroundColor = "white";
  supBtn.style.border = "2px solid #CCCCCC";
  document.querySelector("section.supportBtn>p").style.color = "black";
  document.querySelector("section.supportBtn>span>svg").style.fill = "black";
});
closeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  supportPage.classList.remove("supportPageActivator");
  supBtn.style.backgroundColor = "";
  supBtn.style.border = "unset";
  document.querySelector("section.supportBtn>p").style.color = "";
  document.querySelector("section.supportBtn>span>svg").style.fill = "";
});

//delivery btn
document.getElementById("deliveryClose").addEventListener("click", function () {
  document.querySelector("section.swiprContainer>div.delivery").style.display =
    "none";
});

//menu tabs
if (scrollable === 0) {
  showPervTab.classList.remove("activator");
  showNextTab.classList.remove("activator");
  showPervTab.classList.add("deactivator");
  showNextTab.classList.add("deactivator");
}
showNextTab.addEventListener("click", (e) => {
  e.stopPropagation();
  if (window.innerWidth >= 768) {
    tabsContainer.scrollLeft = scrollable;
  } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
    tabsContainer.scrollLeft += scrollable / 2;
  } else if (window.innerWidth > 0 && window.innerWidth < 576) {
    tabsContainer.scrollLeft += scrollable / 3;
  }
});
showPervTab.addEventListener("click", (e) => {
  e.stopPropagation();
  if (window.innerWidth >= 768) {
    tabsContainer.scrollLeft = 0;
  } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
    tabsContainer.scrollLeft -= scrollable / 2;
  } else if (window.innerWidth > 0 && window.innerWidth < 576) {
    tabsContainer.scrollLeft -= scrollable / 3;
  }
});
tabsContainer.addEventListener("scroll", (e) => {
  e.stopPropagation();
  if (tabsContainer.scrollLeft > 0) {
    showPervTab.classList.remove("deactivator");
    showPervTab.classList.add("activator");
  } else if (tabsContainer.scrollLeft === 0) {
    showPervTab.classList.remove("activator");
    showPervTab.classList.add("deactivator");
  }
  if (tabsContainer.scrollLeft === scrollable) {
    showNextTab.classList.remove("activator");
    showNextTab.classList.add("deactivator");
  } else if (tabsContainer.scrollLeft < scrollable) {
    showNextTab.classList.add("activator");
    showNextTab.classList.remove("deactivator");
  }
});

//video play button
vid1.addEventListener("click", function () {
  if (vid1.paused) {
    // vid1.setAttribute("controls", "controls");
    vid1.play();
    playVid.classList.add("deactivator");
  } else {
    vid1.pause();
    playVid.classList.remove("deactivator");
  }
});
playVid.addEventListener("click", function () {
  if (vid1.paused) {
    // vid1.setAttribute("controls", "controls");
    vid1.play();
    playVid.classList.add("deactivator");
  } else {
    vid1.pause();
    playVid.classList.remove("deactivator");
  }
});

//site links
siteLinkBtn.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    elem.nextElementSibling.classList.toggle("flexActivator");
    siteLinkDeactivator(elem);
  });
});
function siteLinkDeactivator(e) {
  siteLinkBtn.forEach((elem) => {
    if (elem !== e) {
      elem.nextElementSibling.classList.remove("flexActivator");
    }
  });
}

//search
searchInput.addEventListener("keyup", async (e) => {
  e.stopPropagation();
  searchResult.classList.add("activator");
  searchResult.classList.add("fadeIn");

  globalFunctions.ac_de(menuPage, pages);
  flag = menu.menuButtonDeactivator();

  const nn1 = await search.searchForData(e.target.value);
  await views.searchView(nn1, searchResultTarget);

  if (searchInput.value === null || searchInput.value === "") {
    searchResult.classList.remove("activator");
    searchResult.classList.remove("fadeIn");
  }
});
searchInput.addEventListener("blur", (e) => {
  e.stopPropagation();
  searchResult.classList.remove("fadeIn");
  searchResult.classList.add("fadeOut");
  setTimeout(() => {
    searchResult.classList.remove("fadeOut");
    searchResult.classList.remove("activator");
  }, 150);
});
searchInput.addEventListener("focus", (e) => {
  e.stopPropagation();
  globalFunctions.ac_de(menuPage, pages);
  flag = menu.menuButtonDeactivator();
  if (searchInput.value !== null || searchInput.value !== "") {
    searchResult.classList.add("activator");
    searchResult.classList.add("fadeIn");
  } else if (searchInput.value === null || searchInput.value === "") {
    searchResult.classList.remove("activator");
    searchResult.classList.remove("fadeIn");
  }
});

//mini search
miniSearchInput.addEventListener("keyup", async (e) => {
  e.stopPropagation();
  miniSearchResult.classList.add("activator");
  miniSearchResult.classList.add("fadeIn");

  const nn2 = await search.searchForData(e.target.value);
  await views.searchView(nn2, miniSearchResultTarget);

  if (miniSearchInput.value === null || miniSearchInput.value === "") {
    miniSearchResult.classList.remove("activator");
    miniSearchResult.classList.remove("fadeIn");
  }
});
miniSearchInput.addEventListener("blur", (e) => {
  e.stopPropagation();
  miniSearchResult.classList.remove("fadeIn");
  miniSearchResult.classList.add("fadeOut");
  setTimeout(() => {
    miniSearchResult.classList.remove("fadeOut");
    miniSearchResult.classList.remove("activator");
    globalFunctions.pageDeactivator(searchBoxRightWrapper);
  }, 150);
});
miniSearchInput.addEventListener("focus", (e) => {
  e.stopPropagation();

  if (miniSearchInput.value !== null || miniSearchInput.value !== "") {
    miniSearchResult.classList.add("activator");
    miniSearchResult.classList.add("fadeIn");
  } else if (miniSearchInput.value === null || miniSearchInput.value === "") {
    miniSearchResult.classList.remove("activator");
    miniSearchResult.classList.remove("fadeIn");
  }
});

//button effects
const btnFills = [...document.querySelectorAll(".btnFill")];

btnFills.forEach((elem) => {
  elem.addEventListener("mousedown", (e) => {
    let x = 0;
    let tempInterval = setInterval(() => {
      elem.style.background = `
          radial-gradient(
              circle at ${e.offsetX}px ${e.offsetY}px,
              rgb(186,186,186) ${x}%,
              #3333330A ${x}%
      )`;
      x += 1;

      if (x > 100) {
        clearInterval(tempInterval);
        setTimeout(() => {
          elem.style.background = "";
        }, 100);
      }
    }, 4);
  });
});
