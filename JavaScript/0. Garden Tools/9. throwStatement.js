// 1. 
try {
    throw "An error occurred!";
  } catch (error) {
    console.log("Caught an error: " + error);
  }

// 2. 
  try {
    var result = divide(10, 0);
    console.log("Result: " + result);
  } catch (error) {
    console.error("An error occurred: " + error);
  }

  function divide(a, b) {
    if (b === 0) {
      throw "Division by zero is not allowed.";
    }
    return a / b;
  }
