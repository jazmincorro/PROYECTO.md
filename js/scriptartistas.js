window.onload=function(){
    var queryString =document.location.search.substring (0);
    var queryStringObj = new URLSearchParams (queryString);

    var idartistas= queryStringObj.get("id");
    console.log(idartistas);
  //  console.log(idArtistas);

  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+idartistas)
  .then(function (response) {
      return response.json();
  })
  .then(function (resultado) {
      console.log(resultado);


       var listaDetalles= document.querySelector ('.mb-33');
      var contenidoTrdetalles= "";
      
        contenidoTrdetalles+= `<p class="card-text">${resultado.name}</p>
         <img src="${resultado.picture_small}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${resultado.nb_album}</h5>
          <p class="card-text">${resultado.nb_fan}</p>
          <p class="card-text"><small class="text-muted"></small></p>`
      

         
         
           listaDetalles.innerHTML=contenidoTrdetalles
           
          })
          .catch(function(error){
              console.log("Error:"+ error);
  
      });
  };

