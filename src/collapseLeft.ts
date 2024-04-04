// https://www.codewars.com/kata/65f1c009e44a0f0777c9fa06

// function operationArguments(arr: Array<number | Function>): Array<number>{
// const result: number[]=[]
// const containsFunction = arr.some(item=>typeof item === "function")
// let currentNum = 0 //   эт для функции если она -в начале массива

// if(!containsFunction){
//     return arr as number[];
// }

// for (let i=0; i<arr.length; i++){
//     let element = arr[i]

//     if(typeof element === "number"){
//         if( i === 0){ // если элемент-число и перед ним нет функции
//             result.push(element);
//             currentNum =element;
//         } else {
//             result.push(currentNum); // если элемент -число и перед ним -функция
//             currentNum=element;
//         }
//         // функцию к числу и обновляем текущее число
//     } else if(typeof element === "function"){  
//         currentNum =(element as Function)(currentNum)
//     }
// }
// return result;
// }


// const input = [3, (x: number) => x + 2, (x: number) => x * 5, 4, (x: number) => x - 1];
// // const input = [1, 5, 87, 45, 8, 8]
// console.log(operationArguments(input))


function operationArguments(arr: Array<number | Function>): Array<number> {
    if (arr.length === 0) return [];

    const result: number[] = [];
    let currentNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (typeof element === "function") {
            currentNum = (element as Function)(currentNum);
            currentNum = element;
            arr.splice(i, 1); // Удаление функции из массива
            i--; // Уменьшаем индекс, чтобы не пропустить следующий элемент после удаления
        } else if (typeof element === "number") {
          result.push(currentNum)
          currentNum = element;
        }
    }

    result.push(currentNum); // Добавляем последнее число после обработки
    return result;
}

const input = [3, (x: number) => x + 2, (x: number) => x * 5, 4, (x: number) => x - 1];
console.log(operationArguments(input));