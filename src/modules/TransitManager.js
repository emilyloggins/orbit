import { TransitId, TransitCode } from'../Keys'

const URL = "https://transit.api.here.com/v3/" 

export default {
    getStations(lat, long, city) {
        return fetch(`stations/by_name.json?app_id=${TransitId}&app_code=${TransitCode}&center=${lat},${long}&name=${city}&max=3`)
    }
}