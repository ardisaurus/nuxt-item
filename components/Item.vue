<template>
  <div>
    <table>
      <caption>Items</caption>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td scope="row">{{ item._id }}</td>
          <td v-if="item._id!=markedId">{{ item.name }}</td>
          <td v-if="item._id==markedId">
            <input type="text" name="name" v-model="newData">
          </td>
          <td v-if="item._id!=markedId">
            <button @click="deleteItem(item._id)">Delete</button>
            <button @click="marking(item._id, item.name)">Edit</button>
          </td>
          <td v-if="item._id==markedId">
            <button @click="update">Save</button>
            <button @click="marking(item._id, item.name)">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Items",
  data() {
    return {
      markedId: "",
      newData: ""
    };
  },
  computed: mapGetters({
    items: "items/items"
  }),
  methods: {
    ...mapActions({
      fetchItems: "items/fetchItems",
      deleteItem: "items/deleteItem",
      updateItem: "items/updateItem"
    }),
    marking(_id, name) {
      if (this.markedId == _id) {
        this.markedId = "";
        this.newData = "";
      } else {
        this.markedId = _id;
        this.newData = name;
      }
    },
    update(e) {
      e.preventDefault();
      const updItem = {
        _id: this.markedId,
        name: this.newData
      };
      this.updateItem(updItem);
      this.markedId = "";
      this.newData = "";
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style>
table {
  width: 100%;
  margin: 10px auto;
}

caption {
  font-size: 1.6em;
  font-weight: 400;
  padding: 10px 0;
}

thead th {
  font-weight: 400;
  background: #41b883;
  color: #fff;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
}

tr:nth-child(even) {
  background: #e8eeef;
}

th,
td {
  text-align: left;
  padding: 20px;
  font-weight: 300;
}
</style>
