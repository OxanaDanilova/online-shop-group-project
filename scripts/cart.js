export const renderCart = () => {
  const cartSection = document.querySelector("#cart");
  cartSection.style.backgroundColor = "skyblu";
  document.createElement("h1");

  /*  products.forEach((product) => {
    const productCard = document.createElement('li');
    productCard.classList.add('product-card');
    const title

  }); */
};

export const addToCard = () => {
  const addcard = document.getElementById("addcard");
  addcard.addEventListener("click", () => {
    const cart = document.getElementById("cart");
    window.localStorage.setItem("name", data[x].name);
    const li = document.createElement("li");
    li.textContent = data[x].name;
    card.appenChild(li);
  });
};
