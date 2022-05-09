window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  //activateMenuAtCurrentSection(depositions)
}
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
function showNavOnScroll() {
  if (window.scrollY > 0) {
    document.querySelector('#navigation').classList.add('scroll')
  } else {
    document.querySelector('#navigation').classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (window.scrollY > 500) {
    document.querySelector('#backToTopButton').classList.add('show')
  } else {
    document.querySelector('#backToTopButton').classList.remove('show')
  }
}
function openMenu() {
  document.querySelector('body').classList.add('menu-expanded')
}
function closeMenu() {
  document.querySelector('body').classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content,
    footer,
    footer p,
    footer .social-links`)
