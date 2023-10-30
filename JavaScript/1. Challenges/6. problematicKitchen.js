/*We like our kitchens to be organized, but we seem to be receiving lots of jumbled up kitchens in this function. 
This will never do! Although kitchen is always an object, it may have different properties on each test, 
but there are some problems that keep popping up. Here's an example
*/

const problematicKitchen = {
    hasFridge: true,
    favouriteAppliance: 'KeTtlE',
    food: 'eGgS',
    shelvesInCupboards: 3,
    shelvesNotInCupboards: 2,
    petName: 'RhuBarB',
    hoover: 'DysOn'
    };
    
/*To sort out our kitchen: Fix the jumbled string values - replace them all with versions that are all lowercase
Remove the hoover property - hoovers don't belong in the kitchen. We only need to know the total number of shelves. 
If shelvesInCupboards and/or shelvesNotInCupboards are present, delete these keys. Add a key of totalShelves which 
is equal to the sum of the values that were under shelvesInCupboards and shelvesNotInCupboards.
A fixed-up version of the above example kitchen should look like this, though remember that object properties are not ordered, 
so it doesn't matter if your properties appear to be in a different order.
*/
    
    const kitchenItems = {
    hasFridge: true,
    favouriteAppliance: 'kettle',
    food: "eggs",
    petName: 'rhubarb',
    totalShelves: 5
    };

    
    
// Solution

function sortTheKitchen(problematicKitchen) {
    // Clone the original object to avoid modifying it directly
    const kitchen = { ...problematicKitchen };
  
    // Copy and modify specific properties
    kitchen.favouriteAppliance = kitchen.favouriteAppliance.toLowerCase();
    kitchen.food = kitchen.food.toLowerCase();
    kitchen.petName = kitchen.petName.toLowerCase();
  
    // Calculate totalShelves and add it to the kitchen
    let totalShelves = 0;
  if (problematicKitchen.shelvesInCupboards) {
    totalShelves += problematicKitchen.shelvesInCupboards;
  }
  if (problematicKitchen.shelvesNotInCupboards) {
    totalShelves += problematicKitchen.shelvesNotInCupboards;
  }
  
    // Delete the properties you want to remove
    delete kitchen.shelvesInCupboards;
    delete kitchen.shelvesNotInCupboards;
    delete kitchen.hoover;
  
    return kitchen;
  }

const fixedKitchen = sortTheKitchen(problematicKitchen);
console.log(fixedKitchen);


// or


function sortTheKitchen(problematicKitchen) {
// Clone the original object to avoid modifying it directly
const kitchen = {};


    // Calculate totalShelves and add it to the kitchen
let totalShelves = 0;
if (problematicKitchen.shelvesInCupboards) {
  totalShelves += problematicKitchen.shelvesInCupboards;
}
if (problematicKitchen.shelvesNotInCupboards) {
  totalShelves += problematicKitchen.shelvesNotInCupboards;
}


// Delete the properties you want to remove
delete kitchen.shelvesInCupboards;
delete kitchen.shelvesNotInCupboards;
delete kitchen.hoover;
return kitchen;
}


const fixedKitchen2 = sortTheKitchen(problematicKitchen);
console.log(fixedKitchen);


// or

function sortTheKitchen(problematicKitchen) {
  const kitchen = {};
  const propertiesToCopy = ['hasFridge', 'favouriteAppliance', 'food', 'petName'];

  for (const key in problematicKitchen) {
    if (typeof problematicKitchen[key] === "string") {
      kitchen[key] = problematicKitchen[key].toLowerCase();
    } else {
      kitchen[key] = problematicKitchen[key];
    }
  }

      // Calculate totalShelves and add it to the kitchen
  let totalShelves = 0;
  if (problematicKitchen.shelvesInCupboards) {
    totalShelves += problematicKitchen.shelvesInCupboards;
  }
  if (problematicKitchen.shelvesNotInCupboards) {
    totalShelves += problematicKitchen.shelvesNotInCupboards;
  }

  kitchen.totalShelves = totalShelves;

  delete kitchen.shelvesInCupboards;
  delete kitchen.shelvesNotInCupboards;
  delete kitchen.hoover;

  return kitchen;
}


const fixedKitchen3 = sortTheKitchen(problematicKitchen);
console.log(fixedKitchen3);

