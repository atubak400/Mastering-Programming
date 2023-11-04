/*Online Store Inventory
58. You are tasked with managing the inventory of an online store. 
The inventory is represented as an object that contains multiple products, each of which is also represented as an object. 
Each product has a unique identifier as a property name.
The updateInventory function takes four arguments:
inventory - an object representing the online store's inventory.
id - a number representing a specific product in the inventory.
property - a string representing the name of the product's property to update.
value - a string containing the information used to update the product's property.
The function should modify the inventory object based on the following rules:
If value is an empty string, delete the given property from the product.
If property isn't "quantity" and value isn't an empty string, assign the value to that product's property.
If property is "quantity" and value isn't an empty string, update the product's quantity.
If the product doesn't have the specified property, it should be added with the corresponding value.
The function should always return the entire inventory object.
};
*/
// Example usage:
const storeInventory = {
  1001: { name: "Laptop", price: 999.99, quantity: 10 },
  1002: { name: "Headphones", price: 49.99 },
};

function updateInventory(inventory, id, property, value) {
    if (value === "") {
      // If value is an empty string, delete the property from the product.
      if (inventory[id] && inventory[id][property]) {
        delete inventory[id][property];
      }
    } else if (property !== "quantity") { // If property isn't "quantity" and value isn't an empty string, assign the value.
      if (!inventory[id]) { // if product doesnt exist
        inventory[id] = {}; // create the product
      }
      inventory[id][property] = value; // add value to product
    } else if (property === "quantity" && value !== "") {
      // If property is "quantity" and value isn't an empty string, update the quantity.
      if (!inventory[id]) {
        inventory[id] = {};
      }
      inventory[id][property] = parseInt(value); // Assuming quantity is numeric.
    }
  
    return inventory;
  }
  
  
  // Update the price of a product
  const updatedInventory1 = updateInventory(storeInventory, 1001, "price", "899.99");
  
  // Delete the quantity of a product
  const updatedInventory2 = updateInventory(updatedInventory1, 1002, "quantity", "");
  
  // Add a new product with a name and quantity
  const updatedInventory3 = updateInventory(updatedInventory2, 1003, "name", "Tablet");
  const updatedInventory4 = updateInventory(updatedInventory3, 1003, "quantity", "5");
  
  console.log(updatedInventory3);
  console.log(updatedInventory4);
  