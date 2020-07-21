export const headsHTML = (headsObj) => {
      return `<section class="heads__card">
      <div class="heads__name">${headsObj.title}</div>
      <div><img class="heads__image image--card" src="${headsObj.image}"/></div>
      <div class="heads__description">${headsObj.description}</div>
    </section>`
    }    