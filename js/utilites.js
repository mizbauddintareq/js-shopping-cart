function updateQuantity(productId, isIncrease) {
  const getProductQuantity = document.getElementById(productId);
  const productQuantity = parseInt(getProductQuantity.value);

  let newProductQuantity;

  if (isIncrease === true) {
    newProductQuantity = productQuantity + 1;
  } else {
    newProductQuantity = productQuantity - 1;
  }
  //   if (newProductQuantity <= 0) {
  //     alert("No way");
  //     return;
  //   }

  getProductQuantity.value = newProductQuantity;

  return newProductQuantity;
}

function updatePrice(productId, quantity, price) {
  const previousProductPrice = document.getElementById(productId);
  const newProductPrice = quantity * price;
  previousProductPrice.innerText = newProductPrice;
  return newProductPrice;
}

function getTextElement(id, value) {
  const textElement = document.getElementById(id);
  textElement.innerText = value;
}

function calculateTotal() {
  const getPhonePrice = document.getElementById("phone-price");
  const phonePrice = parseInt(getPhonePrice.innerText);
  const getCasePrice = document.getElementById("case-price");
  const casePrice = parseInt(getCasePrice.innerText);

  const subTotal = phonePrice + casePrice;
  getTextElement("sub-total", subTotal);

  const tax = (subTotal * 0.1).toFixed(2);
  const taxValue = parseFloat(tax);
  getTextElement("tax", taxValue);

  const total = subTotal + taxValue;
  getTextElement("total", total);
}
