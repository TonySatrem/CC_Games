import config from "../sitesConfiguration.js"
import * as http from "../utils/http.js"

const sites = config.sites;

export function getSite(name) {
    return sites.find(s => s.name == name)
}

export function getSites() {
    return sites
}

export function getSiteUrl(name, date) {
    const site = getSite(name)

    return site.getByDateUrl 
        ? http.resolveUrl(
            site.rootUrl, 
            http.replaceDateInUrl(site.getByDateUrl, date)) 
        : site.rootUrl
}

export function getSitesUrls(date) {
    return sites.map(s => getSiteUrl(s.name, date))
}