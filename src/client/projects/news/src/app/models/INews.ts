export interface INews{
    header : string,
    announcement : string,
    imgUrl : string,
    text : string,
    date : string,
    author : {
        link: string,
        name: string
    },
    link : {
        domain: string,
        url: string
    },
    colors: void | {
        outerBC: string,
        innerBC: string
    },
    id: number | undefined
}