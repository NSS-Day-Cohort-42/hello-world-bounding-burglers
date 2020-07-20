const cityCollection = [

    {
title: "Mumbai",
image: "Images/India/Mumbai_skyline_BWSL.jpg",
description: "Mumbai is the commercial capital of India. It is also known as the city that never sleeps. Mumbai is the perfect blend of culture, customs and lifestyles. Mumbai is India's most cosmopolitan city, its financial powerhouse and the nerve center of India's fashion industry."
    },

    {
title: "New Delhi",
image: "Images/India/Gateway_of_India.jpg",   
description: "New Delhi, national capital of India. It is situated in the north-central part of the country on the west bank of the Yamuna River, adjacent to and just south of Delhi city (Old Delhi) and within the Delhi national capital territory."
    },

    {
title: "Trivandrum",
image: "Images/India/kerala.jpg",
description: "Trivandrum. Formerly known as Trivandrum, Thiruvananthapuram is the capital of the southern Indian state of Kerala. It's the gateway to the beautiful tourist attractions of the God's Own Country. The charming town serves as the getaway to beaches, lush hills, backwaters, wildlife sanctuaries and islands.",
    }
]

export const useCity = () => {
    return cityCollection.slice()
}