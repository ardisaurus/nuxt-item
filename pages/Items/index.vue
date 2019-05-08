<template>
  <div>
    <AddItem></AddItem>
    <Item></Item>
  </div>
</template>

<script>
import Item from "../../components/Item";
import AddItem from "../../components/AddItem";
export default {
  components: { Item, AddItem },
  head() {
    return {
      title: "Items",
      meta: {
        hid: "description",
        name: "description",
        content: "Simple CRUD"
      }
    };
  }
};
</script>

<style>
</style>
