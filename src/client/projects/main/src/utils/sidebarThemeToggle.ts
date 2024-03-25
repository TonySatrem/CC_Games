export default function sidebarThemeToggle () : void {
  const sidebarToggleButtons = document.querySelectorAll('.x-sidebar-button')
  const sidebar = document.querySelector('.x-sidebar-container')

  const body = document.body

  const main = document.getElementsByTagName('main')[0]
  const footer = document.getElementsByTagName('footer')[0]

  const themeButton = document.querySelector('.x-theme-button')
  const themeIcon = document.querySelector('.x-theme-icon')

  const darkTheme = 'theme-dark'
  const lightTheme = 'theme-light'
  const darkIcon = "../assets/general/darkTheme.png"
  const lightIcon = "../assets/general/lightTheme.png"

  sidebarToggleButtons.forEach(
    button => button.addEventListener('click', sidebarToggle)
  )

  themeButton!.addEventListener('click', (event) => {
    event.preventDefault()
    
    const currentTheme = body!.getAttribute('class')
    
    localStorage.setItem('theme', currentTheme!)

    themeToggle(currentTheme)
    sidebarToggle(event)
  })

  window.addEventListener('load', () => {
    themeToggle(localStorage.getItem('theme'))
  })

  function themeToggle (theme : string | null) : void {
    if (theme == lightTheme) {
      body!.setAttribute('class', darkTheme)
      themeIcon!.setAttribute('src', lightIcon)
    } else {
      body!.setAttribute('class', lightTheme)
      themeIcon!.setAttribute('src', darkIcon)
    }
  }

  function sidebarToggle (event : Event) : void {
    event.preventDefault()
    
    sidebar!.classList.toggle('active')
    main.classList.toggle('blur-sm')
    footer.classList.toggle('blur-sm')

    if (sidebar!.classList.contains('active')) {
      main.addEventListener('click', sidebarToggle, { once: true })
    }
  }
}