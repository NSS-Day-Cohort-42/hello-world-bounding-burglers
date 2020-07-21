const landmarkCollection = [

    {
title: "Butaritari",
image: "./Images/Kiribati/Landmarks/Butaritari.jpg",
description: "This is the place"
    },

    {
title: "Christmas Island",
image: "./Images/Kiribati/Landmarks/ChristmasIsland.jpg",   
description: "No this is"
    },

    {
title: "Tarawa Island",
description: "Description",
image: "./Images/Kiribati/Landmarks/TarawaAtoll.jpg"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}