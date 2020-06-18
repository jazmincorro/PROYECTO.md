window.onload=function(){

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

    var queryStringG =document.location.search;
    var queryStringObj = new URLSearchParams (queryStringG);
    var idGeneros= queryStringObj.get("id");
    console.log(idGeneros);
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGeneros /'artist/')

    if (typeQuerySelector=='genero') {
        var Tracks
        var Nombre
        var Imagen
        var idGenero= resultado.id
        var imagenGenero= document.querySelector ("#ImagenGenero")
        var nombreGenero= document.querySelector ("#NombreG") 

        imagenGenero.innerHTML+= "<img src= '"+ Imagen+ "'alt= 'genero imagen'>";
        nombreGenero.innerHTML+= Nombre
        console.log (resultado.data);
        
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenero + "/artists")
        .then(function (response) {
            return response.json();
        })
        .then(function (resultado) {
            console.log(resultado);


            for (let i = 0; i < "10"; i++) {
                var nameAr=resultado.data [i].name;
                var pictureAr= resultado.data[i].picture_big;
                var ArNombre= document.querySelector ("#listaArtistas");


                var idAr= resultado.data[i].id;
                ArNombre.innerHTML+= pictureAr
                
            }

            console.log("error:" + error);
        });
    


}

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
     
     
   
}// no borrar