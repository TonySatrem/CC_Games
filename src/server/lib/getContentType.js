import mimeTypes from "./enums/mimeTypes.js"

export default function getContentType (path) {
    const ext = path.split('.').at(-1)
    return mimeTypes[ext]
}