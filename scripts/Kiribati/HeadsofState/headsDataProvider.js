const headsCollection = [

    {
title: "Ambassador Toburoro Tito",
image: "./Images/Kiribati/HeadsOfState/AmbassadorToburoroTito.png",
description: "All hail"
    },

    {
title: "President Taneti Maamu",
image: "./Images/Kiribati/HeadsOfState/PresidentTanetiMaamau.jpg",   
description: "Hail Hail"
    },

    {
title: "Vice President Teuea Toatu",
image: "./Images/Kiribati/HeadsOfState/VicePresidentTeueaToatu.jpg",
description: "Check him out"
    }
]

export const useHeads = () => {
    return headsCollection.slice()
}