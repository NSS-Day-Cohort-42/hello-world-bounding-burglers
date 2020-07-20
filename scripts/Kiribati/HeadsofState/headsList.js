import {useHeads} from "./headsDataProvider.js"
import {headsHTML} from "./headsHTMLConverter.js"

export const headsList = () => {
   
    const contentElement = document.querySelector(".big__container")

    const heads = useHeads()

    let headsHTMLRepresentations = ""
    for(const currentHeadsObj of heads){
        headsHTMLRepresentations += headsHTML(currentHeadsObj)
    }

        contentElement.innerHTML += `
        <article class="heads">
             ${headsHTMLRepresentations}
        </article>
    `
}
