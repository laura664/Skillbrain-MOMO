// Calculați suma numerelor dintr-un șir de numere

const array = [1, -5, 20, -34, 16, 29, 36, -4]
let output = 0;
for (let element of array) {
    output = output + element;
}

console.log(output);