 

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function (response) {
  return response.json();
})
.then(function (resultado) {
  console.log(resultado);
  var listaCanciones = document.querySelector("#listaCanciones");
  var contenidoCanciones = "";
  
  
  
  
  
  
  
  
  
  
  
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

// window.onload=function(){
// fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
//  .then(function(response) {
//   return response.json()
//  })
// .then(function(myJson) {
//  console.log(myJson);

 
//  var carrousel = document.querySelector('#ArtistasCarr');
//  var Artista="";
//  for (let i = 0; i <myJson.artists.data.length; i++) {
//    const element = myJson.artists.data[i];
//    Artista =+ "<li>" +'<div class="uk-card uk-card-default">'+'<div class="uk-card-media-top">';
//    Artista=+'<img src="' + element.picture_big+'" alt="">' +'</div>'
//    Artista+= '<div class="uk-card-body"' + '<h3 class="uk-card-title">'+ element.name+'</h3>'
//    Artista += '<p>'+element.followers+'</p>'+'</div>'+'</div>' +'</li>'
   
//  }
//  carrousel.innerHTML = Artista
//  console.log(carrousel);
 
// })
//  .catch(function(error) {
//     console.log("Error: " + error);
//    })
//   }

 //cajas home
//  window.onload=function(){
//  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/')
   
//  .then(function(response) {
//     return response.json()
//    })
//  .then(function(myJson) {
//    console.log(myJson);
//  }
  
   
  //  var cajas = document.querySelector('#tracks');
  //  var tracks="";
  //  for (let i = 0; i <myJson.tracks.data.length; i++) {
  //     const element = myJson.tracks.data[i];
  //  }
  //  cajas.innerHTML= tracks
  //  console.log(cajas);
  // })
  //   .catch(function(error) {
  //        console.log("Error: " + error);
  //   })
         
 
     // tracks =+ "<li>" +'<div class="uk-card uk-card-default">'+'<div class="uk-card-media-top">';
     // tracks=+'<img src="' + element.picture_big+'" alt="">' +'</div>'
     // tracks+= '<div class="uk-card-body"' + '<h3 class="uk-card-title">'+ element.name+'</h3>'
     // tracks+= '<p>'+element.followers+'</p>'+'</div>'+'</div>' +'</li>'

   
   



//  window.onload=function(){
//     fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
//      .then(function(response) {
//       return response.json()
//      })
//     .then(function(myJson) {
//      console.log(myJson);

//      var cajas= document.querySelector('tracks');
//      var 


//      <div class="cajas" id="tracks"> 
        
//      <ul>
//           <li class="Tracks"><a href="albums.html">Tracks</a></li>
//      </ul>
// <div class="cajas"id="Albums">
//      <ul>
//           <li class="Albums"><a href="albums.html">Albums</a></li>
//       </ul>
//   </div>
// <div class="cajas" id="Artistas">
//      <ul><li class="Artistas"><a href="albums.html">Artistas</a></li>
//      </ul>
         
//  </div> 




  






