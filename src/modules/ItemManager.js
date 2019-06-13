
const URL = "http://localhost:8088/items"

export default {
  getItem (id) {
    return fetch(`${URL}/${id}`).then(e => e.json())
  },
    getAllItems () {
      return fetch(`${URL}`).then(e => e.json())
    },
    deleteItem (id) {
      return fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(e => e.json())
    },
    addItem (obj) {
      return fetch(`${URL}/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(e => e.json())
    },
    editItem (editedItem) {
      return fetch(`${URL}/${editedItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedItem)
      }).then(data => data.json());
    }
}