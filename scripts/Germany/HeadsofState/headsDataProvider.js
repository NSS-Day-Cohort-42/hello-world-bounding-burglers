const headsCollection = [

    {
title: "President Frank-Walter Steinmeier",
image: "https://static.euronews.com/articles/stories/04/62/59/48/602x338_cmsv2_ceb18914-039b-5b25-9b5e-16564c8f6c3e-4625948.jpg",
description: ""
    },

    {
title: "Chancellor Angela Merkel",
image: "https://image.cnbcfm.com/api/v1/image/106455891-1584899967247gettyimages-1207965186.jpeg?v=1584900016&w=678&h=381",   
description: ""
    },

    {
title: "Vice Chancellor Olaf Scholz",
image: "https://www.filmfestivalcottbus.de/media/k2/items/cache/a2d776612246d598c744792a62711a11_XL.jpg",
description: ""
    }
]

export const useHeads = () => {
    return headsCollection.slice()
}