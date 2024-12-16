//Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
//Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
//Exemplu 1:
//Input: obiect = { a: 1, b: 2 }, proprietate = “b”
//Output: { a: 1 }


function getProperty(obiect, proprietate) {
    const obiect2 = { ...obiect };

    console.log(proprietate);

    return obiect2;

    let obiect = {
        a: 1,
        b: 2
    }

}

console.log(getProperty(obiect, "b"));
console.log(obiect);