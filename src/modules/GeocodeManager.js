const URL = "https://maps.googleapis.com/maps/api/geocode/json"

export default {
    getGeocode(city, state) {
        return fetch(`${URL}?address=${city},+${state}&key=${process.env.REACT_APP_GeocodeKey}`).then(e => e.json())
    }
}