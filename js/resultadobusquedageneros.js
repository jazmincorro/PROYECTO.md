window.onload=function(){
    var querystring= document.location.search;
    var querystringObj= new URLSearchParams (querystring);
   
    var LoQueBuscoElUsuario= querystringObj.get("id");
    // fijarse de ver si el fetch necesita modificarse
    console.log(LoQueBuscoElUsuario);
    fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+LoQueBuscoElUsuario)
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);
    
        var contenedor = document.querySelector( '.resultados')
        var contenido ='';
       
       contenido+= '<div class="genero">'+ resultado.data.name; //chequear si va con el i
       contenido+=  '<img alt="" src="'+ resultado.data.picture_medium +'">';
       contenido+= '<div class="nombregenero">'+resultado.data.type;
       
        
     
        contenedor.innerHTML=contenido;
      })
      .catch(function(error){
          console.log("Error:"+ error);
      });
     
     
   
}// no borrar