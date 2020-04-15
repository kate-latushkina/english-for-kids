const menu = require('./scripts/menu')
const cards = require('./scripts/cards')
const createCards = require('./scripts/createCards')

window.addEventListener('load', () => {
  menu()
  createCards(cards)
})

let clickNav = ''
const navID = {
  main: 0,
  actionA: 1,
  actionB: 2,
  animalA: 3,
  animalB: 4,
  clothes: 5,
  emotions: 6,
  food: 7,
  fruits: 8,
}

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'NAV') {
    clickNav = e.srcElement.hash.substring(1)
    // const pagesCards = document.querySelectorAll('.mainCards')
    const createImages = document.querySelectorAll('.mainCards img')
    const cardText = document.querySelectorAll('.mainCards p')
    for (const key in navID) {
      if (clickNav === key) {
        const pageTitle = document.querySelector('.main-title')
        pageTitle.innerHTML = cards.default[0][navID[clickNav] - 1].word
        for (let i = 0; i < cards.default[navID[clickNav]].length; i += 1) {
          createImages[i].classList.remove('main-card-pic')
          createImages[i].classList.add('card-pic')
          createImages[i].src = cards.default[navID[key]][i].image
          cardText[i].innerText = cards.default[navID[key]][i].word
        }
      }
    }
  }
}, true)


// Change train on play
const trainPlayButton = document.querySelector('.check')
trainPlayButton.onclick = () => {
  const cardColor = document.querySelectorAll('.mainCards')
  cardColor.forEach((e) => {
    if (e.classList.contains('cardsBG-train')) {
      e.classList.remove('cardsBG-train')
      e.classList.add('cardsBG-play')
    } else {
      e.classList.remove('cardsBG-play')
      e.classList.add('cardsBG-train')
    }
  })
}
