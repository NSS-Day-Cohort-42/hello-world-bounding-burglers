const cityCollection = [

    {
title: "Mumbai",
image: "Images/India/Mumbai_skyline_BWSL.jpg",
description: ""
    },

    {
title: "New Delhi",
image: "Images/India/Gateway_of_India.jpg",   
description: ""
    },

    {
title: "Trivandrum",
image: "Images/India/kerala.jpg",
description: "",
    }
]

export const useCity = () => {
    return cityCollection.slice()
}