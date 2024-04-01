export default class NewsData {
    
    constructor (obj) {
        this.link = obj.link,
        this.header = obj.header
        this.announcement = obj.announcement
        this.imgUrl = obj.imgUrl
        this.text = obj.text
        this.date = obj.date
        this.author = obj.author
    }
}