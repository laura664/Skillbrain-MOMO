//Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
//Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
//Exemplu 1:
//Input: obiect = { a: 1, b: 2 }, proprietate = “b”
//Output: { a: 1 }


console.log(getProperty(obiect, "b"));
console.log(obiect);

function getProperty(obiect, proprietate) {
    // Cream o copie a obiectului pentru a nu modifica obiectul original
    const obiect2 = { ...obiect };

    // Eliminam proprietatea specificata din copia obiectului
    delete obiect2[proprietate];

    // Returnam copia modificata
    return obiect2;
}

// Exemplu de utilizare
const obiect = {
    a: 1,
    b: 2
};

console.log(getProperty(obiect, "b"));
console.log(obiect); 
