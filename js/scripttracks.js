
window.onload=function(){
    var queryString =document.location.search.substring (0);
    var queryStringObj = new URLSearchParams (queryString);

    var idTracks= queryStringObj.get("id");
    console.log(idTracks);
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idTracks)
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);
  

         var listaDetalles= document.querySelector ('.mb-3');
         var contenidoTrdetalles= "";
        
          contenidoTrdetalles+= `<img src="${resultado.cover_xl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${resultado.title}</h5>
            <p class="card-text">${resultado.release_date}</p>
            <p class="card-text"> Duration: ${resultado.duration}</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
          <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example"></div> 

         <a href="artistas.html?id=${resultado.album.id}"><h1>Album: ${resultado.album.title} </h1> </a>

         <a href="artistas.html?id=${resultado.artist.id}"><h1>Artist: ${resultado.artist.name} </h1> </a>
             <div class="cajas d-flex" id="Tracks-nousar"> 
              <div class="col-4"id="imagenTracks">
              <img src="${resultado.album.cover_big}"></div>
             <div class="list-group col-7" id="Track">
              </div>       
             </div>`

           
           
             listaDetalles.innerHTML=contenidoTrdetalles
             console.log (listaDetalles);
            })
            .catch(function(error){
                console.log("Error:"+ error);
    
        });
    };




// // window.onload=function(){
// //     var querystring= location.search;
// //     var querystringObj= new URLSearchParams (querystring);
// //     var LoQueBuscoElUsuario= querystringObj.get('textoBuscado');
// //     // fijarse de ver si el fetch necesita modificarse
// //     fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556')
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (resultado) {
// //         console.log(resultado);

// //         var listaAll=document.querySelector("#Album");
// //         var contenidoAlbumes= "";
// //      for  (let i = 0; i < resultado.album.length; i++) {
// //          var albumes= resultado.album.data[i];
// //          contenidoAlbumes+=  + '<a href="albums.html">' + album.title + '</a>'
// //          contenidoAlbumes+= + '<h1> ' + album.cover_xl+ '</h1>' //chequear linea falta
// //      }
// //      document.querySelector("#imagenAlbums").innerHTML='<img src="'+ resultado.album.cover_xl+'"  class="rounded img-fluid "alt="...">'
// //      listaAll.innerHTML= contenidoAlbumes
// //      console.log(listaAll);
// //          //   } '
// //     //  var listaAlbums = document.querySelector("#Album");
//     //  var contenidoAlbums = "";
//     //  for (let i = 0; i < resultado.albums.data.length; i++) {
//     //    var album1 = resultado.albums.data[i];
//     //    contenidoAlbums += '<button type="button" class="list-group-item list-group-item-action text-black">' + '<a href="albums.html">' + album1.title + '</a>'+'</button>'
//     //  } 
//      // document.querySelector("#imagenAlbums").innerHTML='<img src="'+ resultado.albums.data[1].cover_xl+'"  class="rounded img-fluid "alt="...">'

//      //listaAlbums.innerHTML= contenidoAlbums
//      //console.log(listaAlbums);
    
// });
// }
