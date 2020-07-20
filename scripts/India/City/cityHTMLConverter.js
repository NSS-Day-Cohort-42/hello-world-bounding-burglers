export const cityHTML = (cityObj) => {
      return `<section class="city">
      <div class="city__title">${cityObj.title}</div>
      <div><img class="city__image" src="${cityObj.image}" /></div>
      <div class="city__description">${cityObj.description}</div>
    </section>`
    }