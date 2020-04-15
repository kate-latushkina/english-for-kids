module.exports = function createCards(cards) {
  const pageTitle = document.querySelector('.main-title')
  pageTitle.innerHTML = 'Main page'
  for (let i = 0; i < cards.default[0].length; i += 1) {
    const createCard = document.createElement('div')
    document.querySelector('main .container').appendChild(createCard)
    createCard.classList.add('kidsCard')
    createCard.classList.add('mainCards')
    createCard.classList.add('cardsBG-train')
    const createImages = document.createElement('img')
    createCard.appendChild(createImages)
    createImages.classList.add('main-card-pic')
    createImages.src = cards.default[0][i].image
    const cardText = document.createElement('p')
    createCard.appendChild(cardText)
    cardText.innerText = cards.default[0][i].word
    cardText.classList.add('card-text')
  }
}
