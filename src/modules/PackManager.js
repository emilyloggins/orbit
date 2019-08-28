const URL = process.env.NODE_ENV === 'production'
    ? "/api/packs"
    : "http://localhost:8088/api/packs";

export default {
  getPack (userId) {
    return fetch(`${URL}/?userId=${userId}`).then(e => e.json())
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
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedPack)
      }).then(data => data.json());
    }
}