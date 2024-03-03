const sidebarToggleButtons = document.querySelectorAll('.x-sidebar-button')
const sidebar = document.querySelector('.x-sidebar-container')

const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

const themeButton = document.querySelector('.x-theme-button')
const themeLink = document.querySelector('.x-theme-link')
const themeIcon = document.querySelector('.x-theme-icon')

const darkTheme = '../styles/darkTheme.css'
const lightTheme = '../styles/lightTheme.css'
const darkIcon = "../assets/general/darkTheme.png"
const lightIcon = "../assets/general/lightTheme.png"

sidebarToggleButtons.forEach(
  button => button.addEventListener('click', sidebarToggle)
)

themeButton.addEventListener('click', (event) => {
  event.preventDefault()
  
  const currentTheme = themeLink.getAttribute('href')
  
  localStorage.setItem('theme', currentTheme)

  themeToggle(currentTheme)
  sidebarToggle(event)
})

window.addEventListener('load', () => {
  themeToggle(localStorage.getItem('theme'))
})

function themeToggle (theme) {
  if (theme == lightTheme) {
    themeLink.setAttribute('href', darkTheme)
    themeIcon.setAttribute('src', lightIcon)
  } else {
    themeLink.setAttribute('href', lightTheme)
    themeIcon.setAttribute('src', darkIcon)
  }
}

function sidebarToggle (event) {
  event.preventDefault()
  
  sidebar.classList.toggle('active')
  main.classList.toggle('blur-sm')
  footer.classList.toggle('blur-sm')

  if (sidebar.classList.contains('active')) {
    main.addEventListener('click', sidebarToggle, { once: true })
  }
}