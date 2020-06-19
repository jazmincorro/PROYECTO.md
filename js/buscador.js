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
        `<form class="form-inline my-2 my-lg-0" action <a href="buscador.html?id=${element.title}" method="GET"></form> 
        <input class="form-control mr-sm-2" type="search" name="q" placeholder="SEARCH">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> `
        
    
});
       
}