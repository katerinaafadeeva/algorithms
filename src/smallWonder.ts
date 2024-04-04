// https://www.codewars.com/kata/56743fd3a12043ffbb000049


type RobotParams ={
    readonly knownWords: string[];
    learnWords(word:string):string;
}

class Robot implements RobotParams {
    knownWords: string[]=[];

    public learnWords(word:string):string{
        const modifiedWord = word.toLowerCase();

        if(typeof modifiedWord !== "string"){

            return `I don't understand the input`
        }
        if(this.knownWords.includes(modifiedWord)){

            return `${modifiedWord} is already learnt`
        } else {
            this.knownWords.push(modifiedWord);

            return `${modifiedWord} is stored in memory`
        }
    }
}

const Jessica = new Robot();
console.log(Jessica.learnWords("Hello"));
console.log(Jessica.learnWords("Hello"));
console.log(Jessica.learnWords("Hey"));