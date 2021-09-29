window.addEventListener('load', function(){
    const botonNacionales = document.querySelector('.start');
    const botonInternacionales = document.querySelector('.nn');
    const botonInicio = document.querySelector('.in');
    const pais = ["fa-globe-americas","fas fa-house-user"]
    renderizarTarjetas(noticias, pais);

    botonNacionales.addEventListener('click', function() {
      eliminarElemento()
      renderizarTarjetas(noticias, pais);
    });
    botonInternacionales.addEventListener('click', function() {
      eliminarElemento()
      renderizarTarjetas(noticias.filter(noticia => noticia.tipoNacional), pais);
    });
    botonInicio.addEventListener('click', function() {
      eliminarElemento()
      renderizarTarjetas(noticias.filter(noticia => !noticia.tipoNacional), pais);
    });
})

function renderizarTarjetas(data,pais) {
    const contenedor = document.querySelector('.contenedor');
    //replicamos las tarjetas en el contenedor
    console.log(contenedor);
    console.log(pais);
    for (let i = 0; i < data.length; i++) {
      contenedor.innerHTML += `<div class="item">
        <img src="${data[i].imgUrl}">
        <div class="texto">
        <h2>${data[i].titulo}</h2>
        <p>
         ${data[i].descripcion}
        </p>
        <p class="fecha">
         ${data[i].fecha}
        </p>
        <i class="fas ${data[i].tipoNacional ? pais[1] : pais[0]}"></i>
        </div>
      </div>`;
    }
}

function eliminarElemento(){
  const contenedor = document.querySelector('.contenedor');
  contenedor.replaceChildren();
}

