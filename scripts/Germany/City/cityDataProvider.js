const cityCollection = [

    {
title: "Berlin",
image: "https://img.jaywaytravel.com/destinations/berlin/gallery/berlin-skyline-tv-tower-river-spree.jpg?width=2100&height=900&format=png&sharp=0.5",
description: ""
    },

    {
title: "Hamburg",
image: "https://imageresizer.static9.net.au/DPACM4x0gJG2k-ed8xZjY0KdmSU=/1200x900/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F05%2F01%2F14%2F54%2F1_speicherstadt_thumb.jpg",   
description: ""
    },

    {
title: "Munich",
image: "https://www.studying-in-germany.org/wp-content/uploads/2018/03/Munich.jpg",
description: ""
    }
]

export const useCity = () => {
    return cityCollection.slice()
}