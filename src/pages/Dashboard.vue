<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>

    <div class="dashboard-header">
      <div class="dashboard-greeting">
        <h2 class="greeting">Halo, selamat datang kembali 👋</h2>
        <p class="subtext">Lihat ringkasan keuanganmu hari ini.</p>
      </div>
    </div>

    <div class="summary">
      <div>💼 Total Saldo: Rp {{ totalSaldo.toLocaleString() }}</div>
      <div>⬆️ Total Pemasukan: Rp {{ totalPemasukan.toLocaleString() }}</div>
      <div>⬇️ Total Pengeluaran: Rp {{ totalPengeluaran.toLocaleString() }}</div>
    </div>
  </div>
</template>


<script setup>
import { computed, onMounted } from 'vue'
import { useTransaksiStore } from '../stores/transaksiStore'

const store = useTransaksiStore()

onMounted(() => {
  store.fetchTransaksi()
})

// 💡 Gunakan computed agar otomatis update saat data berubah
const totalPemasukan = computed(() =>
  store.transaksi.filter(t => t.tipe === 'Pemasukan').reduce((acc, t) => acc + t.jumlah, 0)
)

const totalPengeluaran = computed(() =>
  store.transaksi.filter(t => t.tipe === 'Pengeluaran').reduce((acc, t) => acc + t.jumlah, 0)
)

const totalSaldo = computed(() => totalPemasukan.value - totalPengeluaran.value)
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

.dashboard-greeting {
  text-align: center;
  max-width: 400px;
}

.greeting {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #398b70;
}

.subtext {
  font-size: 1rem;
  color: #6b7280;
}

.summary {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.summary > div {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  background-color: #f4f6f9;
  color: #1f2937;
  border-left: 5px solid #3e8e7e;
}

.summary > div:nth-child(2) {
  border-left-color: #2e8b57;
  background-color: #e7f6ee;
}

.summary > div:nth-child(3) {
  border-left-color: #c0392b;
  background-color: #fdecea;
}
</style>
