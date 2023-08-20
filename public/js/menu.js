import views from "./views";

function menuButtonActivator() {
  console.log("hi");
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

  return 1;
}
function menuButtonDeactivator() {
  console.log("bye");
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
    document.querySelector("div.menuPage").classList.remove("fadeIn");
    document.querySelector("div.menuPage").classList.remove("activator");
    document.querySelector("div.menuPage").classList.remove("fadeOut");
  }, 150);

  return 0;
}


async function menuCreator(){
  const menu = document.querySelector("div.menuPage");

  menu.innerHTML = `
      <div id="menuTarget" class="menuContainer">
              <div class="smallMenuButtons">
                <div class="menuProductsButton">
                  <span class="fa-light fa-bars"></span>
                  <h3>products:</h3>
                </div>
                <div class="menuLogInButton">
                  <span class="fa-light fa-user"></span>
                  <h3>sign in/register</h3>
                </div>
              </div>
              <div class="menuLogInPage">
                <div class="menuLogInContainer">
                  <div class="wrapper">
                    <h2>Sing in</h2>
                    <form action="#" method="post">
                      <label for="menuUserEmail"
                        >Email address or registration number</label
                      >
                      <input
                        type="email"
                        id="menuUserEmail"
                        autocomplete="on"
                      />
                      <label for="menuUserPass">Password</label>
                      <input type="password" id="menuUserPass" />
                      <input
                        type="submit"
                        name="menuSubmitButton"
                        id="menuSubmitLogInButton"
                      />
                    </form>
                    <div class="forget">
                      <a href="#">forgot password?</a>
                    </div>
                    <div class="facebookButton">
                      <a href="#"
                        ><span class="fa-brands fa-facebook"></span
                        ><span>Continue with facebook</span></a
                      >
                    </div>
                    <div class="register">
                      <h2>Register</h2>
                      <a href="#">VIP Customer</a>
                      <a href="#">Brand Partner</a>
                      <a href="#">I don't know yet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;

  const t = document.getElementById("menuTarget");
  const u = "http://localhost:3000/menu";

  await views.menuView(t,u);

  t.innerHTML += `<div class="menuPageFooter">
                <a href="#">who we are</a>
                <a href="#">Product philosophy</a>
                <a href="#">Sustainability</a>
                <a href="#"
                  ><span
                    ><svg
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="MessageIcon"
                    >
                      <path
                        d="M12 5.292c-4.549 0-8.25 2.776-8.25 6.188 0 1.703.898 3.288 2.526 4.463.318.231.489.481.525.765.066.528-.348 1.035-.35 1.038a.515.515 0 0 0 .252.83c.042.012.482.131 1.083.131.792 0 1.862-.218 2.672-1.156.506.071 1.021.115 1.541.115 4.549 0 8.25-2.776 8.25-6.188s-3.701-6.187-8.25-6.187zm0 11.344c-.565 0-1.127-.047-1.67-.139l-.001.005a.513.513 0 0 0-.506.204c-.607.85-1.511 1.001-2.155.97.121-.303.206-.677.158-1.086-.069-.578-.387-1.077-.944-1.481l-.002-.001c-1.354-.976-2.1-2.264-2.1-3.628 0-2.843 3.239-5.156 7.219-5.156s7.219 2.313 7.219 5.156-3.239 5.156-7.219 5.156z"
                      ></path></svg></span
                  >support center</a
                >
              </div>`;
}



export default {
    menuButtonActivator,
    menuButtonDeactivator,
    menuCreator
}