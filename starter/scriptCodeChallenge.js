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


// const calcAverageHumanAge = function (dogAgeArray) {
//   const humanAges = dogAgeArray.map((dog) => {
//     return dog <= 2 ? 2 * dog : 16 + dog * 4;
//   });

//   const olderThanEighteen = humanAges.filter((humanAge) => {
//     return humanAge >= 18
//   });
  
//   const aveHumanAge = olderThanEighteen.reduce((acc, humanAge) => {
//     return acc + humanAge;
//   }, 0) / olderThanEighteen.length;
    
//   console.log(humanAges);
//   console.log(olderThanEighteen);
//   console.log(aveHumanAge);
// };

const calcAverageHumanAge = (dogAgeArray) => {
  const humanAges = dogAgeArray.map((dog) => {
    return dog <= 2 ? 2 * dog : 16 + dog * 4;
  });

  const olderThanEighteen = dogAgeArray.map((dog) => {
    return dog <= 2 ? 2 * dog : 16 + dog * 4;
  }).filter((humanAge) => {
    return humanAge >= 18
  });

  const aveHumanAge = dogAgeArray.map((dog) => {
    return dog <= 2 ? 2 * dog : 16 + dog * 4;
  }).filter((humanAge) => {
    return humanAge >= 18
  }).reduce((acc, humanAge, i, array) => {
    return acc + humanAge / array.length;
  }, 0);

  console.log(humanAges);
  console.log(olderThanEighteen);
  console.log(aveHumanAge);
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);

console.log("------------------- Coding Challenge #4 ------------------------");

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  // { weight: 8, curFood: 133, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log("--------------- Taks 1 -----------------------");

const addRecommendedFood = function (dogArray) {
  dogArray.forEach( (dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  } );
  
  return dogArray
}

console.log(addRecommendedFood(dogs));

console.log("--------------- Taks 2 -----------------------");

const findSarahsDog = function (dogArray) {
 
  const { curFood, recommendedFood } = dogArray.find( ({owners}) => {
    return owners.includes("Sarah");
  });
  // const {curFood, recommendedFood} = sarahsDog
  return `Eating too ${curFood < recommendedFood ? "little" : "much"}!`;
  // return sarahsDog.curFood < sarahsDog.recommendedFood ? "Eating too little" : "Eating too much";
};

console.log(findSarahsDog(dogs));

console.log("--------------- Taks 3 & 4 -----------------------");

const dogOwners = function (dogsArray) {
 
  const ownersEatTooMuch = dogsArray.filter(({ curFood, recommendedFood }) => {
    return curFood > recommendedFood;
  }).flatMap(({owners}) => {
    return owners;
  });

  console.log(ownersEatTooMuch);
  console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
  
  const ownersEatTooLittle = dogsArray.filter(({ curFood, recommendedFood }) => {
    return curFood < recommendedFood;
  }).map(({ owners }) => {
    return owners;
  }).flat();
  
  console.log(ownersEatTooLittle);
  console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

  

};

dogOwners(dogs);

console.log("--------------- Taks 4 -----------------------");

console.log("--------------- Taks 5 -----------------------");

const eatingExactly = function (dogsArray) {
  return (
    dogsArray.some(({ curFood, recommendedFood }) => {
      return (curFood === recommendedFood)
    })
  )  
};

console.log(eatingExactly(dogs));

console.log("--------------- Taks 6 -----------------------");

const checkEatingOkayDestructure = ({ curFood, recommendedFood }) => {
  return curFood > (recommendedFood * 0.90) && curFood < (recommendedFood * 1.10)
};

const checkEatingOkay = (dog) => {
  return (
    dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)
  );
};

const anyDogEatingOkay = function (dogsArray) {
  return (
    dogsArray.some(checkEatingOkay)
  );
};

console.log(anyDogEatingOkay(dogs));

console.log("--------------- Taks 7 -----------------------");

const dogsEatingOkay = function (dogsArray) {
  return (
    dogsArray.filter(checkEatingOkayDestructure)
  );
};

console.log(dogsEatingOkay(dogs));

console.log("--------------- Taks 8 -----------------------");

const shallowCopyDogs = function (dogsArray) {
  return (
    [...dogsArray].sort( (a, b) => {
      return (a.recommendedFood - b.recommendedFood)
    } )
  );
  // return (
  //   dogsArray.slice().sort( (a, b) => {
  //     return a.recommendedFood - b.recommendedFood
  //   } )
  // );
}

console.log(shallowCopyDogs(dogs));
