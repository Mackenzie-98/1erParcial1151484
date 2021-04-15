function cargarDatos(url){
    
    fetch(url)
      .then(response => response.json())
      .then(datos => generarNoticias(datos))
      .catch(error => console.log(error.message));
  }
  function generarNoticias(datos){
    var cuerpo =document.querySelector("#preliminar");
    var imagen = document.createElement("img");
    imagen.src = datos[0].img;
    cuerpo.appendChild(imagen);
    for(var i = 0; i < Math.min(3,datos.length);i++){
        var seccion = document.createElement("section");
        seccion.innerHTML = 
        `<h3>${datos[i].titulo}-${datos[i].categoria}-${datos[i].fecha}</h3>
        <p>${datos[i].descripcion}. <a href="#">Ver más</a></p>`;
        cuerpo.appendChild(seccion);
    }
  }
  var url1="https://carlosreneas.github.io/endpoints/noticias.json";
  var url2="https://carlosreneas.github.io/endpoints/noticias.json";
  var url3="https://carlosreneas.github.io/endpoints/noticias.json";
  cargarDatos(url1);