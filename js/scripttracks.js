window.onload=function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);

    var Listadetalles= document.querySelector ('');
    var ContenidoTracks="";

    for(let i=0)