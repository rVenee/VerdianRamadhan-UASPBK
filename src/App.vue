<script setup>
import Sidebar from './components/Sidebar.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <div class="app-layout">
    <Sidebar />
    <div class="main-content">
      <HeaderBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  background-color: #f5f7fa;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
