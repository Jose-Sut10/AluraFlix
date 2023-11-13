const eliminarSerie = (datosSeries) => {
    const contenedor = document.querySelector('[data-contenedorPeliculas]');

    contenedor.addEventListener('click', (e) => {
        if (e.target.classList.contains('iconoBorrar')) {
            e.preventDefault();

            const listItem = e.target.parentNode;
            const img = listItem.querySelector('img');
            const valorImagen = img.getAttribute('src');

            listItem.remove();

            datosSeries.forEach((usuario, index) => {
                usuario.serie.forEach((valorSerie, posicion) => {
                    if (valorSerie.url === valorImagen) {
                        datosSeries[index].serie.splice(posicion, 1);
                    }
                });
            });
        }
    });
};

  

export default eliminarSerie;