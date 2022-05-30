import axios from 'axios';

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        const jokeAddedInHtml = document.getElementById("joke-text");
        jokeAddedInHtml.innerText = `${result.data.value}`
    } catch(error) {
        console.error(error)
    }
}

fetchJoke();