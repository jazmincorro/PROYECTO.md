window.onload=function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
    .then(function (response) {
        return response.json();
    })
    .then(function (resultado) {
        console.log(resultado);

        var listaDetalles= document.querySelector ('#albums.dt');
        var contenidoAldetalles= "";
        for (let i = 0; i < resultado.artist; i++) {
            var detallesAlbum= resultado.artist.data [i];
            contenidoAldetalles += '<button type="button" class="list-group-item list-group-item-action text-black">' + '<a href="albums.html">' + detallesAlbum.title+ '</a>'+'</button>'
         }
         document.querySelector ("#img.albums"). innerHTML= '<img src='+ resultado.artist.data[1].cover +'"  class="rounded img-fluid "alt="...">'

         listaDetalles.innerHTML=contenidoAldetalles
         console.log (listaDetalles);
    });
};

   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
