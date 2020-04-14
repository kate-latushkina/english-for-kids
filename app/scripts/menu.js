module.exports = function menu() {
  const burgerButton = document.querySelector('.burger-button')
  const burgerNav = document.querySelector('#nav')

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-active')
    burgerNav.classList.toggle('burger-active')
    burgerNav.classList.toggle('shadow')
    // document.querySelector('body').classList.toggle('lock')
  })


  // document.addEventListener('click', (e) => {
  //   let isBurgerActive = document.querySelector('.burger-button').classList.contains('burger-active')
  //   if (isBurgerActive && e.target.tagName === 'A' || e.target.tagName === 'NAV') {
  //     document.querySelector('.burger-button').classList.remove('burger-active')
  //     document.querySelector('nav').classList.remove('burger-active')
  //     burgerNav.classList.remove('shadow')
  //     document.querySelector('.logo').classList.remove('logo-burger')
  //     document.querySelector('body').classList.remove('lock')
  //   }
  // }, true)
}
