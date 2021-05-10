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


const calcAverageHumanAge = function (dogAgeArray) {
  const humanAges = dogAgeArray.map((dog) => {
    return dog <= 2 ? 2 * dog : 16 + dog * 4;
  });

  const olderThanEighteen = humanAges.filter((humanAge) => {
    return humanAge >= 18
  });
  
  const aveHumanAge = olderThanEighteen.reduce((acc, humanAge) => {
    return acc + humanAge;
  }, 0) / olderThanEighteen.length;
    
  console.log(humanAges);
  console.log(olderThanEighteen);
  console.log(aveHumanAge);
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);