import mostrarSeries from "../mostrar series/mostrarSeries.js";

const botonAgregar = (datosSeries)=>{
    const btnAgregar = document.querySelector('[data-botonAgregar]');
    const inputNombre = document.querySelector('[data-inputNombre]');
    const inputEnlace = document.querySelector('[data-inputEnlace]');
    const inputTrailer = document.querySelector('[data-inputTrailer]');

    btnAgregar.addEventListener('click',(e)=>{
        e.preventDefault();
        agregarSerie(datosSeries, inputNombre.value, inputEnlace.value, inputTrailer.value);
        document.querySelector('[data-inputEnlace]').value = "";
    });
}

const agregarSerie = (datos,titulo,imagen,trailer)=>{

    if((imagen == '') || (trailer == '') || (titulo == '')){
        alert('Este campo no puede estar vacío');
    }else{
        const recarga = document.querySelector('[data-contenedorPeliculas]');
        recarga.innerHTML = '';
        datos.push({
            usuario: "",
            id: uuid.v4(),
            serie: [{
                idImagen: uuid.v4(),
                url: imagen,
                titulo: titulo,
                urlTrailer: trailer
            }]
        });
        document.querySelector('[data-inputNombre]').value = "";
        document.querySelector('[data-inputTrailer]').value = "";
        mostrarSeries(datos);
    }
};

export default botonAgregar;