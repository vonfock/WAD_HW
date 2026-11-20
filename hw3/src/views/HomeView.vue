<template>
  <div class="home">
    <PostCard v-for="post in posts" :key="post.id" :id="post.id" />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'HomeView',
  components: {
    PostCard
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>