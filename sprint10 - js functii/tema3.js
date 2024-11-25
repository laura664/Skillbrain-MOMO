//Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

//Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

//Exemplu 1:

//Input: sir = “Îmi place programarea” litera = “a”

//Output: 4

//Exemplu 2:

//Input: sir = “Vreau să lucrez în IT”, litera = “r”

//Output: 2  

function letterCount(sir, litera) {
    // Transformăm atât șirul cât și litera într-un format uniform 
    litera = litera.toLowerCase();

    let count = 0;

    // Parcurgem șirul și numărăm aparițiile literei
    for (let i = 0; i < sir.length; i++) {
        if (sir[i] === litera) {
            count++;
        }
    }

    return count;
}


console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r")); 