import fetchData from "./fetch";

function stars(count) {
    let html = "";
    count = Math.floor(count);
    for (let i = 0; i < 5; i++) {
        if (i < count) {
            html += `<span class="fa-solid fa-star gold"></span>`;
        }
        else{
            html += `<span class="fa-solid fa-star"></span>`;
        }
    }
    return html;
}

async function productView(target,url) {
    const data = await fetchData(url);

    let html = data.map((elem)=>{
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
    console.log(elem.id);
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
                      <a href="${elem.button.href}">${elem.button.text}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
  });

  target.innerHTML = html.join(""); 
}

export default {
  productView,
  swiperView
};