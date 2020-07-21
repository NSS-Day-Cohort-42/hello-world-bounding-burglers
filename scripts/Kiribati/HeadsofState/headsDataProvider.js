const headsCollection = [

    {
title: "Ambassador Toburoro Tito",
image: "./Images/Kiribati/HeadsOfState/AmbassadorToburoroTito.png",
description: ""
    },

    {
title: "President Taneti Maamu",
image: "./Images/Kiribati/HeadsOfState/PresidentTanetiMaamau.jpg",   
description: ""
    },

    {
title: "Vice President Teuea Toatu",
image: "./Images/Kiribati/HeadsOfState/VicePresidentTeueaToatu.jpg",
description: ""
    }
]

export const useHeads = () => {
    return headsCollection.slice()
}