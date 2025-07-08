import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '../api/api'

export const useTransaksiStore = defineStore('transaksi', () => {
  const transaksi = ref([])

  const fetchTransaksi = async () => {
    try {
      const res = await api.get('/transaksi')
      transaksi.value = res.data
    } catch (err) {
      console.error('Gagal ambil data:', err)
    }
  }

  const tambahTransaksi = async (dataBaru) => {
    try {
      const res = await api.post('/transaksi', dataBaru)
      transaksi.value.push(res.data)
    } catch (err) {
      console.error('Gagal tambah data:', err)
    }
  }

  const updateTransaksi = async (id, dataBaru) => {
    try {
      const res = await api.put(`/transaksi/${id}`, dataBaru)
      const index = transaksi.value.findIndex(t => t.id === id)
      if (index !== -1) {
        transaksi.value[index] = res.data
      }
    } catch (err) {
      console.error('Gagal update data:', err)
    }
  }

  const hapusTransaksi = async (id) => {
    try {
      await api.delete(`/transaksi/${id}`)
      transaksi.value = transaksi.value.filter(item => item.id !== id)
    } catch (err) {
      console.error('Gagal hapus data:', err)
    }
  }

  return {
    transaksi,
    fetchTransaksi,
    tambahTransaksi,
    updateTransaksi, // pastikan ini ADA
    hapusTransaksi
  }
})
