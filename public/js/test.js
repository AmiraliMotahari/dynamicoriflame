divParent.addEventListener("mousedown", (e) => {
    let x = 0;
    let tempInterval = setInterval(() => {
      divParent.style.background = `
          radial-gradient(
              circle at ${e.offsetX}px ${e.offsetY}px,
              red ${x}%,
              whitesmoke ${x}%
      )`;
      x += 1;

      if (x > 100) {
        clearInterval(tempInterval);
      }
    }, 1);
  });
  divParent.addEventListener("mouseup", (e) => {
    let x = 100;
    let tempInterval = setInterval(() => {
      divParent.style.background = `
          radial-gradient(
              circle at ${e.offsetX}px ${e.offsetY}px,
              red ${x}%,
              whitesmoke ${x}%
      )`;
      x -= 1;

      if (x < 0) {
        clearInterval(tempInterval);
      }
    }, 1);
  });