export const landmarkHTML = (landmarkObj) => {
      return `<section class="landmark card">
      <div class="landmark__title">${landmarkObj.title}</div>
       <div><img class="landmark__image" src="${landmarkObj.image}" /></div>
      <div class="landmark__description"></div>
    </section>`
    }    