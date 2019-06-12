const URL = "http://localhost:8088/packs"

export default {
  getPack (id) {
    return fetch(`${URL}/${id}`).then(e => e.json())
  },
    getAllPacks () {
      return fetch(`${URL}`).then(e => e.json())
    },
    deletePack (id) {
      return fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(e => e.json())
    },
    addPack (obj) {
      return fetch(`${URL}/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(e => e.json())
    },
    editPack (editedPack) {
      return fetch(`${URL}/${editedPack.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedPack)
      }).then(data => data.json());
    }
}