import mostrarSeries from "../mostrar series/mostrarSeries.js";

const botonAgregar = (datosSeries)=>{
    const btnAgregar = document.querySelector('[data-botonAgregar]');
    const inputNombre = document.querySelector('[data-inputNombre]');
    const inputEnlace = document.querySelector('[data-inputEnlace]');

    btnAgregar.addEventListener('click',(e)=>{
        e.preventDefault();
        agregarSerie(datosSeries, inputNombre.value, inputEnlace.value);
        document.querySelector('[data-inputEnlace]').value = "";
    });
}

const agregarSerie = (datos,titulo,enlace)=>{

    if(enlace == ''){
        alert('El campo "dirección de imagen" no puede estar vacío');
    }else{
        const recarga = document.querySelector('[data-contenedorPeliculas]');
        recarga.innerHTML = '';
        datos.push({
            usuario: "",
            serie: [{
                url: enlace,
                titulo: titulo
            }]
        });
        document.querySelector('[data-inputNombre]').value = "";
        mostrarSeries(datos);
    }
};

export default botonAgregar;