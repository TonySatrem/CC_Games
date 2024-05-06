import { IGameBlock } from "../app/models/IGameBlock";

export default function GameBlock(game: IGameBlock) {
    const playButton = document.querySelector("#x-games-play-button-" + game.id)
    
    playButton?.addEventListener('click', (e) => {
        e.preventDefault()

        const main = document.querySelector('main')
        const bc = window.getComputedStyle(document.querySelector('.x-main-container')!).backgroundColor

        main!.innerHTML = getElement(game, bc).outerHTML

        const divId = "jsdosIframe-" + game.id
        const script = document.createElement('script')

        script.innerText=`
            Dos(document.getElementById('${divId}'), {
                url: '${game.jsDosCDN}',
            });
        `

        document.body!.appendChild(script)
        
        const footer = document.querySelector("footer")
        footer?.classList.add("hidden")

        const returnButton = document.querySelector('.x-sidebar-button')
        
        returnButton?.addEventListener('click', (e) => {
            e.preventDefault()
        
            document.location.href = "/"
        }, {once: true})
    })

    window.onload = () => {
        const iframe = document.getElementById("jsdosIframe-" + game.id);
        
        iframe?.focus()

        window.addEventListener("message", (e) => {
            if (e.data.message === "dz-player-exit") {
                iframe!.style.display = "none";
            }
        });
    };

}

function getElement(game: IGameBlock, bc: string | undefined) : HTMLElement {
    const div = document.createElement('div')

    div.classList.add("w-[100vw]", "h-[100vh]")
    div.style.backgroundColor = bc || ""

    const divDos = document.createElement('div')

    const divId = "jsdosIframe-" + game.id
    divDos.id = divId
    divDos.classList.add("w-full", "h-full")

    div.appendChild(divDos)

    return div
}