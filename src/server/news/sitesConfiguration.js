export default {
    sites: [
        {
            name: "ixbt.games",
            getDataFunction: "ixbtGamesGetData",
            rootUrl: "https://ixbt.games",
            getByDateUrl: "/news/{year}/{month}/{date}",
            
            mainSelector: "section.main-content .py-2 .card-image-background",
            headerSelector: "h1",
            announcementSelector: ".announce",
            imgSelector: ".glightbox .width-optimal.pub-cover",
            textSelector: ".publication-container p:not(:first), .publication-container li",
            dateSelector: ".pubdatetime .badge.badge-time",
            authorSelector: ".pr-2.text-secondary .text-secondary.d-flex.align-items-center",

            linkStartIndex: 15,
            linkEndIndex: -1,
        }
    ]
}