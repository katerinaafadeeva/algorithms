// https://www.codewars.com/kata/525c65e51bf619685c000059

interface Recipe {
    [key:string]: number
}

// function cake(recipe: Recipe, avaliable:Recipe){
// let maxPossibleCakeNumber=Infinity;

// for (let ingredient in recipe){
// if(recipe.hasOwnProperty(ingredient)){
//     if(!avaliable.hasOwnProperty(ingredient) || avaliable[ingredient] < recipe[ingredient]){
//         return 0;
//     }
//     const possibleCakesNumber= Math.floor(avaliable[ingredient] / recipe[ingredient]);
//     if(possibleCakesNumber<maxPossibleCakeNumber){
//         maxPossibleCakeNumber=possibleCakesNumber;
//     }
// }
// }

// return maxPossibleCakeNumber;
// }

function cakes(recipe: Recipe, available:Recipe){
return Object.keys(recipe).reduce((value, ingredient)=>{
    return Math.min(Math.floor(available[ingredient]/recipe[ingredient] || 0), value)
}, Infinity)
}


const recipe={
    flour: 500,
    sugar: 200,
    eggs:1
}

const avaliable={
    flour:1200,
    sugar: 1200,
    eggs: 5,
    milk: 200
}

console.log(cakes(recipe,avaliable))


/* 
1. Проверить что ключи объектов соответствуют (объект avaliable должен соержать те же ключи что и recipe), итерации по объекту
2. Написать функцию которая посчитает числа в ключах -> Math.floor
*/