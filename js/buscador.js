window.onload = function () {

    var queryString= location.search;
    var queryStringObj= new URLSearchParams(queryString);
    var busqueda= queryStringObj.get ('id');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q='+ busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    
        var listaCanciones = document.querySelector("#Tracks");
        var contenidoCanciones = "";
        for (let i = 0; i < data.data.length; i++) {
          var canciones1 = data.data[i];
          contenidoCanciones += '<button type="button" class="list-group-item list-group-item-action">' 
          contenidoCanciones += '<a href="tracks.html?id=' +
          canciones1.id + '" class="text-blackt">' + 
       
          canciones1.title + '</a>' + '</button>'
        }
        document.querySelector("#imagen").innerHTML='<img src="'+ data.data[0].album.cover_xl+'" class="rounded img-fluid"alt="...">'

        listaCanciones.innerHTML= contenidoCanciones
{/* 
        ContenidoTracks+=  
        `<form class="form-inline my-2 my-lg-0" action <a href="buscador.html?id=${element.title}" method="GET"></form> 
        <input class="form-control mr-sm-2" type="search" name="id" placeholder="SEARCH">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> </button>
              </form> `
         */}
    
});

    }