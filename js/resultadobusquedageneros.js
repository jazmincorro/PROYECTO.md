window.onload=function(){
    var queryString = document.location.search;
      var queryStringObj = new URLSearchParams(queryString);
      let idGeneros = queryStringObj.get("id");
       console.log(idGeneros)
   
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" +  idGeneros  + "/artists")
    
        .then(function (response) {
            return response.json();
        })
        .then(function (resultado) {
            console.log(resultado)
           
//   Traigo el lisatdo de Artistas

           for (let i = 0; i < '10'; i++) {
               var GeneroAname= document.querySelector('#listaArtistas')
               var NombreA= resultado.data[i].name
               var GeneroAimagen= resultado.data[i].picture
               GeneroAname.innerHTML+=  '<div class="col-4 bg-dark rounded m-3"><img alt="" src="'+ GeneroAimagen +'">' +'<a href="artistas.html?id='+resultado.data[i].id+'" class="btn btn-dark col-12">'+ NombreA +'</a></div>'}
           })
           .catch(function(error){
            console.log("Error:"+ error);
        });
    
    
    }