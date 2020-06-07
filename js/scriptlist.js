window.onload=function(){
    fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);
     //quiero mostrar un listado  de li que tenga el nombre del genero y la imagen de cada uno
        var listadoDegeneros = document.querySelector('.GENEROS');
        var ContenidoDegeneros = '';// texto
        for (let i = 0; i < resultado.data.length; i++) {

            ContenidoDegeneros+= '<div class="card-body">'+  '<a href="index.html" class="btn btn-warning col 12">'+  resultado.data[i].name+ "</a>";

     ContenidoDegeneros+=    '<img alt="" src="'+ resultado.data[i].picture +'">';

     
     
     ContenidoDegeneros+="</div> </div>";
        }
        listadoDegeneros.innerHTML=ContenidoDegeneros;
      })
      .catch(function(error){
          console.log("Error:"+ error);
      });
     
     
   
}