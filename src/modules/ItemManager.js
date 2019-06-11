const URL = "http://localhost:8088"

export default {
    getAllItems () {
      return fetch(`${URL}/items`).then(e => e.json())
    }
}