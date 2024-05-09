// let Num1Prompt = +prompt('birinchi sonni kiriting !')
// let AmalPrompt = prompt('Amalni kiriting !')
// let Num2Prompt = +prompt('Ikkinchi sonni kiriting !')

// function ReadNumber(Num1, Amal, Num2) {
//     if (Amal === '*') { 
//         return Num1 * Num2
//     }

//     if (Amal === '-') {
//         return Num1 - Num2
//     }

//     if (Amal === '+') {
//         return Num1 + Num2
//     }

//     if (Amal === '/') {
//         return Num1 / Num2
//     }
// }


// console.log(ReadNumber(Num1Prompt, AmalPrompt, Num2Prompt));














// let Num1 = +prompt('Birinchi sonni kiriting !')
// let Num2 = +prompt('Ikkinchi sonni kiriting !')

// function ReadNumber(son1, son2) {
//     return Math.max(son1, son2)
// }

// console.log(ReadNumber(Num1, Num2));























let arr = ['olma', 'nok', 'banan', 'olma', 'nok', 'tarvuz'];
console.log(arr);

let pr = prompt('Ayirish uchun Meva kiriting !');
console.log(`Ayirilgan Meva: ${pr}`);

let res = (fruitToDelete) => {
    let newArr = arr.filter(fruit => fruit !== fruitToDelete);
    return newArr;
};

console.log(res(pr));