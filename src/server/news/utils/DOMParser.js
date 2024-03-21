import * as cheerio from "cheerio"
import { parse } from 'node-html-parser'

export function getLinks(body, selector) {
    const $ = cheerio.load(body)

    const links = []

    $(selector).each((i, e) =>
        links
            .push(e.attribs.onclick || e.attribs.href || e.attribs.src)
    )

    return links
} 

export function getTag(body, selector) {
    return cheerio
        .load(body)
        (selector)
}

export function getTagText(body, selector) {
    return getTag(body, selector)
        .text()
        .trim()
}

export function getTagAttr(body, selector, attrName) {
    return getTag(body, selector)
        .attr(attrName)
}

export function getChildren(body) {
    return parse(body)
        .childNodes
}

export function getAllChildren(body) {
    const children = getChildren(body)

    if (children.length == 0)
        return
    
    const nodes = []

    nodes.concat(children)

    children
        .forEach(n => 
            getAllChildren(n.innerText))

    return nodes
}