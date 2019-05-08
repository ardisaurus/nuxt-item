<template>
  <div>
    <h1>Hello</h1>
    <p>
      <nuxt-link to="/items">Items</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome",
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
