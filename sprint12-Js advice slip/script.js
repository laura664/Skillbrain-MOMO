//const adviceIdElenent = document.getElementById('advice-id');
//const adviceTextElement = document.getElementById('advice-text');
//const adviceButton = document.getElementById('generic-advice');


const adviceIdElement = document.getElementById('id-advice');
const adviceTextElement = document.getElementById('advice-text');
const adviceButton = document.getElementById('generic-advice');

// Funcție pentru a obține sfatul de la API
async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip;

        // Actualizăm UI-ul cu sfatul obținut
        adviceIdElement.textContent = advice.id;
        adviceTextElement.textContent = `"${advice.advice}"`;
    } catch (error) {
        console.error('Eroare la preluarea sfatului:', error);
        adviceTextElement.textContent = "Nu s-a putut prelua sfatul. Încearcă din nou!";
    }
}

// Eveniment pentru buton
adviceButton.addEventListener('click', getAdvice);

// Obținem un sfat la inițializare
getAdvice();
