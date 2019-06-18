const URL = "http://localhost:8088/packItems"

export default {
  getJoin(id) {
    return fetch(`${URL}/${id}`).then(e => e.json())
  },
  getJoinByPackId(packId) {
    return fetch(`${URL}?packId=${packId}`).then(e => e.json())
  },
  getAllJoins() {
    return fetch(`${URL}`).then(e => e.json())
  },
  deleteJoin(id) {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  addJoin(obj) {
    return fetch(`${URL}/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editJoin(editedPack) {
    return fetch(`${URL}/${editedPack.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPack)
    }).then(data => data.json());
  }
}