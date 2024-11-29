//Scrieți o funcție care returnează pătratul unui număr
//Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
//Exemplu 1:
//Input: num = 6
//Output: 36
//Exemplu 2:
//Input: num = 0
//Output: 0
//Exemplu 3:
//Input: num = -12
//Output: 144

function findSquare(num) {
    return num * num;
}

let num1 = 2
let num2 = 7
let num3 = 10

console.log("Patratul" + num1 + "este:" + findSquare(num1));
console.log("Patratul" + num2 + "este:" + findSquare(num2));
console.log("Patratul" + num3 + "este:" + findSquare(num3));