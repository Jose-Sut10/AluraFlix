import botonAgregar from "./agregarSerie/agregarSerie.js";
import mostrarSeries from "./mostrar series/mostrarSeries.js";
(()=>{

    const datosSeries = [
        { 
            usuario : "José",
            serie :[
            {
                url : "https://media.es.wired.com/photos/64a2e814721d1170b8ceb266/master/pass/Jujutsu-Kaisen-Cursed-Clash.jpg",
                titulo : "Jujutsu Kaisen",
                urlTrailer :"https://youtu.be/aPBUUJbrAWo?si=ibrbkkKE1wOIWx_f" 
            },{
                url: "https://img.hulu.com/user/v3/artwork/558d44b0-8f21-4a96-9080-7828674288b0?base_image_bucket_name=image_manager&base_image=feda899a-0e93-49c7-bea9-dd99d757df8f&size=1200x630&format=jpeg",
                titulo: "Plastic Memories",
                urlTrailer :"https://youtu.be/Blf39o5diHo?si=i55HMkyxMMAKGFQF" 
            }]
        },
        {
            usuario : "Martha",
            serie :[
                {
                    url : "https://www.mundodeportivo.com/alfabeta/hero/2022/12/Shingeki-No-Kyojin-revela-nuevas-ilustraciones-de-sus-personajes-con-estilo-Ghibli.jpg",
                    titulo : "Shingeki no Kyojin",
                    urlTrailer :"https://youtu.be/sFuAhHTgABs?si=1U0ehjCKx-QF_Q88" 
                }]
        }
    ];

    datosSeries.push({
        usuario: "Nohemí",
        serie: [{
            url: "https://cinepremiere.com.mx/wp-content/uploads/2020/10/Evangelion-25-aniversario-900x491.jpg",
            titulo: "Evangelion",
            urlTrailer :"https://youtu.be/3bdjDmYc8J4?si=2rqdYR8XPPiLP3HN" 
        },
        {
            url: "https://i.ytimg.com/vi/TH9FrG6kwV8/maxresdefault.jpg",
            titulo: "Record of Ragnarok",
            urlTrailer :"https://youtu.be/_9HxsIYORyE?si=edDbEfFUqZ0c6N9r" 
        },{
            url: "https://www.cyberpunk.net/build/images/edgerunners/phase2/cover-desktop@1x-e6d6aaa1.jpg",
            titulo: "Cyberpunk: Edgerunners",
            urlTrailer :"https://youtu.be/JtqIas3bYhg?si=5vvqoZkmV9o6S6Cx" 
        }]
    });
    botonAgregar(datosSeries);
    mostrarSeries(datosSeries);
}) ();