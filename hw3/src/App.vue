<template>
  <AppHeader />
  <div class="layout">
    <AppSidebar side="left" title="Menu" />
    <main>
      <router-view />
    </main>
    <AppSidebar side="right" title="Info" />
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSidebar
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  min-height: 100vh;      /* at least the full screen height */
  display: flex;
  flex-direction: column;
}

.layout {
  flex: 1;                /* takes up the free space, pushing the footer down */
  display: flex;
  gap: 15px;
  padding: 15px;
}

.layout main {
  flex: 1;
  min-width: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
} */
</style>