window.onload=function(){
    fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);
     
      var listadoDegeneros = document.querySelector('.GENEROS');
      var ContenidoDegeneros = '';
      for (let i = 0; i < resultado.data.length; i++) {
       ContenidoDegeneros+=
       '<div class="card col-lg-2 col-sm-5 bg-light align-items-center  m-3 border">'
   ContenidoDegeneros+=
   '<img class="card-img-top rounded mt-3 border border-warning" src"'+
   resultado.data[i].picture+
   '"alt="card image"/>';
   ContenidoDegeneros+=
  '<div class="card-body">';
       ContenidoDegeneros+=
     '<div class= "card-bpdy">'+
     '<a href="list.html" class="btn btn-warning col 12">'+
     resultado.data[i].name+
     "</a>"
     ContenidoDegeneros+="</div> </div>";
      }
      listadoDegeneros.innerHTML=ContenidoDegeneros;
    })
    .catch(function(error){
        console.log("Error:"+ error);
    });
   
}