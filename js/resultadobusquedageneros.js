window.onload=function(){
    var queryStringD =document.location.search;
    var queryStringObj = new URLSearchParams (queryStringD);
    var idQuerySelector= queryStringObj.get("id");
  console.log(idQuerySelector)
   // var typeQuerySelector= queryStringObj.get('type')
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idQuerySelector)

    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
    
// if (typeQuerySelector== track){

// var tracks= document.querySelector('.info-songs')
// tracks.style.display= 'flex'
// var trackTitle= resultado.title;
// var trackAlbum = resultado.album.title;


    var NombreGenD= resultado.Name;
    var ImagenGeneroD= resultado.picture;
    var IdGeneroD= resultado.id;
    var ImagenGen= document.querySelector( '#ImagenGenero')
    var  Name= document.querySelector('#NombreG')

    ImagenGen.innerHTML += "<img src= '"+ ImagenGeneroD+"' alt'>";
    Name.innerHTML+= NombreGenD

   // console.log(resultado.data)
    
   
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (resultado) {
//         console.log(resultado);
//    var queryStringG =document.location.search;
//     var queryStringObj = new URLSearchParams (queryStringG);
//     var idGeneros= queryStringObj.get("id");
// var queryStringD =document.location.search;
// var queryStringObj = new URLSearchParams (queryStringD);
// var IdGeneroD= queryStringObj.get("id");
   
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" +  IdGeneroD  + "/artists")
    
        .then(function (response) {
            return response.json();
        })
        .then(function (resultado) {
            console.log(resultado)
           
  
           for (let i = 0; i < '10'; i++) {
               var NombreA= resultado.data[i].Name
               var GeneroAimagen= resultado.data[i].picture
               var GeneroAname= document.querySelector('#listaArtistas')
               var ArtId= resultado.data[i].id
               GeneroAname.innerHTML+=  '<img alt="" src="'+ GeneroAimagen +'">' + NombreA +  ArtId}
           })
           .catch(function(error){
            console.log("Error:"+ error);
        });
       
        //   const element = resultado.data[i];
    

        //         ContenidoGenerosD += element.name
        //         + '<img alt="" src="'+element.picture+'">'+
        //          ' <a class="list-group-item list-group-item-action" href="tracks.html?id=' + element.id +
         
        //        '">';

        //     }


        //       ContnedorGenerosD.innerHTML+= ContenidoGenerosD
    
                
        //     })
           
        
    


})
}// no borrar











 // var idGeneros= queryStringObj.get("id");
    // console.log(idGeneros);
    // fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGeneros /artist/)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (resultado) {
    //     console.log(resultado);

    //     var listaDetallesGenero= document.querySelector ('#detalleGenero');
    //     var contenidoGdetalles= "";
        
    //       contenidoGdetalles+= `<h5 class="card-title">${resultado.title}</h5>
    //         <p class="card-text"><small class="text-muted"></small></p>
    //         </div>
    //         <a href="artistas.html?idGenero=${genero.id}">
    //         <h1>Artist: ${resultado.artist.name} </h1> </a>
    //          <div class="cajas d-flex" id="Albums-nousar"> 
    //           <div class="col-4"id="imagenAlbums">
    //           <img src="${resultado.artist.picture_big}"></div>
    //          <div class="list-group col-7" id="Album">
    //           </div>       
    //          </div>`

           
           
    //      listaDetallesGenero.innerHTML=contenidoGdetalles
    //      console.log (listaDetallesGenero);
    //     })
    //     .catch(function(error){
    //         //console.log("Error:"+ error);

    // });





    // var querystring= document.location.search;
    // var querystringObj= new URLSearchParams (querystring);
   
    // var LoQueBuscoElUsuario= querystringObj.get("id");
    // fijarse de ver si el fetch necesita modificarse
    // console.log(LoQueBuscoElUsuario);
    // fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+ LoQueBuscoElUsuario)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (resultado) {
    //     console.log(resultado);
    
    //     var contenedor = document.querySelector( '.resultados')
    //     var contenido ='';
       
    //    contenido+= '<div class="genero">'+ resultado.data.name; //chequear si va con el i
    //    contenido+=  '<img alt="" src="'+ resultado.data.picture_medium +'">';
    //    contenido+= '<div class="nombregenero">'+resultado.data.type;
       
        
     
    //     contenedor.innerHTML=contenido;
    //   })
    //   .catch(function(error){
    //       console.log("Error:"+ error);
    //   });
     
     
   
// no borrar