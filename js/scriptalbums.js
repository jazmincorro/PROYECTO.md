window.onload=function(){
    var queryString =document.location.search.substring (0);
    var queryStringObj = new URLSearchParams (queryString);

    var idAlbum= queryStringObj.get("id");
    console.log(idAlbum);
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idAlbum)
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);

        var listaDetalles= document.querySelector ('.mb-3');
        var contenidoAldetalles= "";
        
          contenidoAldetalles+= `<img src="${resultado.cover_xl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${resultado.title}</h5>
            <p class="card-text">${resultado.release_date}</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
          <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example"></div> 

         <a href="artistas.html?id=${resultado.artist.id}"><h1>Artist: ${resultado.artist.name} </h1> </a>
             <div class="cajas d-flex" id="Albums-nousar"> 
              <div class="col-4"id="imagenAlbums">
              <img src="${resultado.artist.picture_big}"></div>
             <div class="list-group col-7" id="Album">
              </div>       
             </div>`

           
           
         listaDetalles.innerHTML=contenidoAldetalles
         console.log (listaDetalles);
        })
        .catch(function(error){
            console.log("Error:"+ error);

    });
};

   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
