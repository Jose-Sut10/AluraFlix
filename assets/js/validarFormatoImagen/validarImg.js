const validarImagen = (url,titulo,trailer,ul)=>{

    if((url.endsWith('jpg'))||(url.endsWith('jpeg'))){ 
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');   

        img.setAttribute('src', url,'alt', titulo);
        img.classList.add('imagenesSeries');
        a.setAttribute('href',trailer);
        a.target = '_blank';
        a.appendChild(img);
        p.textContent = titulo;
        
        li.append(a, p);
        ul.appendChild(li);
    }else{
        alert(`La imagen no se leyó porque no es un archivo .jpg o .jpeg`);
    }
}

export default validarImagen;