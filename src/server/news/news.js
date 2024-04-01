import shedule from "node-schedule"
import * as Sites from "./utils/sites.js"
import * as ixbt from "./modules/ixbtGamesModule.js";

let news = UpdateDailyNews();

export default async function getDailyNews() {
    return news;
}

// updates every hour
shedule.scheduleJob("0 * * * *", () => news = UpdateDailyNews())

async function UpdateDailyNews() {
    const data = []

    const sites = Sites.getSites();

    for (const site of sites) {
        const name = site.name

        switch (name) {
            case ixbt.name: 
                (await ixbt.getData()).forEach(d => data.push(d))
        }
    }

    return data;
}