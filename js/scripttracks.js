window.onload=function(){
    var querystring= location.search;
    var querystringObj= new URLSearchParams (querystring);
    var LoQueBuscoElUsuario= querystringObj.get('textoBuscado');
    // fijarse de ver si el fetch necesita modificarse
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556')
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);

        var listaAll=document.querySelector("#Album");
        var contenidoAlbumes= "";
     for  (let i = 0; i < resultado.album.length; i++) {
         var albumes= resultado.album.data[i];
         contenidoAlbumes+=  + '<a href="albums.html">' + album.title + '</a>'
         contenidoAlbumes+= + '<h1> ' + album.cover_xl+ '</h1>' //chequear linea falta
     }
     document.querySelector("#imagenAlbums").innerHTML='<img src="'+ resultado.album.cover_xl+'"  class="rounded img-fluid "alt="...">'
     listaAll.innerHTML= contenidoAlbumes
     console.log(listaAll);
         //   } '
    //  var listaAlbums = document.querySelector("#Album");
    //  var contenidoAlbums = "";
    //  for (let i = 0; i < resultado.albums.data.length; i++) {
    //    var album1 = resultado.albums.data[i];
    //    contenidoAlbums += '<button type="button" class="list-group-item list-group-item-action text-black">' + '<a href="albums.html">' + album1.title + '</a>'+'</button>'
    //  } 
     // document.querySelector("#imagenAlbums").innerHTML='<img src="'+ resultado.albums.data[1].cover_xl+'"  class="rounded img-fluid "alt="...">'

     //listaAlbums.innerHTML= contenidoAlbums
     //console.log(listaAlbums);
    
});
}
