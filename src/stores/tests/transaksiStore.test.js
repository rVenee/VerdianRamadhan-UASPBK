import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTransaksiStore } from '../transaksiStore'

// Mock axios
vi.mock('../api/api', () => ({
  default: {
    post: vi.fn().mockResolvedValue({ data: {
      id: 99,
      tanggal: '2025-07-10',
      tipe: 'Pemasukan',
      kategori: 'Bonus',
      jumlah: 250000
    }}),
    get: vi.fn().mockResolvedValue({ data: [] }),
    delete: vi.fn().mockResolvedValue({})
  }
}))

describe('transaksiStore', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTransaksiStore()
  })

  it('menambahkan transaksi baru ke state', async () => {
    const dataBaru = {
      tanggal: '2025-07-10',
      tipe: 'Pemasukan',
      kategori: 'Bonus',
      jumlah: 250000
    }

    await store.tambahTransaksi(dataBaru)

    expect(store.transaksi.length).toBe(1)
    expect(store.transaksi[0].kategori).toBe('Bonus')
    expect(store.transaksi[0].jumlah).toBe(250000)
  })
})