function correcta(){

    let displayPokemonNegro = document.getElementById('idPokemonNegro').style.display;
    let displayPokemonColor = document.getElementById('idPokemonColor').style.display;
    let textoMensaje = document.getElementById('idMensaje').innerHTML;
    let displayMensaje = document.getElementById('idMensaje').style.display;
    let colorInicial = document.getElementById('idInicial').style.color;

    if(displayPokemonNegro == 'block'){
        displayPokemonNegro = 'none'
        displayPokemonColor = 'block'
        displayMensaje = 'block'
        colorInicial = 'yellow'
        textoMensaje = 'Felicitaciones, has seleccionado la opción correcta'
    }


    document.getElementById('idPokemonNegro').style.display = displayPokemonNegro
    document.getElementById('idPokemonColor').style.display = displayPokemonColor
    document.getElementById('idMensaje').innerHTML = textoMensaje
    document.getElementById('idMensaje').style.display = displayMensaje
    document.getElementById('idInicial').style.color = colorInicial
}

function incorrecta(){
    let displayPokemonNegro = document.getElementById('idPokemonNegro').style.display;
    let displayPokemonColor = document.getElementById('idPokemonColor').style.display;
    let textoMensaje = document.getElementById('idMensaje').innerHTML;
    let displayMensaje = document.getElementById('idMensaje').style.display;
    let colorInicial = document.getElementById('idInicial').style.color;

    if(displayPokemonNegro == 'block'){
        displayPokemonNegro = 'none'
        displayPokemonColor = 'block'
        displayMensaje = 'block'
        colorInicial = 'red'
        textoMensaje = 'Pokémon incorrecto, la respuesta es: excadrill'

    }

    document.getElementById('idPokemonNegro').style.display = displayPokemonNegro
    document.getElementById('idPokemonColor').style.display = displayPokemonColor
    document.getElementById('idMensaje').innerHTML = textoMensaje
    document.getElementById('idMensaje').style.display = displayMensaje
    document.getElementById('idInicial').style.color = colorInicial
}

function reiniciar(){
    let displayPokemonNegro = document.getElementById('idPokemonNegro').style.display;
    let displayPokemonColor = document.getElementById('idPokemonColor').style.display;
    let displayMensaje = document.getElementById('idMensaje').style.display;
    let colorInicial = document.getElementById('idInicial').style.color;

    if(displayPokemonNegro == 'none'){
        displayPokemonNegro = 'block'
        displayPokemonColor = 'none'
        displayMensaje = 'none'
        colorInicial = 'black'


    }

    document.getElementById('idPokemonNegro').style.display = displayPokemonNegro
    document.getElementById('idPokemonColor').style.display = displayPokemonColor
    document.getElementById('idMensaje').style.display = displayMensaje
    document.getElementById('idInicial').style.color = colorInicial

}