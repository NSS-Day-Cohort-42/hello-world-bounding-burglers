const headsCollection = [

    {
title: "uddhav thackeray",
image: "./Images/India/thackery.jpg",
description: ""
    },

    {
title: "Lt. Governor Anil Baijal",
image: "./Images/India/kerala gov.jpg",   
description: ""
    },

    {
title: "Pinarayi Vijaya",
description: "",
image: "./Images/India/kerala guy.jpg"
    }
]

export const useHeads = () => {
    return headsCollection.slice()
}