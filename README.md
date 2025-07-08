# 💰 Vallet - Aplikasi Catatan Keuangan Pribadi

Aplikasi web sederhana untuk mencatat pemasukan dan pengeluaran pribadi. Dibuat menggunakan Vue 3, Pinia, Vue Router, json-server, dan Vitest.

---

## ✨ Fitur Utama

- **Dashboard**: Tampilan utama aplikasi.
- **Manajemen Transaksi**: Tambah, ubah, dan hapus transaksi pemasukan dan pengeluaran.
- **Kategori**: Halaman placeholder untuk klasifikasi transaksi (dapat dikembangkan lebih lanjut).
- **Laporan**: Halaman placeholder untuk menampilkan ringkasan keuangan.
- **Profil Pengguna**: Informasi pengguna aplikasi.

---

## 🧭 Struktur Navigasi

Aplikasi terdiri dari beberapa halaman:

- `/` → Dashboard
- `/transaksi` → Kelola Transaksi
- `/kategori` → Halaman Kategori
- `/laporan` → Laporan Keuangan
- `/profil` → Profil Pengguna

---

## 🛠️ Teknologi yang Digunakan

| Teknologi      | Deskripsi                        |
|----------------|----------------------------------|
| Vue 3          | Framework JavaScript Frontend    |
| Pinia          | State Management untuk Vue       |
| Vue Router     | Navigasi antar halaman           |
| Axios          | HTTP client                      |
| json-server    | Mock RESTful API                 |
| Vitest         | Unit testing tool                |
| Vite           | Build tool modern                |
| Vercel         | Hosting untuk frontend           |

---

## 🔌 Konsumsi API (json-server)

Aplikasi ini mengakses data transaksi secara **dinamis** menggunakan **axios** dan **json-server**.

- Endpoint: `http://localhost:3000/transaksi`
- Operasi:
  - GET — Ambil daftar transaksi
  - POST — Tambah transaksi baru
  - PUT — Ubah data transaksi
  - DELETE — Hapus transaksi

---

## 🗃️ Manajemen State (Pinia)

State manajemen menggunakan **Pinia** pada `stores/transaksiStore.js`:

- **State**: `transaksi` (array)
- **Actions**:
  - `fetchTransaksi()`
  - `tambahTransaksi(data)`
  - `updateTransaksi(id, data)`
  - `hapusTransaksi(id)`

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone repositori:
```bash
git clone https://github.com/username/vallet-app.git
cd vallet-app
```
### 2. Install depedency:
```bash
npm install
```

### 3. Jalankan backend (json-server):
```bash
npm run backend
```

### 4. Jalankan aplikasi:
```bash
npm run dev
```
---

## 🧪 Unit Testing

Aplikasi ini menggunakan **Vitest** untuk melakukan pengujian pada Pinia store:

- File: `transaksiStore.test.js`
- Dilakukan **mock axios**
- Menguji:
  - Penambahan data transaksi dan validasi state

### Cara Menjalankan Testing
```bash
npx vitest
```

---

## 📁 Struktur Folder Utama

src/
├── assets/            # Gambar/icon
├── components/        # Komponen UI global (Sidebar, Header)
├── pages/             # Halaman sesuai routing
├── router/            # File routing
├── stores/            # Pinia store
├── api/               # Axios instance
├── App.vue            # Root komponen
├── main.js            # Entry point

---

## 🌐 Deployment

Aplikasi ini telah di-deploy di Vercel.
Kamu bisa mengakses aplikasinya secara online di:

🔗 https://vallet-app.vercel.app

---

## 👨‍💻 Author

>   Verdian Ramadhan

>   Mata Kuliah: Pemrograman Berbasis Komponen