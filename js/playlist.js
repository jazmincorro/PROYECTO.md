
// Playlist
window.onload = function () {
    
   
    var recuperoStorage = localStorage.getItem("playlist");
    
    
    
    var ContenedorPlaylist = JSON.parse(recuperoStorage);
    
    //Playlist en el HTML
  
    var ContenidoPlaylist = document.querySelector("#Playlist");
    console.log(recuperoStorage);
    // si no existe la cancion
    if (recuperoStorage == null || recuperoStorage == "[]") {
      ContenedorPlaylist = [];
      ContenidoPlaylist.innerHTML +=
        "<tr><td> No hay canciones en tu playlist </td></tr>";
      console.log(miPlaylist);
     
    } else {
      ContenedorPlaylist.forEach(function (idTrack) {
        TrackVisible(idTrack);
      });
    }
    // Canciones API
    function TrackVisible(idTrack) {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +
          idTrack
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (respuesta) {
         
          ContenidoPlaylist.innerHTML +=
            "<tr>" +
            '<td class="d-flex justify-content-between align-items-center">' +
            '<a href="tracks.html?id=' +
            respuesta.id +
            '" class="text-light">' +
            respuesta.title +
            "</a></td>" +
            "</tr>";
        })
       
        .catch(function (error) {
          console.log(error);
        });
    }
  };