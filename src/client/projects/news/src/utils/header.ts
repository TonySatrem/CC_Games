export default function header() {
    const returnButton = document.querySelector('.x-return-button')

    returnButton?.addEventListener('click', (e) => {
        e.preventDefault()
        document.location.href = "/"
    })

    const body = document.body
    const themeButton = document.querySelector('.x-theme-button')
    const themeIcon = document.querySelector('.x-theme-icon')

    themeButton?.addEventListener('click', (e) => {
        const currentTheme = body!.getAttribute('class')
    
        localStorage.setItem('theme', currentTheme!)

        themeToggle(currentTheme)
    })

    window.addEventListener('load', () => {
        themeToggle(localStorage.getItem('theme'))
    })

    function themeToggle(theme: string | null): void {
        const darkTheme = 'theme-dark'
        const lightTheme = 'theme-light'
        const darkIcon = "../assets/general/darkTheme.png"
        const lightIcon = "../assets/general/lightTheme.png"
    
        if (theme == lightTheme) {
            body!.setAttribute('class', darkTheme)
            themeIcon!.setAttribute('src', lightIcon)
        } else {
            body!.setAttribute('class', lightTheme)
            themeIcon!.setAttribute('src', darkIcon)
        }
    }
}