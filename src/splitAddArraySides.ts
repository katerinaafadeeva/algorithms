// kata: https://www.codewars.com/kata/5946a0a64a2c5b596500019a

function splitAndAdd(arr: Array<number>, n:number){
    for (let i =0; i<n; i++){
    if(arr.length % 2 !==0){
        arr.unshift(0);
    }
       const mid=arr.length / 2;
       const firstHalf = arr.slice(0, mid);
       const secondHalf = arr.slice(mid); // slicing til the end
    
       arr=firstHalf.map((value,index)=>value + (secondHalf[index] || 0))
    }
    
    return arr;
    }
    
    
    console.log(splitAndAdd([1,2,3,4,5], 2))
    
    /* РЕКУРСИВНОЕ РЕШЕНИЕ:
    
    function splitAndAdd(arr, n) {
        if (n <= 0) return arr; //  база
      
        const ln = arr.length;
        if (ln % 2 === 1) arr.unshift(0);
      
        return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), n - 1);
      }
      */
    
    /* 
    n - количество итераций для разделения и прибавления массивов
    если в полученном массиве изначально 1 число , а число n > 1, то возвращать полученное число (ничего не делать с массивом)
    
    
    ЛОГИКА:
    - два массива должны итерироваться и складываться по  arr[i] и arr[k]
    - останавливать цикл если длина массива достигла n и продолжать разделение если нет
    
    [[1,2,3,4,5], 3];
    
      [1,2]
    [3,4,5]
    
    -->>>> [3,5,7]
    
      [3]
    [5,7]
    
    -->>>>> [5,10]
    
    [5]
    [10]
    
    ->>>> [15];
    */