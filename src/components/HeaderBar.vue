<script setup>
import { ref } from 'vue'

const currentDate = ref(new Date().toLocaleDateString('id-ID', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
}))
</script>

<template>
  <header class="header-bar">
    <div class="user-info">
      <img src="../assets/profilep.jpg" alt="User Avatar" class="avatar" />
      <span class="username">Hi, Verdian</span>
    </div>
    <div class="today-date">{{ currentDate }}</div>
  </header>
</template>


<style scoped>
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #398b70;
}

.username {
  font-weight: 600;
  color: #398b70;
}

.today-date {
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
}
</style>
