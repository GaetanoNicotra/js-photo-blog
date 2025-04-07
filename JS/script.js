// recupero gli elementi dal DOM
const card = document.querySelector('.card');
const cardContainer = document.querySelector('.card-container');


// creo una funzione che generi delle card con un'immagine e del testo sotto
// dichiaro la funzione
const generatoreCard = () => {

    //creo un ciclo for per generare ciascuna card
    for (let i = 0; i < 6; i++) {
        // effettuo una chiamata ajax all'API 
        axios.get('https://lanciweb.github.io/demo/api/pictures/').then(element => {
            //recupero le propietà che mi servono per generare le cards
            dateGenerate = element.data[i].date;
            titleGenerate = element.data[i].title;
            imageGenerate = element.data[i].url;
            //creo l'elemento del DOM
            const card = `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="ping"><img src="./img/pin.svg" alt="ping"></div>
                     <div class="card my-width ">
                        <img src="${imageGenerate}" class="card-img-top my-padding " alt="image card">
                        <div class="card-body">
                            <p class="card-title text-data my-data">${dateGenerate}</p>
                            <p class="card-text my-text">${titleGenerate.toUpperCase()}</p>
                        </div>
                    </div>
                </div>`;
            //inserisco l'elemento nel DOM
            cardContainer.innerHTML += card;
        })
    }
}
// richiamo la funzione
generatoreCard();
