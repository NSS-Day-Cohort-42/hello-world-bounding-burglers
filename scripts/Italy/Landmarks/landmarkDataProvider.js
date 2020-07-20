const landmarkCollection = [

    {
title: "Coliseum",
image: "./Images/Italy/coliseum.jpg",
description: ""
    },

    {
title: "Pantheon",
image: "./Images/Italy/pantheon.jpeg",   
description: ""
    },

    {
title: "Leaning Tower of Pisa",
description: "",
image: "./Images/Italy/ltpisa.jpg"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}