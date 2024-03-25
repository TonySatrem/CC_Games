import needle from "needle"

export async function get(url) {
    return (await needle('get', url))
        .body
}


export function resolveUrl(root, urn) {
    const resolvedUrl = new URL(urn, new URL(root, 'resolve://'));

    if (resolvedUrl.protocol === 'resolve:') {
        const { pathname, search, hash } = resolvedUrl;
        return pathname + search + hash;
      }
   
    return resolvedUrl.toString();
}

export function replaceDateInUrl(url, date) {
    const toString = d => d < 10 ? `0${d}` : `${d}` 
    return url
        .replace("{year}", date.getFullYear().toString())
        .replace("{month}", toString(date.getMonth() + 1))
        .replace("{date}", toString(date.getDate()))
}
