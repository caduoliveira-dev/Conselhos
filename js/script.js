// https://api.adviceslip.com/advice

const conselho = document.querySelector('#conselho');
const botaoPesquisar = document.querySelector('#pesquisar');

const frase = document.querySelector('#corpo');

botaoPesquisar.addEventListener('click', (e) =>{
    e.preventDefault();
    getAdvice();
});


function getAdvice(){
    frase.classList.remove('hide');
    fetch('https://api.adviceslip.com/advice').then(resposta =>{
        return resposta.json();
    
    }).then(adviceData => {
        const adviceObjeto = adviceData.slip;
        conselho.innerHTML = `<p>${adviceObjeto.advice}</p>`;
    
    }).catch(error => {
        console.log(error);
    })

    
}