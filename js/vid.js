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
