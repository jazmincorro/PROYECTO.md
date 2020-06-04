 

//  window.onload=function(){
// fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127')
// .then(function(response) {
  // return response.json()
// })
// .then(function(resultado) {
  // console.log(resultado);
  /*
  var imagen=resultado.data.image_url;

  var div=document.querySelector(".gifRandom")
  div.innerHTML='<img alt="cualquier gif"src="'+imagen+'">';
  */
// })
// .catch(function(error) {
  // console.log("Error: " + error);
// })

//} //no borrar jamas

window.onload=function(){
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556')
 .then(function(response) {
  return response.json()
 })
.then(function(myJson) {
 console.log(myJson);

 var title= myJson.title;
 var carrousel = document.querySelector('#carrousel');
 carrousel.innerHTML+= '<h3 class="uk-card-title">'+title+'</h3>'
 
 var picture= myJson.picture;
 var foto= document.querySelector('#foto');
 foto.innerHTML+='<img src="images/photo.jpg"> '+picture+' <alt="">'


 })
 .catch(function(error) {
    console.log("Error: " + error);
   })
  }
  






