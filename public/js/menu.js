function menuButtonActivator() {
  document.getElementById("midLine").style.left = "100%";
  document.getElementById("midLine").style.opacity = "0";

  document.getElementById("topLine").style.rotate = "45deg";
  document.getElementById("topLine").style.top = "50%";
  document.getElementById("topLine").style.translate = "0,-50%";

  document.getElementById("botLine").style.rotate = "-45deg";
  document.getElementById("botLine").style.top = "50%";
  document.getElementById("botLine").style.translate = "0,-50%";

  document.querySelector("div.menuPage").classList.remove("fadeOut");
  document.querySelector("div.menuPage").classList.add("activator");
  document.querySelector("div.menuPage").classList.add("fadeIn");
  // setTimeout(() => {
  //   document.querySelector("div.menuPage>div.menuContainer").style.opacity =
  //     "1";
  // }, 100);

  return 1;
}
function menuButtonDeactivator() {
  document.getElementById("midLine").style.left = "";
  document.getElementById("midLine").style.opacity = "1";

  document.getElementById("topLine").style.rotate = "";
  document.getElementById("topLine").style.top = "";
  document.getElementById("topLine").style.translate = "";

  document.getElementById("botLine").style.rotate = "";
  document.getElementById("botLine").style.top = "";
  document.getElementById("botLine").style.translate = "";

  document.querySelector("div.menuPage").classList.remove("fadeIn");
  document.querySelector("div.menuPage").classList.add("fadeOut");
  setTimeout(() => {
    document.querySelector("div.menuPage").classList.remove("activator");
    document.querySelector("div.menuPage").classList.remove("fadeOut");
  }, 150);

  return 0;
}


function menuDynamic(windowSize) {
    menuButton.addEventListener("click", function () {
      if (windowSize > 992) {
        if (flag === 0) {
          flag = menu.menuButtonActivator();
          globalFunctions.ac_de(menuPage, pages);
        } else {
          flag = menu.menuButtonDeactivator();
        }
      } else if (windowSize < 992) {
        globalFunctions.ac_de(menuPage, pages);

        document.querySelector("div.menuPage").classList.add("activator"); //check this out!!!!!!!!
      }
    });
    window.addEventListener("resize", function () {
      windowSize = this.innerWidth;
    });
    //menu page --->page
    if (windowSize > 992) {
      activator.forEach((elem) => {
        elem.addEventListener("mouseenter", function () {
          deactivator();
          elem.childNodes[3].classList.add("activator");
        });
      });
    } else if (windowSize <= 992) {
      activator.forEach((elem) => {
        elem.addEventListener("click", function (e) {
          e.stopPropagation();
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
    menuPage.addEventListener("click", function (e) {
      e.stopPropagation();
      if (e.target === menuPage) {
        //e.target.classList.toggle("activator");
        flag = menu.menuButtonDeactivator();
        if (flag2 === 1) {
          toggleMenuPageDetails();
          menuLogInBtn.style.backgroundColor = "";
          miniMenuButton.style.backgroundColor = "";
          flag2 = 0;
        }
      }
    });
    if (windowSize <= 992) {
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
      miniMenuButton.addEventListener("click", function (e) {
        e.stopPropagation();
        if (flag2 === 0) {
          flag = menu.menuButtonDeactivator();
        } else {
          toggleMenuPageDetails();
          menuLogInBtn.style.backgroundColor = "";
          miniMenuButton.style.backgroundColor = "";
          flag2 = 0;
        }
      });
    }
}



export default {
    menuButtonActivator,
    menuButtonDeactivator
}