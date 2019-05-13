const firePixelArray = []
const larguraFogo = 10 // width
const alturaFogo = 3 // height


function start(){
    criarEstruturaDeDados()
    renderizarFogo()
}

function criarEstruturaDeDados(){
    const numeroDePixels = larguraFogo * alturaFogo

    for(let i = 0; i < numeroDePixels; i++){
        firePixelArray[i] = 0
    }
}

function calcularPropagacaoDoFogo(){

}

function renderizarFogo(){
    let html = '<table cellpadding=0 cellspacing=0>'
    

    for(let row = 0; row < alturaFogo; row++){
        html += '<tr>'

        for(let column = 0; column < larguraFogo; column++){
            const pixelIndex = column + (larguraFogo * row)
            html += '<td>'
            html += pixelIndex
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#fireCanvas').innerHTML = html
}
