const landmarkCollection = [

    {
title: "Butaritari",
image: "./Images/Kiribati/Landmarks/Butaritari.jpg",
description: ""
    },

    {
title: "Christmas Island",
image: "./Images/Kiribati/Landmarks/ChristmasIsland.jpg",   
description: ""
    },

    {
title: "Tarawa Island",
description: "",
image: "./Images/Kiribati/Landmarks/TarawaAtoll.jpg"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}