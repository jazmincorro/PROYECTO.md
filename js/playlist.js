//My Playlist
window.onload=function(){
var recuperoStorage = localStorage.getItem('playlist');
var playlist = JSON.parse(recuperoStorage);

var playlistWrapper = document.querySelector('.playlistWrapper');
console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(playlistWrapper);
    
} else {

    playlist.for(function(idTrack){
        contenidoTrack(idTrack);
    });
}

function contenidoTrack(idTrack){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/908622995")

        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + track.id + '">' + track.title + '</a></li>' 
        })
        .catch(function(error){
            console.log(error);
            
        })
};
}
