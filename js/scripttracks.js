
window.onload=function(){
    var queryString =document.location.search;
    var queryStringObj = new URLSearchParams (queryString);

    var idTracks= queryStringObj.get("id");
    console.log(idTracks);
   

fetch(
  "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +
    idTracks
)
  .then(function (response) {
    return response.json();
  })
  .then(function (resultado) {
    console.log(resultado);
    var CuerpoCancion = document.querySelector("#Canciones");
    var Canciones = "";
    // canción
    Canciones +=
      '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=' +
      idTracks +
      '&app_id=1" width="300" height="300"></iframe>';
    console.log(resultado.preview);
    CuerpoCancion.innerHTML = Canciones;
  });

var BuscarPlaylist = localStorage.getItem("playlist");

if (BuscarPlaylist == null || BuscarPlaylist == "[]") {
  
  playlist = [];
} else {
  playlist = JSON.parse(BuscarPlaylist);
}


if (playlist.includes(idTracks)) {
  document.querySelector("#BotonAgregar").innerHTML =
  '<button type="button" class="btn btn-secondary data-container="body"><svg class="bi bi-arrow-down-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/></svg>Sacar de playlist</button>';
}


var agregaraPlaylist = document.querySelector("#BotonAgregar");

agregaraPlaylist.addEventListener ("click", function (e) {
  
  e.preventDefault();



  if (playlist.includes(idTracks)) {
  
    let indiceEnElArray = playlist.indexOf(idTrack);
    playlist.splice(indiceEnElArray, 1);
    document.querySelector("#BotonAgregar").innerHTML = '<button type="button" class="btn btn-secondary data-container="body"><svg class="bi bi-arrow-down-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/></svg>Sacar de playlist</button>';
    console.log(playlist);
  } else {
    
    playlist.push(idTracks);
    document.querySelector("#BotonAgregar").innerHTML =
    '<button type="button" class="btn btn-secondary data-container="body"><svg class="bi bi-arrow-down-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/></svg>Agregar a playlist</button>';
  }

  let playlistParaStorage = JSON.stringify(playlist);
  localStorage.setItem("playlist", playlistParaStorage);
  console.log(localStorage);
});
}