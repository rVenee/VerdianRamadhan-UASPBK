<template>
  <aside class="sidebar">
    <h2 class="logo"> <img src="../assets/wallet.png">Vallet</h2>
      <router-link to="/" class="nav-item">
  <div class="nav-link">
    <img src="../assets/house.svg" class="icon" alt="">Dashboard
  </div>
</router-link>
<router-link to="/transaksi" class="nav-item">
  <div class="nav-link">
    <img src="../assets/banknote-arrow-down.svg" class="icon" alt="">Transaksi
  </div>
</router-link>
<router-link to="/kategori" class="nav-item">
  <div class="nav-link">
    <img src="../assets/layout-list.svg" class="icon" alt="">Kategori
  </div>
</router-link>
<router-link to="/laporan" class="nav-item">
  <div class="nav-link">
    <img src="../assets/book-open.svg" class="icon" alt="">Laporan
  </div>
</router-link>
<router-link to="/profil" class="nav-item">
  <div class="nav-link">
    <img src="../assets/user-round.svg" class="icon" alt="">Profil
  </div>
</router-link>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  border-right: 1px solid #e0e6ed;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.02);
}

.logo {
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #1f2937;
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.nav-item {
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #34495e;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: #398b70;
}

.nav-item .nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-item .icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(0%); /* hitam */
  transition: filter 0.3s ease;
}

.nav-item.router-link-active {
  color: #398b70;
  background-color: #e6f4ea;
  border-radius: 8px;
  padding: 8px 12px;
}

.nav-item.router-link-active .icon {
  filter: brightness(0) saturate(100%) invert(41%) sepia(28%) saturate(572%) hue-rotate(105deg) brightness(92%) contrast(85%);
}

</style>
