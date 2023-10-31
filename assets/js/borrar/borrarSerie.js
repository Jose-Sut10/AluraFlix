const eliminarSerie = (datosSeries)=>{
    const capturaIcono = document.getElementsByClassName('iconoBorrar');
    const listaIconos = Array.from(capturaIcono);

    listaIconos.forEach((icono) => {
        icono.addEventListener('click', (e) => {
            e.preventDefault();
            const listItem = icono.parentNode;
            listItem.remove();
        });
    });
    
};

export default eliminarSerie;