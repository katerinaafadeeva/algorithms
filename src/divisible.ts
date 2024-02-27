function countTheDivisible(x:number,y:number,k:number){
    let count=0

    for (let i=x; i<=y; i++){
    i%k===0 ? count ++ :count
    }

    return count
    }
    
    console.log(countTheDivisible(6,11,2))
    
    
    
 // kata: https://www.codewars.com/kata/55a5c82cd8e9baa49000004c