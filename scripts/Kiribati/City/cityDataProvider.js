const cityCollection = [

    {
title: "Betio Village",
image: "./Images/Kiribati/Cities/BetioVillage.jpg",
description: ""
    },

    {
title: "Bikenibeu",
image: "./Images/Kiribati/Cities/Bikenibeu.jpg",   
description: ""
    },

    {
title: "South Tarawa",
image: "./Images/Kiribati/Cities/SouthTarawa.jpg",
description: ""
    }
]

export const useCity = () => {
    return cityCollection.slice()
}