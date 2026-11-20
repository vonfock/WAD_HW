<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.city }} - {{ post.country }}</h3>
      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>