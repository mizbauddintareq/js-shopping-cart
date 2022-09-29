document
  .getElementById("phone-plus-btn")
  .addEventListener("click", function () {
    const phoneQuantity = updateQuantity("phone-field", true);

    updatePrice("phone-price", phoneQuantity, 1219);
    calculateTotal();
  });
document
  .getElementById("phone-minus-btn")
  .addEventListener("click", function () {
    const phoneQuantity = updateQuantity("phone-field", false);

    updatePrice("phone-price", phoneQuantity, 1219);
    calculateTotal();
  });
