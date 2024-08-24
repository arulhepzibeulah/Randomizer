const quotes = [
    "Arrey bai, are you sad?",
    "Feeling low?",
    "Oda oda oda dhooram kuraiyala",
    "Beware of sweet people, You know why?",
    "If you are the smartest person in the room..!",
    "never think u r everything and don’t think u r nothing",
    "valkaila seruppadi pattu tha thiruthuvom nu irundha",
    "Understand that everything is moving and changing..!"
];

const jokes = [
    "Sometimes, the only way to deal with sadness is to let it flow like a river, knowing it will eventually lead to a brighter shore.",
    "Just remember: even the best roller coasters have ups and downs.",
    "Aaga motham onnum velangala",
    "They give nothing but cavities",
    "You are in the wrong room",
    "coz u r something and can do anything",
    "apo pattu tha thiruthuvom",
    "So you can’t stay the same even if you wish too..! 😊😊✌️"
];

let currentIndex = 0;

function refreshContent() {
    const displayElement = document.getElementById('display');
    if (currentIndex < quotes.length && currentIndex < jokes.length) {
        const currentQuote = quotes[currentIndex];
        const currentJoke = jokes[currentIndex];
        displayElement.innerHTML = `<p>${currentQuote}</p><p>${currentJoke}</p>`;
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first quote and joke
        refreshContent();
    }
}

// Initial content load
refreshContent();