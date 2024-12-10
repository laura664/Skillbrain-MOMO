// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function myFavoriteRecipe(title, portionsNumber, ingredients) {
    const recipe = {
        titlu: title,
        portii: portionsNumber,
        ingrediente: [...ingredients],
    }
    return recipe;
}

const printRecipe = (receipe) => {
    console.log('Reteta mea ptrferata este: ${receipe.titlu}, prntru ${receipe.portii} portii, cu urmatoarele ingrediente: ${receipe.ingrediente}.');
}

const recipe = getReceipe("pulpe de pui cu cartof la cuptor", 2, ['pulpe de pui', 'sare', 'oregano', 'patrunjel', 'boia de ardei']);

printRecipe(recipe);