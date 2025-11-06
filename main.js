function calculateTax(income) {
  let tax = 0

  if (income <= 15600) {
    tax = income * 0.105;
  } else if (income <= 53500) {
    tax = income * 0.175;
  } else if (income <= 78100) {
    tax = income * 0.30;
  } else if (income <= 180000) {
    tax = income * 0.33;
  } else {
    tax = income * 0.39
  }

  return tax;
}

document.getElementById('calculate').addEventListener('click', () => {
  const incomeInput = document.getElementById('income').value;
  const income = parseFloat(incomeInput);

  const tax = calculateTax(income);
  document.getElementById('result').textContent = `$${tax.toFixed(2)}`;
})