const validarImagen = (url,titulo,ul)=>{

    if((url.endsWith('jpg'))||(url.endsWith('jpeg'))){ 
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');   

        img.setAttribute('src', url,'alt', titulo);
        img.classList.add('imagenesSeries');
        p.textContent = titulo;
        
        li.append(img, p);
        ul.appendChild(li);
    }else{
        alert(`La imagen no se leyó porque no es un archivo .jpg o .jpeg`);
    }
}

export default validarImagen;