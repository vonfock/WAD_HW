import { createStore } from 'vuex'
import posts from '../assets/posts.json'

// every post starts with 0 likes
for (let post of posts) {
  post.likes = 0
}

export default createStore({
  state: {
    posts: posts
  },
  getters: {},
  mutations: {
    increaseLike(state, id) {
        const post = state.posts.find(item => item.id === id)
        if (post) {
          post.likes++
        }
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0
      })
    }
  },
  actions: {},
  modules: {}
})