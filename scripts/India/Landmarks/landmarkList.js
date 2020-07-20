import {useLandmark} from "./landmarkDataProvider.js"
import {landmarkHTML} from "./landmarkHTMLConverter.js"

export const landmarkList = () => {
   
    const contentElement = document.querySelector(".big__container")

    const landmarks = useLandmark()

    let landmarkHTMLRepresentations = ""
    for(const currentLandmarkObj of landmarks){
        landmarkHTMLRepresentations += landmarkHTML(currentLandmarkObj)
    }

   
    contentElement.innerHTML += `
        <article class="landmarks">
             ${landmarkHTMLRepresentations}
        </article>
    `
}
