const landmarkCollection = [

    {
title: "Siddhivinayak Temple",
image: "./Images/India/Siddhivinayak-Temple.jpg",

    },

    {
title: "The Red Fort",
image: "./Images/India/shutterstock-redfort1.webp",   

    },

    {
title: "Sri Padmanabhaswamy Temple",
image: "./Images/India/1tvm-aps-temple-28-1467108823.jpg"
    }   
]   

export const useLandmark = () => {
    return landmarkCollection.slice()
}