window.onload = function () {
    var queryString= location.search;
    var queryStringObj= new this.URLSearchParams(queryString);
    var Busqueda= queryStringObj.get ('q');

    fetch('"https://cors-anywhere.herokuapp.com/https://api.deezer.com/track?q='+ Busqueda)


    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado.data);
    
    var ContenidoTracks= ""
    
    for (let i = 0; i < resultado.data.length; i++) {
        const element = resultado.data[i];
        console.log(element)
        var Cancion= element.title 
        var Duracion= element.duration
        var Albumfoto= element.album.cover
        var Albumtitle= element.album.title
        var Artista= element.artist.name
        

        ContenidoTracks+= 
        ContenidoTracks+= 
        ContenidoTracks+= ""
        
    }
    
});
     
     
   
}