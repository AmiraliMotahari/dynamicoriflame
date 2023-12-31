import fetchData from "./fetch.js";

async function getAllData() {
  //locally with json-server
  // const newProducts = await fetchData("http://localhost:3000/newProducts");
  // const bestOffersProducts = await fetchData(
  //   "http://localhost:3000/bestOffersProducts"
  // );
  // const hairProducts = await fetchData("http://localhost:3000/hairProducts");



  //for github page
  const newProducts = await fetchData(
    "https://my-json-server.typicode.com/AmiraliMotahari/serveroriflame2/newProducts"
  );
  const bestOffersProducts = await fetchData(
    "https://my-json-server.typicode.com/AmiraliMotahari/serveroriflame2/bestOffersProducts"
  );
  const hairProducts = await fetchData(
    "https://my-json-server.typicode.com/AmiraliMotahari/serveroriflame2/hairProducts"
  );
  const allData = { newProducts, bestOffersProducts, hairProducts };

  return allData;
}

function seach(data, input) {
  return data.map((elem) => {
    let db_data = [...elem.title.toLowerCase()];
    let target_data = [...input.toLowerCase()];
    let compare = [];
   
    for (let i = 0; i < target_data.length; i++) {
      compare.push(db_data[i]);
    }
    let temp = compare.join("");
    if (input === temp) {
      return elem;
    }
  });
}

async function searchForData(input) {
  const allData = await getAllData();

  const allFoundData = [
    seach(allData.newProducts, input),
    seach(allData.bestOffersProducts, input),
    seach(allData.hairProducts, input),
  ];

  return allFoundData;
}


export default{
  searchForData
}