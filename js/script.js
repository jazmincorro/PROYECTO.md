 window.onload=function(){
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127')
.then(function(response) {
  return response.json()
})
.then(function(resultado) {
  console.log(resultado);
  /*
  var imagen=resultado.data.image_url;

  var div=document.querySelector(".gifRandom")
  div.innerHTML='<img alt="cualquier gif"src="'+imagen+'">';
  */
})
.catch(function(error) {
  console.log("Error: " + error);
})



} //no borrar jamas

fetch('https://api.deezer.com/track/3135556')
.then(function(response) {
  return response.json()
})
.then(function(myJson) {
  console.log(myJson);
})
.catch(function(error) {
    console.log("Error: " + error);
  })
//var listaTracks=resultado.nb_tracks;
//var listaTracks=document.querySelector('.listaTracks');
//var listaTracks= nb_tracks;





  