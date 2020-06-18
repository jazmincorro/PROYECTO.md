
window.onload=function(){
    // Playlist

var recuperoStorage = localStorage.getItem('playlist');
var  playlist = JSON.parse(recuperoStorage);

var ContenedorPlaylist = document.querySelector('#RepPlaylist');
console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    ContenedorPlaylist.innerHTML += '<li>  </li>'
    console.log(ContenedorPlaylist);
    
} else {
// va a mostrar cada elemento del array
    playlist.forEach(function(idTracks){
       VerTrack(idTracks);
    });
}
var ContenidoPlaylist='';
function VerTrack (idTracks){
     fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+ idTracks) 

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/")
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            ContenedorPlaylist.innerHTML += '<li>' + '<a href="track.html?id=' + track.id + '">' + track.title + '</a></li>' 
        })
        .catch(function(errors){
            console.log(errors);
            
        })
};



}// no borrar 

// var recuperoStorage = localStorage.getItem('playlist');
// var playlist = JSON.parse(recuperoStorage);

// var playlistWrapper = document.querySelector('.playlistWrapper');
// console.log(recuperoStorage);
// if(recuperoStorage == null || recuperoStorage == "[]"){
//     playlist = [];
//     playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
//     console.log(playlistWrapper);
    
// } else {

//     playlist.for(function(idTrack){
//         contenidoTrack(idTrack);
//     });
// }

// function contenidoTrack(idTrack){
//     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/908622995")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (track) {
//             playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + track.id + '">' + track.title + '</a></li>' 
//         })
//         .catch(function(error){
//             console.log(error);
            
//         })
// };
// }
