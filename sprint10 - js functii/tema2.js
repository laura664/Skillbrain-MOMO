//Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . 
//Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.

//Exemplu 1:

//Input: start = 3, end = 5

//Output: < un număr mai ≥ 3 și < 5>

function getRandom(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('Ambele valori trebuie să fie numere.');
    }
    if (start >= end) {
        throw new Error('Start trebuie să fie mai mic decât end.');
    }
    return Math.floor(Math.random() * (end - start) + start);
}

let start = 2;
let end = 12;

let numberRandom = getRandom(start, end);
console.log("Numarul aleatoriu intre" + start + "si" + end + "este:" + numberRandom);