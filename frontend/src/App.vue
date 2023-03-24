

<template>
  <div id="app">
    <nav>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/items" :id="'listOfItems'">List of Items</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'App',
};
</script>
