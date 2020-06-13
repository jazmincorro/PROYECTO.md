 window.onload=function(){
  var queryString =document.location.search;
  var queryStringObj = new URLSearchParams (queryString);

  var idArtistas= queryStringObj.get("id");
  console.log(idArtistas);
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtistas)
  .then(function (response) {
      return response.json();
  })
  .then(function (resultado) {
    console.log(resultado);


       var listaDetalles= document.querySelector ('.mb-3');
       var contenidoArdetalles= "";
      
        contenidoArdetalles+= `<img src="${resultado.picture_xl}" class="card-img-top" alt="...">
        
          <div class="card-body">
          <p class="card-text">${resultado.name}</p>
          <p class="card-text"> Fans: ${resultado.nb_fan}</p>
         <p class="card-text"><small class="text-muted"></small></p>
        </div>
        <div id="list-example" class="${resultado.tracklist}>
          <a class="list-group-item list-group-item-action" href="">Item 1</a>
          <a class="list-group-item list-group-item-action" href="">Item 2</a>
          <a class="list-group-item list-group-item-action" href="">Item 3</a>
          <a class="list-group-item list-group-item-action" href="">Item 4</a>
          <a class="list-group-item list-group-item-action" href="">Item 5</a>
        </div>
        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
        </div>
        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example"></div>`
       
        listaDetalles.innerHTML=contenidoArdetalles
        console.log (listaDetalles);
       });

      

      //var idArtistas= queryStringObj.get("id");
      //console.log(idArtistas);
      window.onload=function(){

       fetch("https://cors-anywhere.herokuapp.com/https:/https://api.deezer.com/artist/" + idArtistas + "/top") 

       .then(function (response) {
        return response.json();
      })
    
      .then(function (resultado){
        console.log(resultado);

      });
    }}

       



    
    