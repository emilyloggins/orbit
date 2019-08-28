const URL = "https://transit.api.here.com/v3/" 

export default {
    getStations(lat, long, city) {
        return fetch(`${URL}stations/by_name.json?app_id=${process.env.REACT_APP_TransitId}&app_code=${process.env.REACT_APP_TransitCode}&center=${lat},${long}&name=${city}&max=6`).then(e => e.json())
    }
}
