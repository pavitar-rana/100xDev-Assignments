/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function calculateTotalSpentByCategory(transactions) {
  let bag = [];

  for (let i = 0; i < transactions.length; i++) {
    let price = transactions[i].price;
    let category = transactions[i].category;

    let categoryObj = bag.find((obj) => obj.category === category);
    if (categoryObj) {
      categoryObj.totalSpent += price;
    } else {
      bag.push({ category: category, totalSpent: price });
    }
  }

  return bag;
}

// calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
