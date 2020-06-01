const btn = document.querySelector('.btnSentenses');
const randomQuotes = document.querySelector('.randomQuotes');

const drawQuotes = () => {
    const index = Math.floor(Math.random() * arr.length);
    randomQuotes.textContent = arr[index];
}

btn.addEventListener('click', drawQuotes)