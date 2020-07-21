const landmarkCollection = [

    {
title: "Neuschwanstein Castle",
image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F04%2F01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417.jpg",
description: ""
    },

    {
title: "Brandenburg Gate",
image: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTc4ODAwMjUyNTYy/brandenburg-gate-a-brief-historys-featured-photo.jpg",   
description: ""
    },

    {
title: "Cologne Castle",
image: "https://historiceuropeancastles.com/wp-content/uploads/2019/12/Eltz-Castle-1024x675.jpg",
description: ""
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}