const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
import axios from "axios";
export const state = () => ({
  items: []
});

export const getters = {
  items(state) {
    return state.items;
  }
};

export const actions = {
  async fetchItems({ commit }) {
    const response = await axios.get(`http://${host}:${port}/api/items`);
    commit("setItems", response.data);
  },
  async addItem({ commit }, name) {
    const response = await axios.post(`http://${host}:${port}/api/items`, {
      name
    });
    commit("newItem", response.data);
  },
  async deleteItem({ commit }, _id) {
    await axios.delete(`http://${host}:${port}/api/items/${_id}`);
    commit("removeItem", _id);
  },
  async updateItem({ commit }, updItem) {
    const response = await axios.put(
      `http://${host}:${port}/api/items/${updItem._id}`,
      updItem
    );
    commit("updateItem", response.data);
  }
};
export const mutations = {
  setItems: (state, items) => (state.items = items),
  newItem: (state, item) => state.items.unshift(item),
  removeItem: (state, _id) =>
    (state.items = state.items.filter(item => item._id !== _id)),
  updateItem: (state, updItem) => {
    const index = state.items.findIndex(item => item._id == updItem._id);
    if (index !== -1) {
      state.items.splice(index, 1, updItem);
    }
  }
};
