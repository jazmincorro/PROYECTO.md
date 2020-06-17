window.onload=function(){
    var queryStringG =document.location.search.substring (0);
    var queryStringObj = new URLSearchParams (queryStringG);

    var idGenero= queryStringObj.get("id");
    console.log(idGenero);
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenero)
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);

        var listaDetallesGenero= document.querySelector ('#detalleGenero');
        var contenidoGdetalles= "";
        
          contenidoGdetalles+= `<h5 class="card-title">${resultado.title}</h5>
            <p class="card-text"><small class="text-muted"></small></p>
            </div>
            <a href="artistas.html?idGenero=${genero.id}">
            <h1>Artist: ${resultado.artist.name} </h1> </a>
             <div class="cajas d-flex" id="Albums-nousar"> 
              <div class="col-4"id="imagenAlbums">
              <img src="${resultado.artist.picture_big}"></div>
             <div class="list-group col-7" id="Album">
              </div>       
             </div>`

           
           
         listaDetallesGenero.innerHTML=contenidoGdetalles
         console.log (listaDetallesGenero);
        })
        .catch(function(error){
            //console.log("Error:"+ error);

    });

}


//     var querystring= document.location.search;
//     var querystringObj= new URLSearchParams (querystring);
   
//     var LoQueBuscoElUsuario= querystringObj.get("id");
//     // fijarse de ver si el fetch necesita modificarse
//     console.log(LoQueBuscoElUsuario);
//     fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+ LoQueBuscoElUsuario)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (resultado) {
//         console.log(resultado);
    
//         var contenedor = document.querySelector( '.resultados')
//         var contenido ='';
       
//        contenido+= '<div class="genero">'+ resultado.data.name; //chequear si va con el i
//        contenido+=  '<img alt="" src="'+ resultado.data.picture_medium +'">';
//        contenido+= '<div class="nombregenero">'+resultado.data.type;
       
        
     
//         contenedor.innerHTML=contenido;
//       })
//       .catch(function(error){
//           console.log("Error:"+ error);
//       });
     
     
   
 