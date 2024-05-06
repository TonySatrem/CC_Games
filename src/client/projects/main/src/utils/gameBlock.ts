import { IGameBlock } from "../app/models/IGameBlock";

export default function GameBlock(game: IGameBlock) {
    const playButton = document.querySelector("#x-games-play-button-" + game.id)
    
    playButton?.addEventListener('click', (e) => {
        e.preventDefault()

        const main = document.querySelector('main')
        const bc = window.getComputedStyle(document.querySelector('.x-main-container')!).backgroundColor

        main!.innerHTML = getElement(game, bc).outerHTML || ""
        
        const footer = document.querySelector("footer")
        footer?.classList.add("hidden")

        const returnButton = document.querySelector('.x-sidebar-button')
        
        returnButton?.addEventListener('click', (e) => {
            e.preventDefault()
        
            document.location.href = "/"
        }, {once: true})
    })
}

function getElement(game: IGameBlock, bc: string | undefined) : HTMLElement {
    const div = document.createElement('div')

    div.classList.add("w-[100vw]", "h-[100vh]", "px-[2vw]", "py-[2vh]")
    div.style.backgroundColor = bc || ""

    // const iframe = 

    return div
}