import * as http from "../utils/http.js"
import * as sites from "../utils/sites.js"
import * as parser from "../utils/DOMParser.js"
import NewsData from "../models/newsData.js"
import htmlElementAttributes from "../enums/htmlElementAttributes.js"

const name = "ixbt.games"
const config = sites.getSite(name)

export default async function ixbtGamesGetData (date) {
    const url = sites.getSiteUrl(name, date)

    const mainBody = await http.get(url)

    const links = parser
        .getLinks(mainBody, config.mainSelector)
        .map(link => 
            http.resolveUrl(
                config.rootUrl, 
                link.slice(config.linkStartIndex, config.linkEndIndex)))
    
    const data = [];
    const responses = links.map(link => http.get(link))
    
    await Promise.all(responses)
        .then(responses => 
                responses.forEach( body => {

                    const link = links[responses.indexOf(body)]
                    const header = parser.getTagText(body, config.headerSelector)
                    const announcement = parser.getTagText(body, config.announcementSelector)
                    const imgUrl = parser.getTagAttr(body, config.imgSelector, htmlElementAttributes.src)
                    const text = parser.getTagText(body, config.textSelector)
                    const date = parser.getTagText(body, config.dateSelector)
                    const authorTag = parser.getTag(body, config.authorSelector)
                    const authorName = authorTag.attr(htmlElementAttributes.title)
                    const authorLink = authorTag.attr(htmlElementAttributes.href)
                    
                    data.push(new NewsData(
                        link,
                        header,
                        announcement,
                        imgUrl,
                        text,
                        date,
                        {
                            name: authorName,
                            link: authorLink
                        }
                    ))
                }
            )
        )
        
    return data
}