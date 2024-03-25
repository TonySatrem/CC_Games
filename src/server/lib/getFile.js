import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from "node:fs"

export const _dirname = dirname(fileURLToPath(import.meta.url)).slice(0, -10).replace(/\\/g, '\/')

export const getFileLink = url => `${_dirname}client/out${url}`

export function getFileLinkIndex (req) {
    const urn = getUrn(req)
    const projectPath = getProjectPath(urn)
    return getFileLink(`/${projectPath}/index.html`)
}

export function getFileLinkReq (req) { 
    const referer = getReferer(req)
    const projectPath = getProjectPath(referer)
    return getFileLink(`/${projectPath}/${req.url}`)
}

export function getFile (obj) {
    const path = obj.isIndex ? getFileLinkIndex(obj.req) :
                obj.url ? getFileLink(obj.url) : 
                obj.req ? getFileLinkReq(obj.req) : 
                "Not Found"

    return {
        file: fs.readFileSync(path, "utf-8"),
        path
    }
}

function getProjectPath (s) {
    const projectPath = !s || s === '' || s.includes('.') ? 'main' : s
    return projectPath
}

function getUrn (req) {
    const urn = req.url.split('/').at(-1)
    return urn
}

function getReferer (req) {
    const ref = req.headers.referer?.split('/')?.at(-1)
    return ref
} 