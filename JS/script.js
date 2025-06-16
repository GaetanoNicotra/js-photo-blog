// recupero gli elementi dal DOM
const card = document.querySelector('.card');
const cardContainer = document.querySelector('.card-container');
const overlayContainer = document.querySelector('.overlay')

// creo una funzione che generi delle card con un'immagine e del testo sotto
// dichiaro la funzione
const generatoreCard = () => {

    // effettuo una chiamata ajax all'API 
    axios.get('https://lanciweb.github.io/demo/api/pictures/').then(element => {

        //creo un ciclo for per generare ciascuna card
        for (let i = 0; i < 6; i++) {

            //recupero le propietà che mi servono per generare le cards
            let dateGenerate = element.data[i].date;
            let titleGenerate = element.data[i].title;
            let imageGenerate = element.data[i].url;
            //creo l'elemento del DOM
            const card = `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="ping"><img src="./img/pin.svg" alt="ping"></div>
                     <div class="card my-width">
                        <img src="${imageGenerate}" class="card-img-top my-padding overlay-trigger " alt="image card">
                        <div class="card-body">
                            <p class="card-title text-data my-data">${dateGenerate}</p>
                            <p class="card-text my-text">${titleGenerate.toUpperCase()}</p>
                        </div>
                    </div>
                </div>`;
            //inserisco l'elemento nel DOM
            cardContainer.innerHTML += card;

            // creo l'overlay per l'immagine
            const images = cardContainer.querySelectorAll('.overlay-trigger');
            images.forEach(img => {
                img.addEventListener('click', () => {
                    imageOverlay.setAttribute('src', img.src);
                    overlayContainer.classList.remove('d-none');
                    imageOverlay.classList.remove('d-none');
                    closeButton.classList.remove('d-none');
                });
            })
        }
    })
}

// richiamo la funzione
generatoreCard();

// creo l'evento di chiusura dell'overlay al click del bottone
const imageOverlay = document.getElementById('image-overlay');
const closeButton = document.getElementById('close');
closeButton.addEventListener('click', function () {
    imageOverlay.classList.add('d-none');
    overlayContainer.classList.add('d-none');
    closeButton.classList.add('d-none');
})


