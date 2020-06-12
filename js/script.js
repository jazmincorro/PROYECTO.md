 
window.onload=function(){
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
  .then(function (response) {
      return response.json();
  })
  .then(function (resultado) {
      console.log(resultado);
    //canciones
     var listaCanciones = document.querySelector("#Tracks");
    var contenidoCanciones = "";
    for (let i = 0; i < resultado.tracks.data.length; i++) {
      var canciones1 = resultado.tracks.data[i];
      contenidoCanciones += '<button type="button" class="list-group-item list-group-item-action">' 
      contenidoCanciones += '<a href="tracks.html?id=' +
      canciones1.id + '" class="text-light">' + 
      canciones1.title + '</a>' + '</button>'
    
    }

      document.querySelector("#imagen").innerHTML='<img src="'+ resultado.tracks.data[1].album.cover_xl+'" class="rounded img-fluid"alt="...">'

    listaCanciones.innerHTML= contenidoCanciones
    console.log(listaCanciones);


    //albums
     var listaAlbums = document.querySelector("#Album");
     var contenidoAlbums = "";
     for (let i = 0; i < resultado.albums.data.length; i++) {
       var album1 = resultado.albums.data[i];
       contenidoAlbums += '<button type="button" class="list-group-item list-group-item-action">'
       contenidoAlbums +='<a href="albums.html?id=' + 
       album1.id+ '" class="text-black">' + 
       album1.title + '</a>'+'</button>';
       
     } 
     document.querySelector("#imagenAlbums").innerHTML='<img src="'+ resultado.albums.data[1].cover_xl+'"  class="rounded img-fluid "alt="...">'


     listaAlbums.innerHTML= contenidoAlbums;
     console.log(listaAlbums);


     //artistas
     var listaArtistas= document.querySelector("#Artist");
     var contenidoArtistas = "";
     for (let i = 0; i < resultado.artists.data.length; i++) {
       var Artist1 = resultado.artists.data[i];
       contenidoArtistas += '<button type="button" class="list-group-item list-group-item-action">'
       contenidoArtistas += '<a href="artistas.html?id=' + 
       Artist1.id+ '" class= text-black">' +
       Artist1.name + '</a>'+'</button>';
     } 
     document.querySelector("#imagenArtista").innerHTML='<img src="'+ resultado.artists.data[1].picture_xl+'"  class="rounded img-fluid "alt="...">'

     listaArtistas.innerHTML= contenidoArtistas;
     console.log(listaArtistas);



  });
};




  
  
  
  
  
  
  
  
  





  






