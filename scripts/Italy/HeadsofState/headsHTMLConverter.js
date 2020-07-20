export const headsHTML = (headsObj) => {
      return `<section class="heads card">
      <div class="heads__title">${headsObj.title}</div>
      <div><img class="heads__image image--card" src="${headsObj.image}"/></div>
      <div class="heads__description">${headsObj.description}</div>
    </section>`
    }    