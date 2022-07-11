import { renderProductList } from "./products.js";
import { renderCart } from "./cart.js";

if (document.querySelector("#products")) {
  renderProductList();
  renderCart();
} else {
  renderCart();
}
