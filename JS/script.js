// recupero gli elementi dal DOM

const card = document.querySelector('.card')
const date = document.querySelector('.text-data')
const cardContainer = document.querySelector('.card-container')
// creo una funzione che generi delle card con un'immagine e del testo sotto
// dichiaro la funzione


//creo un ciclo for per generare nuove le card

const generatoreCard = () => {

    for (let i = 0; i < 6; i++) {
        axios.get('https://lanciweb.github.io/demo/api/pictures/').then(element => {
            dateGenerate = element.data[i].date;
            titleGenerate = element.data[i].title;
            imageGenerate = element.data[i].url;
            const card = `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div><img class="ping" src="./img/pin.svg" alt="ping"></div>
                     <div class="card">
                        <img src="${imageGenerate}" class="card-img-top my-padding" alt="...">
                        <div class="card-body">
                            <data class="card-title text-data">${dateGenerate}</data>
                            <p class="card-text">${titleGenerate}</p>
                        </div>
                    </div>
                </div>`;
            cardContainer.innerHTML += card;
        })
    }
}

generatoreCard()
