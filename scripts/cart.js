export const renderCart = () => {
  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 550,
      url: "https://files.refurbed.com/pp/193_sil.jpg?t=resize&h=600&w=800",
    },
    {
      id: 2,
      name: "Bend R5 braun",
      price: 1779,
      url: "https://images.internetstores.de/products/1536377/02/0b108d/polygon-bend-r5-charcoal-brown-7.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
  if (localStorage.getItem("products")) {
    const productsArr = JSON.parse(localStorage.getItem("products"));
    console.log("arr", productsArr);
    const cartSection = document.querySelector("#cart");
    cartSection.style.backgroundColor = "#f2f3f4";
    const cartTitle = document.createElement("h1");
    cartTitle.textContent = "Cart";
    cartTitle.style.cssText = "padding: 1rem; font-size:1.5rem;";
    cartSection.append(cartTitle);

    productsArr.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.style.cssText =
        "padding: 1rem; display: flex; justify-content: space-between; background-color: white; width: 500px; margin-bottom: 1rem; border-radius: 1rem;";

      const productImage = document.createElement("img");
      productImage.src = product.url;
      productImage.style.cssText =
        "width: 200px; height: 200px; object-fit: cover;";

      const productCardWrapper = document.createElement("div");
      productCardWrapper.style.cssText =
        "padding: 1rem; width: 200px; height: 200px;";

      const productTitle = document.createElement("h3");
      productTitle.textContent = `Product: ${product.name}`;
      const productId = document.createElement("p");
      productId.textContent = `Id: ${product.id}`;

      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: ${product.price}`;

      productCardWrapper.append(productTitle, productId, productPrice);

      productCard.append(productImage, productCardWrapper);

      cartSection.append(productCard);
    });
  }
};

export const addToCard = () => {
  /*const addcard = document.getElementById("addCard");
  addcard.addEventListener("click", () => {
    console.log("test");
     const cart = document.getElementById("cart");
    window.localStorage.setItem("name", data[x].name);
    const li = document.createElement("li");
    li.textContent = data[x].name;
    card.appenChild(li); 
  });*/
};
