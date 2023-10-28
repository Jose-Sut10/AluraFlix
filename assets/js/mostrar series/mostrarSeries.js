import validarImagen from "../validarFormatoImagen/validarImg.js";

const mostrarSeries = (datosSeries)=>{
    const contenedor = document.querySelector('[data-contenedorPeliculas]');
    const ul = document.createElement('ul');
    ul.classList.add('contenido__lista');

    const series = datosSeries.forEach((perfil)=>{
        perfil.serie.forEach((dato)=>{
            validarImagen(dato.url,dato.titulo,ul);

            return contenedor.appendChild(ul);
        });
    });
};

export default mostrarSeries;