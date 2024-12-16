const adviceIdElenent = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const adviceButton = document.getElementById('generic-advice');

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        document.getElementById('adviceText').textContent = data.slip.advice;
    } catch (error) {
        document.getElementById('adviceText').textContent = 'A apărut o eroare. Te rugăm să încerci din nou.';
    }
}


adviceButton.addEventListener('click', fetchAdvice);
fetchAdvice();