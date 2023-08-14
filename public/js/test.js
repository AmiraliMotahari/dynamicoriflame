import views from "./views";

const menuTarget = document.querySelector(".root")
const menuUrl = "http://localhost:3000/menu";

views.menuView(menuTarget, menuUrl);


let a= [1,2,3,4,5]
a.map()