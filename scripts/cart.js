export const renderCart = () => {
  if (localStorage.getItem("products")) {
    const productsArr = JSON.parse(localStorage.getItem("products"));
    const cartSection = document.querySelector("#cart");
    cartSection.innerHTML = "";
    cartSection.style.backgroundColor = "#f2f3f4";
    const cartTitle = document.createElement("h1");
    cartTitle.textContent = "Cart";
    cartTitle.style.cssText = "padding: 1rem; font-size:1.5rem;";
    cartSection.append(cartTitle);

    productsArr.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("userProduct");
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
      productTitle.classList.add("productName");
      productTitle.textContent = `Product: ${product.name}`;

      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: ${product.price}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove from cart";
      removeBtn.classList.add("remove");
      removeBtn.addEventListener("click", removeFromCart);
      // removeBtn.cssText = "border: 1px solid grey;";

      productCardWrapper.append(productTitle, productPrice, removeBtn);

      productCard.append(productImage, productCardWrapper);

      cartSection.append(productCard);
    });
  }
};

export const addToCard = (event) => {
  const cardElement = event.target.closest(".productCard");
  const productName = cardElement.querySelector(".productName").textContent;
  const productPrice = cardElement.querySelector(".card-title").textContent;
  const productImg = cardElement.querySelector("img").src;
  const obj = {
    name: productName,
    price: productPrice,
    url: productImg,
  };
  let arr = [];
  if (window.localStorage.getItem("products")) {
    arr = JSON.parse(localStorage.getItem("products"));
  }
  arr.push(obj);
  localStorage.setItem("products", JSON.stringify(arr));
  renderCart();
};

function removeFromCart(event) {
  const cardElement = event.target.closest(".userProduct");
  const productName = cardElement
    .querySelector(".productName")
    .textContent.substring(9);

  if (window.localStorage.getItem("products")) {
    const arr = JSON.parse(localStorage.getItem("products"));
    const productObj = arr.filter((el) => el.name === productName);
    const index = arr.indexOf(...productObj);
    arr.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(arr));
    renderCart();
  }
}
