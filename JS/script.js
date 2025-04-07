// recupero gli elementi dal DOM

const card = document.querySelector('.card')
const date = document.querySelector('.text-data')
const cardContainer = document.querySelector('.card-container')
// creo una funzione che generi delle card con un'immagine e del testo sotto
// dichiaro la funzione


//creo un ciclo for per generare nuove le card

const generatoreCard = () => {

    axios.get('https://lanciweb.github.io/demo/api/pictures/').then(element => {
        dateGenerate = element.data[0].date;
        titleGenerate = element.data[0].title
        console.log(dateGenerate)
        const card = `<div class="row mt-5 mb-4 card-container">
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div><img class="ping" src="./img/pin.svg" alt="ping"></div>
                    <div class="card">
                        <img src="./img/nuvole-4k-4y7kl2qe79x3lcxi.webp" class="card-img-top my-padding" alt="...">
                        <div class="card-body">
                            <data class="card-title text-data">${dateGenerate}</data>
                            <p class="card-text">${titleGenerate}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        cardContainer.innerHTML = card;
    })
}
generatoreCard()