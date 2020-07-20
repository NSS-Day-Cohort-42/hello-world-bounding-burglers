const cityCollection = [

    {
title: "Rome",
image: "./Images/Italy/rome.jpeg",
description: ""
    },

    {
title: "Venice",
image: "./Images/Italy/venice.jpg",   
description: ""
    },

    {
title: "Milan",
description: "",
image: "./Images/Italy/milan.jpg"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}
