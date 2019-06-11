const URL = "http://localhost:8088"

export default {
    getAllPacks () {
      return fetch(`${URL}/packs`).then(e => e.json())
    }
}