import botonAgregar from "./agregarSerie/agregarSerie.js";
import mostrarSeries from "./mostrar series/mostrarSeries.js";
(()=>{

    const datosSeries = [
        { 
            usuario : "José",
            serie :[
            {
                url : "https://media.es.wired.com/photos/64a2e814721d1170b8ceb266/master/pass/Jujutsu-Kaisen-Cursed-Clash.jpg",
                titulo : "Jujutsu Kaisen"
            },{
                url: "https://img.hulu.com/user/v3/artwork/558d44b0-8f21-4a96-9080-7828674288b0?base_image_bucket_name=image_manager&base_image=feda899a-0e93-49c7-bea9-dd99d757df8f&size=1200x630&format=jpeg",
                titulo: "Plastic Memories"  
            }]
        },
        {
            usuario : "Martha",
            serie :[
                {
                    url : "https://www.mundodeportivo.com/alfabeta/hero/2022/12/Shingeki-No-Kyojin-revela-nuevas-ilustraciones-de-sus-personajes-con-estilo-Ghibli.jpg",
                    titulo : "Shingeki no Kyojin"
                },{
                    url: "https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/97129a46f2418ffe5a67ec64f49a3038.jpeg",
                    titulo: "Death Note"
                }]
        },
        {
            usuario: "Andrea",
            serie :[
                {
                    url : "https://takamakiokerar.files.wordpress.com/2020/10/184929.jpg",
                    titulo : "Assassination classroom"
                }]
        },
        {
            usuario : "Isaias",
            serie :[
                {
                    url : "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/tumba-luciernagas_3.jpg",
                    titulo : "La tumba de las luciérnagas"
                }]
        }
    ];

    datosSeries.push({
        usuario: "Nohemí",
        serie: [{
            url: "https://cinepremiere.com.mx/wp-content/uploads/2020/10/Evangelion-25-aniversario-900x491.jpg",
            titulo: "Evangelion"
        },
        {
            url: "https://i.ytimg.com/vi/TH9FrG6kwV8/maxresdefault.jpg",
            titulo: "Record of Ragnarok"
        },
        {
            url: "https://www.fayerwayer.com/resizer/UzBxVsVVgc4g2FwtGhNgeiIcvaI=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/X6YDMBUHRZA2HMDJ4TC5EWZSCA.jpg",
            titulo: "Kimetsu no Yaiba"
        },{
            url: "https://www.cyberpunk.net/build/images/edgerunners/phase2/cover-desktop@1x-e6d6aaa1.jpg",
            titulo: "Cyberpunk: Edgerunners"
        }]
    });
    botonAgregar(datosSeries);
    mostrarSeries(datosSeries);
}) ();