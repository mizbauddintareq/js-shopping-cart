document.getElementById("case-plus-btn").addEventListener("click", function () {
  const caseQuantity = updateQuantity("case-field", true);

  updatePrice("case-price", caseQuantity, 59);
  calculateTotal();
});
document
  .getElementById("case-minus-btn")
  .addEventListener("click", function () {
    const caseQuantity = updateQuantity("case-field", false);

    updatePrice("case-price", caseQuantity, 59);
    calculateTotal();
  });
