export const landmarkHTML = (landmarkObj) => {
      return `<section class="landmark card">
      <div class="landmark__name">${landmarkObj.title}</div>
      <div><img class="landmark__image" src="${landmarkObj.image}" /></div>
      <div class="landmark__description">${landmarkObj.description}</div>
    </section>`
    }