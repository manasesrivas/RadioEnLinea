const canciones = {
    "Oye mi amor":{
        "direccion": "https://res.cloudinary.com/dcqr7yd84/video/upload/v1746977192/oyemiamor_yz2syc.mp3",
        "poster": "https://res.cloudinary.com/dcqr7yd84/image/upload/v1746932701/oyeMiAmor_mjxqzj.jpg",
        "video": `<iframe width="560" height="315" src="https://www.youtube.com/embed/h0p8yTqj8i4?si=UwaEzF5OwOGJNUG-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    "Labios compartidos":{
        "direccion": "https://res.cloudinary.com/dcqr7yd84/video/upload/v1746979153/Labios_Compartidos_2019_Remasterizado_-_Man%C3%A1_o5apwx.mp3",
        "poster": "https://res.cloudinary.com/dcqr7yd84/image/upload/v1746930643/Man%C3%A1_uus0oo.jpg",
        "video": `<iframe width="560" height="315" src="https://www.youtube.com/embed/1IgOZaQqB58?si=NvjVbn8kqNlP9IXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    "En el muelle de san blas":{
        "direccion": "https://res.cloudinary.com/dcqr7yd84/video/upload/v1746977190/enelmuelledesanblas_mj7pgz.mp3",
        "poster": "https://res.cloudinary.com/dcqr7yd84/image/upload/v1746932701/muelleDeSanBlas_szwneg.jpg",
        "video": `<iframe width="560" height="315" src="https://www.youtube.com/embed/teprNzF6J1I?si=uJvHO5HDwXj2I18y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    "Clavado en un bar":{
        "direccion": "https://res.cloudinary.com/dcqr7yd84/video/upload/v1746979140/Clavado_en_Un_Bar_-_Man%C3%A1_faylvf.mp3",
        "poster": "https://res.cloudinary.com/dcqr7yd84/image/upload/v1746932701/oyeMiAmor_mjxqzj.jpg",
        "video": `<iframe width="560" height="315" src="https://www.youtube.com/embed/fBrX8ym3dBM?si=lN8BeQibpR9rD4VM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    "Mariposa traicionera":{
        "direccion": "https://res.cloudinary.com/dcqr7yd84/video/upload/v1746979153/Mariposa_Traicionera_2020_Remasterizado_-_Man%C3%A1_ztpl6s.mp3",
        "poster": "https://res.cloudinary.com/dcqr7yd84/image/upload/v1746932701/Mariposa_Traicionera_vrmty8.jpg",
        "video": `<iframe width="560" height="315" src="https://www.youtube.com/embed/av3wkasS-WQ?si=2hhUlBVOV0EdTWuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
   
}

const tagPoster = document.querySelector(".reproductor-poster-img")
const tagNombreCancion = document.querySelector(".reproductor-nombre-cancion")
const player = document.querySelector("#player")

const contentVideo = document.querySelector(".reproductor-content-video")

const changeMusic = (e) => {
    console.log(e)
    let nombreCancion = e.querySelector("h3").textContent
    tagNombreCancion.textContent = nombreCancion
    tagPoster.src = canciones[nombreCancion].poster

    player.src = canciones[nombreCancion].direccion
    player.play()
    contentVideo.replaceChildren()
    contentVideo.insertAdjacentHTML('beforeend', canciones[nombreCancion].video)
}



