<template>
  <aside class="sidebar" :class="side">
    <h3>{{ title }}</h3>
    <slot>
      <p>Sidebar content</p>
    </slot>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    side: { type: String, default: 'left' },
    title: { type: String, default: 'Sidebar' }
  }
}
</script>

<style scoped>
.sidebar {
  width: 180px;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 15px;
  background-color: #eeeded;
  border-radius: 5px;
  text-align: left;
}

.sidebar h3 {
  margin-top: 0;
}

@media (max-width: 700px) {
  .sidebar {
    display: none;
  }
}
</style>
