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
  mutations: {},
  actions: {},
  modules: {}
})