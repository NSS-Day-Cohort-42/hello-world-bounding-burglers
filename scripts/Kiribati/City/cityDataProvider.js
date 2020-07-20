const cityCollection = [

    {
title: "Betio Village",
image: "./Images/Kiribati/Cities/BetioVillage.jpg",
description: "Betio Village is a place."
    },

    {
title: "Bikenibeu",
image: "./Images/Kiribati/Cities/Bikenibeu.jpg",   
description: "Bikenibeu is a place."
    },

    {
title: "South Tarawa",
image: "./Images/Kiribati/Cities/SouthTarawa.jpg",
description: "South Tarawa is a place"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}