// Create function to calulate tax based on income
// Create condition to assign tax % to income
// Result

function calculateTax(income) {
  let tax = 0

  if (income <= 15600) {
    tax = income * 0.105
  } else if (income <= 53500) {
    tax = income * 0.175
  } else if (income <= 78100) {
    tax = income * 0.30
  } else if (income <= 180000) {
    tax = income * 0.33
  } else {
    tax = income * 0.39
  }

  return tax
}

console.log(calculateTax(10000))