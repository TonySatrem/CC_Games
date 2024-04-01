import { INews } from "news/src/app/models/INews";

export default function newsBlock(news: INews) {
    const readButton = document.querySelector('#x-news-read-' + news.id)
    const mainHTML = document.querySelector('main')?.innerHTML

    readButton?.addEventListener('click', (e) => {
        e.preventDefault()
        
        document.querySelector('main')!.innerHTML = getElement(news).outerHTML || ""
    })

    let returnButton = document.querySelector('.x-return-button')
    
    returnButton?.addEventListener('click', (e) => {
        e.preventDefault()
    
        document.location.href = "/news"
    }, {once: true})
}

function getElement(news: INews): HTMLElement{
    const div = document.createElement("div")
    div.classList.add("x-news-content-container")
    
    const h = document.createElement("h2")
    h.innerText = news.header

    div.appendChild(h)

    const announcement = document.createElement("h4")
    announcement.innerText = news.announcement

    div.appendChild(announcement)

    const img = document.createElement("img")
    img.src = news.imgUrl

    div.appendChild(img)

    const p = document.createElement("p")
    p.innerText = news.text

    div.appendChild(p)

    const div1 = document.createElement("div")
    
    div1.innerHTML = 
        `
            <span>Источник: <a href="${news.link.url}">${news.link.domain}</a></span>
            <span>Автор: <a href="${news.author.link}">${news.author.name}</a></span>
            <span>Дата: <span>${news.date}</span></span>
        `

    div.appendChild(div1)

    return div
}