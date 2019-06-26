import { GeocodeKey } from "../Keys"

const URL = "https://maps.googleapis.com/maps/api/geocode/json"

export default {
    getGeocode(city, state) {
        return fetch(`${URL}?address=${city},+${state}&key=${GeocodeKey}`).then(e => e.json())
    }
}