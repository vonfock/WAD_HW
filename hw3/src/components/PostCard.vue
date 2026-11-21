<template>
  <div class="post">
    <h3>{{ post.city }} - {{ post.country }}</h3>
    <p>{{ post.first_name }} {{ post.last_name }}, Age: {{ post.age }}, Sex: {{ post.sex }}</p>
    <p class="post-date">{{ post.created }}</p>
    <p>{{ post.text }}</p>
    <img :src="post.photo" alt="post photo">
    <button type="button" @click="likePost">
      Like
    </button>
    <span>{{ post.likes }} likes</span>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    id: Number
  },
  methods: {
    likePost() {
      this.$store.commit('increaseLike', this.id)
    }
  },
  computed: {
    post() {
      return this.$store.state.posts.find(p => p.id === this.id)
    }
  }
}
</script>

<style scoped>
.post {
  background-color: #ffffff;
  border: 1px solid #c9c5c5;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 20px auto;
  max-width: 500px;
}

button {
  margin-right: 8px;
  padding: 6px 12px;
  cursor: pointer;
}

.post img {
  width: 100%;
  border-radius: 5px;
}

.post-date {
  color: #666;
  font-style: italic;
}
</style>