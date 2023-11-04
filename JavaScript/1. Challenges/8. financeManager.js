``` 
You are developing a JavaScript program for a personal finance manager. 
You have data for various financial transactions, where each transaction object contains the following information:
Transaction description (a string).
Transaction amount (a number, in dollars).
a. Create an array of transaction objects to represent a user's financial history. 
Include at least five transactions, including both income and expenses
(this means that some of the amount will be positive numbers, and others will be negative. 
    For instance if you create 5 objects, three of them can be positive numbers(i.e income) 
    while two of them can be negative(i.e expenses)).
b. Implement a function called calculateBalance that calculates and returns the user's 
current account balance. The balance is the result of summing income transactions and 
subtracting expenses. Use a for loop to perform the calculations.

c. Now, use the calculated account balance to determine the financial status of the user. 
If the balance is positive (indicating a surplus), create a positive message like 'Congratulations! 
You have a surplus of [balance] dollars.' If the balance is zero, display a neutral message like 
'Your account balance is [balance] dollars.' If the balance is negative (indicating a deficit), 
create a warning message like 'Warning! Your account balance is [balance] dollars. 
Consider budgeting wisely.' An if/else statement or switch/case statement might be helpful here.
```

// Define transaction objects for the personal finance manager
const transaction1 = {
    description: "Salary",
    amount: 2500
  };
  
  const transaction2 = {
    description: "Rent",
    amount: -1000
  };
  
  const transaction3 = {
    description: "Groceries",
    amount: -200
  };
  
  const transaction4 = {
    description: "Utility Bill",
    amount: -150
  };
  
  const transaction5 = {
    description: "Dinner Out",
    amount: -50
  };
  
  // Create an array of transaction objects
  const financialTransactions = [transaction1, transaction2, transaction3, transaction4, transaction5];
  
  // Implement a function to calculate the balance
  function calculateBalance(transactions) {
    let balance = 0;
    for (let i = 0; i < transactions.length; i++) {
      balance += transactions[i].amount;
    }
    return balance;
  }
  
  // Calculate the balance
  const currentBalance = calculateBalance(financialTransactions);
  
  // Determine the financial status and display a message
  if (currentBalance > 0) {
    console.log(`Congratulations! You have a surplus of $${currentBalance.toFixed(2)} dollars.`);
  } else if (currentBalance === 0) {
    console.log(`Your account balance is $${currentBalance.toFixed(2)} dollars.`);
  } else {
    console.log(`Warning! Your account balance is $${currentBalance.toFixed(2)} dollars. Consider budgeting wisely.`);
  }
  