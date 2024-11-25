// Returnează numărul de vocale dintr-un șir de caractere (string)

const text = "string de test"

function getNumberVocale(text) {
    let nr = 0;
    for (let char of text) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            nr++;
        }
    }
    return nr;
}

console.log(getNumberVocale(text))