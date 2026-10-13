function onClick() {
  let quantityField = document.getElementById("quantity");
  let productSelect = document.getElementById("product");
  let resultDiv = document.getElementById("result");
  let errorDiv = document.getElementById("error");

  let quantityValue = quantityField.value;

  // Проверка корректности ввода регулярным выражением
  let m = quantityValue.match(/^\d+$/);
  if (m === null) {
    errorDiv.innerHTML = "Ошибка: введите целое неотрицательное число!";
    resultDiv.innerHTML = "";
    return;
  }

  errorDiv.innerHTML = "";

  let quantity = parseInt(quantityValue);
  let price = parseInt(productSelect.value);
  let total = price * quantity;

  resultDiv.innerHTML = "Стоимость заказа: " + total + " руб.";
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("calc-button");
  b.addEventListener("click", onClick);
});
