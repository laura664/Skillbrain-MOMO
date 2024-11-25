//Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
//Scrieți o funcție care:
//Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
//Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
//Exemplu 1:
//Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
//Output:
//“Carte 1 de Autor 1”
//”Ai citit deja “Carte 1” de Autor 1”
//”Carte 2 de Autor 2”
//”Trebuie sa citesti “Carte 2” de Autor 2”

const carti = [
    {
        titlu: "Hobbitul",
        autor: "J.R.R. Tolkien",
        esteCitita: true,
    },
    {
        titlu: "Padurea spanzuratilor",
        autor: "Liviu Rebreanu",
        esteCitita: false,
    }

]

function printCarti(carti) {
    for (let carte of carti) {
        if (carte.esteCitita) {
            console.log('Ai citit deja "${catre.titlu}" de "${carte.auto}".');
        }
        else {
            console.log('Trebuie sa citesti "${catre.titlu}" de "${carte.auto}".');
        }
    }
}

console.log(carti);
printCarti(carti);