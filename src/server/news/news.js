import * as Sites from "./utils/sites.js"
import ixbtGamesGetData from "./modules/ixbtGamesModule.js";

export default async function getDailyNews() {
    const data = []

    const sites = Sites.getSites();

    for (const site of sites) {
        const name = site.name

        switch (name) {
            case "ixbt.games": 
                (await ixbtGamesGetData()).forEach(d => data.push(d))
        }
    }

    return data;
}