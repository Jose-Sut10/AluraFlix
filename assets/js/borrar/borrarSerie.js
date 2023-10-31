
const eliminarSerie = (datos)=>{
    //const capturaIcono = document.getElementsByClassName('fa-circle-minus');

    const elementoEliminar = datos.forEach((elemento)=>{
        elemento.serie.forEach((captura)=>{
            
            console.log(captura.titulo);
        });
    });

};


export default eliminarSerie;