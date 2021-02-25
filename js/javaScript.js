// function getOption() {
//   selectElement1 = document.querySelector("#product_1");
//   selectElement2 = document.querySelector("#product_2");

//   output1 = selectElement1.options[selectElement1.selectedIndex].text;
//   output2 = selectElement2.options[selectElement2.selectedIndex].text;

//   //   document.querySelector(".test1").textContent = output1;
//   //   document.querySelector(".test2").textContent = output2;

//   window.open(`/test.html?product1=${output1}&product2=${output2}`);
// }

// const urlParams = new URLSearchParams(window.location.search);

// const product1 = urlParams.get("product1");
// const product2 = urlParams.get("product2");

// document.querySelector(".test1").textContent = product1;
// document.querySelector(".test2").textContent = product2;

// new code
const url = "https://secondsemesterkea-5ba9.restdb.io/rest/monitors";
const mediaurl = "https://secondsemesterkea-5ba9.restdb.io/media/";

const options = {
  headers: {
    "x-apikey": "603578c85ad3610fb5bb6597",
  },
};

// const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("id");

// const id = query;
// const url = "https://secondsemesterkea-5ba9.restdb.io/rest/monitors?q={"idNumber":1}";

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    showProduct(data);
  })

  .catch((e) => {
    console.error("Error", e.message);
  });

// function showProduct(products) {
//   products.forEach((product) => {
//     // console.log(product);
//     const template = document.querySelector("template").content;
//     const clone = template.cloneNode(true);

//     clone.querySelector("p").textContent = product.modelName;

//     const mainEl = document.querySelector("main");
//     mainEl.appendChild(clone);
//   });
// }

function showProduct(data) {
  var mainContainer = document.getElementById("myData");
  console.log(data);

  var div = document.createElement("img");
  div.src = mediaurl + data[68].modelImage;

  mainContainer.appendChild(div);

  // compare data

  var mainContainer = document.getElementById("compare_one");

  var div = document.createElement("img");
  div.src = mediaurl + data[3].modelImage;

  var divs = document.createElement("p");
  divs.innerHTML = data[3].modelName;

  mainContainer.appendChild(div);
  mainContainer.appendChild(divs);

  var mainContainer = document.getElementById("compare_two");

  var div = document.createElement("img");
  div.src = mediaurl + data[4].modelImage;

  var divs = document.createElement("p");
  divs.innerHTML = data[4].modelName;

  mainContainer.appendChild(div);
  mainContainer.appendChild(divs);
}

// search json and filter

// const search = document.getElementById("search");
// const matchList = document.getElementById("match-list");

// search.addEventListener("input", () => searhProduct(search.value));

// const searhProduct = async (searchText) => {
//   const res = await fetch(url, options);
//   const products = await res.json();

//   let matches = products.filter((monitors) => {
//     const regex = new RegExp(`^${searchText}`, "gi");
//     return monitors.modelName.match(regex) || monitors.abbr.match(regex);
//   });

//   console.log(matches);
// };
