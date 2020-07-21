import { useCity } from "./cityDataProvider.js"
import { cityHTML } from "./cityHTMLConverter.js"

export const cityList = () => {
   
    const contentElement = document.querySelector(".big__container")

    const cities = useCity()

    let cityHTMLRepresentations = ""
    for(const currentCityObj of cities){
        cityHTMLRepresentations += cityHTML(currentCityObj)
    }

   
    contentElement.innerHTML += `
        <article class="cities">
             ${cityHTMLRepresentations}
        </article>
    `
}