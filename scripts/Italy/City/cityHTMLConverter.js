export const cityHTML = (cityObj) => {
      return `<section class="city card">
      <div class="city__title">${cityObj.title}</div>
      <div><img class="city__image image--card" src="${cityObj.image}"/></div>
      <div class="city__description">${cityObj.description}</div>
    </section>`
    }    