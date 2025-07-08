import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Transaksi from '../pages/Transaksi.vue'
import Kategori from '../pages/Kategori.vue'
import Laporan from '../pages/Laporan.vue'
import Profil from '../pages/Profil.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/transaksi', name: 'Transaksi', component: Transaksi },
  { path: '/kategori', name: 'Kategori', component: Kategori },
  { path: '/laporan', name: 'Laporan', component: Laporan },
  { path: '/profil', name: 'Profil', component: Profil },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
