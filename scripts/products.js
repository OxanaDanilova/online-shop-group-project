export const renderProductList = async () => {
  const response = await fetch("./data/productData.json");
  const data = await response.json();
  console.log(data);
  data.map((x) => {
    document.querySelector("#products").innerHTML += `
<div class="productCard">
    <img src=${x.url} class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="productName">${x.name}</h2>
      <h5 class="card-title">${x.price}€</h5>
      <button id= "addCard"><i class="fa-solid fa-cart-shopping"></i> Add to Card</button>
    </div>
</div>
  `;
  });
};
