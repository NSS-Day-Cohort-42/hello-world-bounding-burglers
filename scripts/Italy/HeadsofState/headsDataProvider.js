const headsCollection = [

    {
title: "President: Sergio Mattarella",
image: "./Images/Italy/italyPresident.jpg",
description: ""
    },

    {
title: "Prime Minister: Giuseppe Conte",
image: "./Images/Italy/italyPrimeminister.jpg",   
description: ""
    },

    {
title: "Senate President: Maria Elisabetta Alberti Casellati",
description: "",
image: "./Images/Italy/italySenatePres.jpg"
    }
]

export const useHeads = () => {
    return headsCollection.slice()
}