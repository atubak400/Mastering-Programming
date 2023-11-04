/*Declare a function called checkIfHealthyColony.
the function should take two parameters:
colony - represents an array of objects, each one of which represents an individual ant. 
Each ant object contains a name property and a type property.
If the ant is infected, the type property of the ant object will contain the value zombie
hasAntidote - represents a boolean which determines if we have an antidote to remove the infection!
Our function should return true if none of the ants are zombies, or hasAntidote is true.
Otherwise, the health of the colony is compromised and the function should return false.
*/

// first code
function checkIfHealthyColony(colony, hasAntidote) {
  let isHealthy = true;

  for (let i = 0; i < colony.length; i++) {
    if (colony[i].type === "zombie") {
      if (hasAntidote) {
        // If there is an antidote, the infected ant can be cured
        isHealthy = true;
      } else {
        // If there is an infected ant and no antidote, the colony is compromised
        isHealthy = false;
        break; // No need to check further, the colony is compromised
      }
    }
  }

  return isHealthy;
}


// second code
// second code
const antColony = [
  { name: "Fred", type: "worker" },
  { name: "Julia", type: "queen" },
  { name: "Titus", type: "zombie" },
  { name: "Adrian", type: "soldier" }
]

function checkIfHealthyColony(colony, hasAntidote) {
  let isHealthy = true;
  let hasZombie = false; // Initialize hasZombie to false

  if (hasAntidote) {
    console.log("There is an antidote");
    return isHealthy;
  }

  for (let i = 0; i < colony.length; i++) {
    if (colony[i].type === "zombie") {
      hasZombie = true; // Update hasZombie when a zombie is found
    }
  }

  if (!hasZombie) {
    console.log("There are no zombies");
    return isHealthy;
  }

  if (hasZombie && !hasAntidote) {
    console.log("There is no antidote");
    isHealthy = false;
  }

  return isHealthy;
}


const colonyHealth = checkIfHealthyColony(antColony, false)
console.log(colonyHealth)