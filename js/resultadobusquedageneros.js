window.onload=function(){
    var querystring= location.search;
    var querystringObj= new URLSearchParams (querystring);
    var LoQueBuscoElUsuario= querystringObj.get('textoBuscado');
    // fijarse de ver si el fetch necesita modificarse
    fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0'+LoQueBuscoElUsuario)
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);
     var contenido ='';
        for (let i = 0; i < resultado.object; i++) {
contenido+= '<div class="genero">'+ resultado.data.name; //chequear si va con el i
contenido+=  '<img alt="" src="'+ resultado.data.picture_medium +'">';
contenido+= '<div class="nombregenero">'+resultado.data.type;
       
        }
        var contenedor = document.querySelector( '.resultados')
        contenedor.innerHTML=contenido;
      })
      .catch(function(error){
          console.log("Error:"+ error);
      });
     
     
   
}// no borrar