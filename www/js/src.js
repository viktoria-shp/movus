console.log('im work');
var menu = document.querySelector('.main-navigation')
var menuOpener = document.querySelector('.menu-opener')

console.log(menu,menuOpener)
 menuOpener.addEventListener('click',function () {
  console.log(menu,menu.classList)
 menu.classList.toggle('is-opened')
 })
