<script setup>
import { ref, onMounted } from 'vue'
import { useTransaksiStore } from '../stores/transaksiStore'

const store = useTransaksiStore()

onMounted(() => {
  store.fetchTransaksi()
})

const form = ref({
  tanggal: '',
  tipe: 'Pemasukan',
  kategori: '',
  jumlah: null
})

const tambah = async () => {
  if (!form.value.tanggal || !form.value.kategori || !form.value.jumlah) return

  if (isEdit.value) {
    await store.updateTransaksi(editId.value, { ...form.value, id: editId.value })
    isEdit.value = false
    editId.value = null
  } else {
    await store.tambahTransaksi({ ...form.value })
  }

  await store.fetchTransaksi()

  form.value = {
    tanggal: '',
    tipe: 'Pemasukan',
    kategori: '',
    jumlah: null
  }
}


const isEdit = ref(false)
const editId = ref(null)

const mulaiEdit = (item) => {
  isEdit.value = true
  editId.value = item.id
  form.value = { ...item }
}

const batalEdit = () => {
  isEdit.value = false
  editId.value = null
  form.value = {
    tanggal: '',
    tipe: 'Pemasukan',
    kategori: '',
    jumlah: null
  }
}

const hapus = async (id) => {
  await store.hapusTransaksi(id)
}

</script>


<template>
  <div>
    <h1>Daftar Transaksi</h1>
    <div class="form-container">
    <form @submit.prevent="tambah">
      <div>
        <label>Tanggal:</label>
        <input type="date" v-model="form.tanggal" required />
      </div>
      <div>
        <label>Tipe:</label>
        <select v-model="form.tipe" required>
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
      </div>
      <div>
        <label>Kategori:</label>
        <input type="text" v-model="form.kategori" required />
      </div>
      <div>
        <label>Jumlah:</label>
        <input type="number" v-model.number="form.jumlah" required />
      </div>
      <div style="display: flex; gap: 10px;">
        <button type="submit">
          {{ isEdit ? 'Simpan Perubahan' : 'Tambah Transaksi' }}
        </button>

        <button type="button" v-if="isEdit" @click="batalEdit">Batal</button>        
      </div>
    </form>
    </div>

    <hr />

    <table>
        <thead>
            <tr>
                <th>Tanggal</th>
                <th>Tipe</th>
                <th>Kategori</th>
                <th>Jumlah</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in store.transaksi" :key="item.id">
                <td>{{ item.tanggal }}</td>
                <td>{{ item.tipe }}</td>
                <td>{{ item.kategori }}</td>
                <td>Rp {{ item.jumlah.toLocaleString() }}</td>
                <td>
                  <div class="aksi-button">
                    <button class="icon-btn edit" @click="mulaiEdit(item)" title="Edit">
                      <img src="../assets/pencil.svg" alt="Edit" />
                    </button>
                    <button class="icon-btn delete" @click="hapus(item.id)" title="Hapus">
                      <img src="../assets/trash.svg" alt="Hapus" />
                    </button>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style scoped>

button {
  background-color: #398b70;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #244037;
}

form {
  margin: 0 auto;
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

form > div {
  margin-bottom: 12px;
}

form label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
}

form input,
form select {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

form button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #3e8e7e;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

form button:hover {
  background-color: #244037;
}

table {
  width: 95%;
  margin: 1rem auto;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
}

th, td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f0f5f5;
}

.aksi-button {
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
}

.icon-btn {
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.icon-btn img {
  width: 20px;
  height: 20px;
}

.icon-btn.edit:hover {
  background-color: rgba(57, 139, 112, 0.15);
}

.icon-btn.delete:hover {
  background-color: rgba(255, 0, 0, 0.12);
}

.icon-btn:hover img {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

</style>
