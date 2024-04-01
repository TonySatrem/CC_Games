export function getTodayDate() {
    return new Date()
}

export function getYesterdayDate () {
    return ( d => new Date(d.setDate(d.getDate()-1)) )(new Date)
}