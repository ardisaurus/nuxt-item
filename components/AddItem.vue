<template>
  <div>
    <h3>Add Item</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="name" name="name" placeholder="Add Item...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddItem",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions({
      addItem: "items/addItem"
    }),
    onSubmit(e) {
      e.preventDefault();
      this.addItem(this.name);
      this.name = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
