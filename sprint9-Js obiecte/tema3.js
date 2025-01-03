//Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
//Exemplu 1:

//Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

//Output:

//“Carte 1 de Autor 1”
//”Ai citit deja “Carte 1” de Autor 1”
//”Carte 2 de Autor 2”
//”Trebuie sa citesti “Carte 2” de Autor 2”


let carti = [
    {
        titlu: "Hobbitul",
        autor: "J.R.R. Tolkien",
        este_citita: true,
    },
    {
        titlu: "O fata de moda veche",
        autor: "Louisa May Alcott",
        este_citita: false,
    }
];

// Parcurgem șirul de obiecte și afișăm mesajele
carti.forEach(carte => {
    console.log(`"${carte.titlu}" de ${carte.autor}`);
    if (carte.este_citita) {
        console.log(`Ai citit deja "${carte.titlu}" de ${carte.autor}`);
    } else {
        console.log(`Trebuie să citești "${carte.titlu}" de ${carte.autor}`);
    }
});
