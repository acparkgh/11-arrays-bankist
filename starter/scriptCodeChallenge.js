"use strict";

const checkDogs = function (dogsJulia, dogsKate) {
  
  const dogsOnlyJulia = dogsJulia.slice(1, -2);
  // const allDogs = dogsOnlyJulia.concat(dogsKate);
  const allDogs = [...dogsOnlyJulia, ...dogsKate];
    // console.log(allDogs);

  const adultOrPuppy = function (dog, i) {
    const message = (
      dog >= 3 ?
        `Dog number ${i + 1} is an adult, and is ${dog} years old`
         :
        `Dog number ${i + 1} is still a puppy 🐶`
    )
    
    console.log(message);
  }

  allDogs.forEach(adultOrPuppy)

}

const juliasData = [3, 5, 2, 12, 7];
const katesData = [4, 1, 15, 8, 3];

// const juliasData = [9, 16, 6, 8, 3];
// const katesData = [10, 5, 6, 1, 4];

checkDogs(juliasData, katesData);

