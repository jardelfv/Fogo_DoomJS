const firePixelArray = []
const larguraFogo = 2 // width
const alturaFogo = 3 // height


function start(){
    criarEstruturaDeDados()
    console.log(firePixelArray)
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

}
