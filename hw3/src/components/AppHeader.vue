<template>
  <header class="app-header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background-color: #c9c5c5;
  padding: 20px;
  border-radius: 5px;
}
</style>