 
window.onload=function(){
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
  .then(function (response) {
      return response.json();
  })
  .then(function (resultado) {
      console.log(resultado);
    //canciones
    var listaCanciones = document.querySelector("#tracks");
    var contenidoCanciones = "";
    for (let i = 0; i < resultado.tracks.data.length; i++) {
      var canciones1 = resultado.tracks.data[i];
      contenidoCanciones += '<button type="button" class="list-group-item list-group-item-action text-black">'  + '<a href="tracks.html">' + canciones1.title + '</a>' + '</button>'
    
    }

      document.querySelector("#imagen").innerHTML='<img src="'+ resultado.tracks.data[1].album.cover+'" class="rounded img-fluid "alt="...">'

    listaCanciones.innerHTML= contenidoCanciones
    console.log(listaCanciones);


    //albums
    // var listaAlbums = document.querySelector("#albums");
    // var contenidoAlbums = "";
    // for (let i = 0; i < resultado.albums.data.length; i++) {
    //   var album1 = resultado.albums.data[i];
    //   contenidoAlbums += '<button type="button" class="list-group-item list-group-item-action text-black">'  + '<a href="albums.html">'  + album1.title+ '</a>' + '</button>'
    // } 
    // document.querySelector("#imagen").innerHTML='<img src="'+ resultado.album.data[1].album.cover+'" class="rounded img-fluid "alt="...">'

    // listaAlbums.innerHTML= contenidoAlbums
    // Console.log(ListaAlbums);


  });
};



  
  
  
  
  
  
  
  
  





  






