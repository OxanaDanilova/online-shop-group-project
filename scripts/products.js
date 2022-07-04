export const renderProductList = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/fbw-d05/spa-26-modules-shopping-oxaluahol/main/data/productData.json?token=GHSAT0AAAAAABPWBDLCDED4WOMY3MTF6XT4YWC3ZXA"
  );
  const data = await response.json();
  console.log(data);
  data.map((x) => {
    document.querySelector("#products").innerHTML += `
  <div class="productCard" ">
  <img src=${x.url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${x.price}</h5>
    <h2 class="productName">Product: ${x.name}</h2>
    <button id= "addCard">Add to Card</button>
    </div>
</div>
  `;
  });
};
