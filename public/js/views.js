import fetchData from "./fetch";

function stars(count) {
  let html = "";
  count = Math.floor(count);
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      html += `<span class="fa-solid fa-star gold"></span>`;
    } else {
      html += `<span class="fa-solid fa-star"></span>`;
    }
  }
  return html;
}

async function productView(target, url) {
  const data = await fetchData(url);

  let html = data.map((elem) => {
    return `
            <div class="product">
                <a href="${elem.href}">
                  <div class="imageFrame">
                    <img
                      src="${elem.img.src}"
                      alt="${elem.img.alt}"
                    />
                    <span class="fa-light fa-shopping-bag"></span>
                  </div>
                  <div class="subFrame"></div>
                  <p>${elem.title}</p>
                  <p>${elem.paragraph}</p>
                  <div class="productDetails">
                    <div class="price">
                      <p class="newPrice">&pound;${elem.newPrice}</p>
                      <p class="oldPrice">&pound;${elem.oldPrice}</p>
                    </div>
                    <div class="ratings">
                      <div class="starBox">
                        ${stars(elem.rating)}
                      </div>
                      <div class="count">
                        <span>(${elem.rating})</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
        `;
  });

  target.innerHTML = html.join("");
}

async function swiperView(target, url) {
  const data = await fetchData(url);

  let html = data.map((elem) => {
    return `
            <div class="swiper-slide">
              <div class="slideWrapper">
                <a href="${elem.href}"
                  ><img src="${elem.img.src}" alt="${elem.img.alt}"
                /></a>
                <div class="contentWrapper">
                  <div class="swiperContent">
                    <h4>${elem.title}</h4>
                    <h3>${elem.paragraph}</h3>
                    <div class="positioner">
                      <a class="btnFill" href="${elem.button.href}">${elem.button.text}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
  });

  target.innerHTML = html.join("");
}

async function menuView(target, url) {
  const data = await fetchData(url);
  let flag = true;

  let html = data.map((elem) => {
    if (elem.kind === "linkOnly") {
      return `<div class="content">
                <a href="${elem.href}">${elem.name}</a>
                <div class="page"></div>
              </div>`;
    } else if (elem.kind === "catalogue") {
      return `
        <div class="content">
                <a href="${elem.href}">${elem.name}</a>
                <div class="page">
                  <div class="containerBox">
                    <a href="${elem.page.href}">${elem.page.name}</a>
                    <p>${elem.page.paragraph}</p>
                    <a href="${elem.page.img.href}">
                      <img
                        src="${elem.page.img.src}"
                        alt="${elem.page.img.alt}"
                      />
                      <div class="coverBack"></div>
                    </a>
                    <a href="${elem.page.button.href}"><span>${elem.page.button.name}</span></a>
                  </div>
                </div>
              </div>
      `;
    } else if (elem.kind === "inspiration") {
      return `
        <div class="content">
                <a href="${elem.href}">${elem.name}</a>
                <div class="page">
                  <a href="${elem.page.img.href}">
                    <img src="${elem.page.img.src}" alt="${elem.page.img.alt}" />
                    <span>${elem.page.img.text}</span>
                  </a>
                </div>
              </div>
      `;
    } else if (elem.kind === "main") {
      let flag = true;
      return `
        <div class="content">
                <a href="${elem.href}">${elem.name}</a>
                <div class="page">
                  <div class="wrapper">
                  ${elem.page.col
                    .map((col, index) => {
                      if (flag) {
                        flag = false;
                        return `
                        <div class="clumnOne">
                          <h2>
                            <span
                              ><svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ProductsIcon"
                              >
                                <path
                                  d="M19.245 4.225a1.435 1.435 0 0 0-1.078-.475h-5.156c-.419 0-.812.173-1.078.475-.267.302-.39.713-.337 1.128l1.415 11.32v2.03c0 .853.694 1.547 1.547 1.547h2.063c.853 0 1.547-.694 1.547-1.547v-2.03l1.415-11.32a1.437 1.437 0 0 0-.337-1.128zm-2.624 14.994h-2.062a.517.517 0 0 1-.516-.516v-1.547h3.094v1.547a.517.517 0 0 1-.516.516zm.576-3.094h-3.215L12.619 5.224a.386.386 0 0 1 .088-.316.39.39 0 0 1 .304-.127h5.156a.39.39 0 0 1 .304.127.395.395 0 0 1 .088.316l-1.363 10.901zM7.35 3.75c-1.867 0-2.565.736-2.639.82a1.35 1.35 0 0 0-.181 1.42l1.262 2.523v10.191c0 .853.694 1.547 1.547 1.547s1.547-.694 1.547-1.547V8.513l1.262-2.523a1.36 1.36 0 0 0-.173-1.418c-.072-.085-.754-.822-2.624-.822zm-.011 15.469a.517.517 0 0 1-.516-.516V8.906h1.031v9.797a.517.517 0 0 1-.516.516zm1.887-13.69L8.052 7.875H6.627L5.454 5.529c-.033-.066-.014-.224.025-.268.005-.005.489-.479 1.872-.479 1.365 0 1.839.459 1.84.459.049.058.069.22.035.288z"></path></svg></span
                            >${elem.page.title}
                          </h2>
                          ${col.group
                            .map((gr) => {
                              return `
                              <div class="group">
                                <a href="${gr.href}">${gr.name}</a>
                                <div class="innerGroup">
                                  ${gr.innerGroup
                                    .map((inner) => {
                                      return `
                                      <a href="${inner.href}">${inner.name}</a>
                                    `;
                                    })
                                    .join("")}
                                </div>
                              </div>
                            `;
                            })
                            .join("")}
                        </div>
                      `;
                      } else {
                        return `
                        <div class="clumnTwo">
                          ${col.group
                            .map((gr) => {
                              return `
                              <div class="group">
                                <a href="${gr.href}">${gr.name}</a>
                                <div class="innerGroup">
                                  ${gr.innerGroup
                                    .map((inner) => {
                                      return `
                                      <a href="${inner.href}">${inner.name}</a>
                                    `;
                                    })
                                    .join("")}
                                </div>
                              </div>
                            `;
                            })
                            .join("")}
                        </div>
                      `;
                      }
                    })
                    .join("")}
                  </div>  
                </div>
              </a>
        </div>
      `;
    } else {
      console.log("the provided db data was not desinged! check the kind!");
      return;
    }
  });
  target.innerHTML += html.join("");
}

async function searchView(data, target) {
  let flag = 0;
  let html = data.map((elem) => {
    return elem
      .map((element) => {
        if (element != null || element != undefined) {
          return `<div class="content">
                  <h4 class="title">${element.title}</h4>
                  <div class="cover">
                    <img src="${element.img.src}" alt="${element.img.alt}" />
                    <a class="btnFill" href="${element.href}">go!</a>
                  </div>
            </div>`;
        }
      })
      .join("");
  });
  function checkNotfound(elem) {
    return elem === null || elem === undefined || elem === "";
  }
  flag = html.every(checkNotfound);

  if (!flag) {
    target.innerHTML = html.join("");
  }else{
     target.innerHTML = `<div class="content double">
      <h5>Nothin found!</h5>
     </div>`;
  }
}

export default {
  productView,
  swiperView,
  menuView,
  searchView,
};
