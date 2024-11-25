//Returneaza un boolean daca numarul este divizibil cu 10
function isNumberTen(number) {
    if (number % 10 === 0) {
        return true;
    }
    return false;
}

//isNumberTen (100)
console.log("Is 23 divided by 10?")(isNumberTen(23));