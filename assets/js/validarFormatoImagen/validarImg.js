const validarImagen = (url,titulo,trailer,ul)=>{

    if((url.endsWith('jpg'))||(url.endsWith('jpeg'))){ 
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');

        const iconoEliminar = document.createElement('i');
        iconoEliminar.classList.add("fa-sharp", "fa-solid", "fa-circle-minus","iconoBorrar");

        img.setAttribute('src', url,'alt', titulo);
        img.classList.add('imagenesSeries');
        a.setAttribute('href',trailer);
        a.target = '_blank';
        a.appendChild(img);
        p.textContent = titulo;
        
        li.append(iconoEliminar,a, p);
        ul.appendChild(li);
    }else{
        alert(`La imagen no se leyó porque no es un archivo .jpg o .jpeg`);
    }
}

export default validarImagen;