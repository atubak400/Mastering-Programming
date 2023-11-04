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
  const antColony = [
    {name: "Fred", type: "worker"},
    {name: "Julia", type: "queen"},
    {name: "Titus", type: "zombie"},
    {name: "Adrian", type: "soldier"}
  ]
  
function checkIfHealthyColony(colony, hasAntidote) {
   let isHealthy = true;
   let hasZombie;
   
   if(hasAntidote) {
    console.log("there is an antidote")
    return isHealthy
   }
  
   for (let i=0; i<colony.length; i++) {
     if(colony[i].type === "zombie") {
      return hasZombie
     }
  } 
   
     if(!hasZombie) {
        console.log("there is no zombie")
      return isHealthy
    }

     if ((hasZombie) && (hasAntidote === false)){
      console.log("there is no antidote")
      return isHealthy = false
    }
  
  }
  
  const colonyHealth = checkIfHealthyColony(antColony, false)
  console.log(colonyHealth)
  



   /*First Code:

It iterates through the colony array using a for loop.
When it encounters an ant with the type "zombie" and there's no antidote (hasAntidote is false), 
it sets isHealthy to false and immediately returns. 
This means the colony is considered compromised as soon as it encounters a zombie without an antidote, 
and it doesn't check the rest of the colony.
It returns isHealthy to determine if the colony is healthy or not.
Second Code:

It iterates through the colony array using a for loop.
It uses a separate flag hasZombie to track the presence of a zombie. 
However, it doesn't correctly set or update this flag.
It checks for the presence of an antidote (hasAntidote) and returns isHealthy if an antidote is available, 
regardless of the colony's status.
If it encounters a zombie, it sets hasZombie to true, but it doesn't affect the return value.
It checks if hasAntidote is false, but there's a typo in the condition (hasAntidote = false should be hasAntidote === false). 
However, this part of the code will not correctly determine the colony's health because isHealthy is not being updated based on hasZombie.
The key difference is how they handle the colony's health status when encountering a zombie:

In the first code, encountering a zombie without an antidote immediately compromises the colony, and it returns false at that point.
In the second code, encountering a zombie doesn't immediately affect the colony's health status, 
and the logic to determine the colony's health is more complex and contains a typo.
The first code is a correct and more straightforward solution for the problem. 
The second code needs adjustments to correctly determine the colony's health based on the presence of zombies 
and the availability of an antidote.*/