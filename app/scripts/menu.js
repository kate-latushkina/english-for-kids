module.exports = function menu() {
  const burgerButton = document.querySelector('.burger-button')
  const burgerNav = document.querySelector('#nav')
  const burgerMenu = document.querySelector('.burger_menu')

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-active')
    burgerNav.classList.toggle('burger-active')
    burgerMenu.classList.toggle('active-menu')
  })


  // document.addEventListener('click', (e) => {
  // eslint-disable-next-line max-len
  //   let isBurgerActive = document.querySelector('.burger-button').classList.contains('burger-active')
  //   if (isBurgerActive && e.target.tagName === 'A' || e.target.tagName === 'NAV') {
  //     document.querySelector('.burger-button').classList.remove('burger-active')
  //     document.querySelector('nav').classList.remove('burger-active')
  //   }
  // }, true)
}
