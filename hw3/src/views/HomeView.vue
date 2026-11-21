<template>
  <div class="home">
    <PostCard v-for="post in posts" :key="post.id" :id="post.id" />
    <button type="button" @click="resetLikes">Reset Likes</button>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'HomeView',
  components: {
    PostCard
  },
  methods: {
    resetLikes() {
      this.$store.commit('resetLikes')
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>