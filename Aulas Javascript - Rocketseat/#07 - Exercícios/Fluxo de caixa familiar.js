let family = {
  incomes: [2000, 3000, 250],
  expenses: [3000, 400, 100, 450],
};

function sum(array) {
  total = 0;
  for (let value of array) {
    total += value;
  }

  return total;
}
function calculateBalance() {
  const calcIncomes = sum(family.incomes);
  const calcExpenses = sum(family.expenses);

  const total = calcIncomes - calcExpenses;

  const balancePositive = total >= 0;
  let balanceText = " Negativo ";

  if (balancePositive) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${total} `);
}
    calculateBalance()