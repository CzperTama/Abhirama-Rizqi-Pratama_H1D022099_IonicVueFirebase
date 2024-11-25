# Vue Firebase Authentication
 
Nama        : Abhirama Rizqi Pratama  
Nim         : H1D022099  
Shift Lama  : D  
Shift Baru  : A 
 
## Tugas 9

### 1. Inisialisasi Firebase
Inisialisasi Firebase dengan konfigurasi yang sesuai di `src/utils/firebase.ts`:
- Konfigurasi Firebase SDK
- Inisialisasi aplikasi Firebase
- Setup layanan autentikasi

### 2. Membuat Store untuk Autentikasi
Buat store menggunakan Pinia di `src/stores/auth.ts` untuk:
- Mengelola status autentikasi pengguna
- Menyimpan data user
- Menangani proses login/logout

### 3. Implementasi Login Component
Implementasikan fitur login di `src/views/LoginPage.vue`:
- Tambahkan tombol login Google
- Hubungkan dengan fungsi `loginWithGoogle`
- Tangani callback setelah login berhasil

### 4. Menampilkan Data Pengguna
Akses dan tampilkan data pengguna di `src/views/ProfilePage.vue`:
- Username
- Foto profil
- Informasi akun lainnya

## Catatan Penting
⚠️ Pastikan untuk mengganti `YOUR_CLIENT_ID` dengan ID klien Google yang valid dari project Firebase Anda.

## Teknologi yang Digunakan
- Vue.js
- Firebase Authentication
- Pinia State Management
- TypeScript

# Screenshot
<div style="display: flex; justify-content: space-between;">
  <img src="src/assets/images/Login.png" height="300px">
  <img src="src/assets/images/AlertLogin.png" height="300px">
  <img src="src/assets/images/Home.png" height="300px">
  <img src="src/assets/images/Profile.png" height="300px">
</div>


## Tugas 10

### Halaman Login
<img src="src/assets/images/Login.png" height="300px">
Halaman ini menampilkan opsi login menggunakan akun Google. Setelah berhasil login, pengguna akan diarahkan ke halaman Home.

### Alert Login
<img src="src/assets/images/AlertLogin.png" height="300px">
Menampilkan pesan alert ketika terjadi kesalahan saat proses login.

### Halaman Home (CRUD)
<img src="src/assets/images/HomeCRUD.png" height="300px">
Halaman utama aplikasi yang menampilkan daftar todo dan implementasi CRUD:

**Create:**
<img src="src/assets/images/Create.png" height="300px">
- Tambah todo baru melalui tombol floating action button (+)
- Input judul dan deskripsi todo
- Todo baru akan muncul di daftar aktif

**Read:**
<img src="src/assets/images/AfterCreate.png" height="300px">
- Menampilkan daftar todo aktif dan yang sudah selesai
- Todo ditampilkan dengan judul, deskripsi, dan waktu terakhir diperbarui
- Terdapat fitur refresh untuk memperbarui daftar

**Update:**
<img src="src/assets/images/MenuUpdate.png" height="300px">
<img src="src/assets/images/Update.png" height="300px">
<img src="src/assets/images/AfterUpdate.png" height="300px">
<img src="src/assets/images/AfterComplete.png" height="300px">
- Edit todo dengan menggeser item ke kiri dan klik ikon edit
- Ubah status todo (selesai/aktif) dengan menggeser ke kanan
- Perubahan langsung tercermin di daftar

**Delete:**
<img src="src/assets/images/MenuDelete.png" height="300px">
<img src="src/assets/images/AfterDelete.png" height="300px">
- Hapus todo dengan menggeser item ke kiri
- Konfirmasi penghapusan melalui ikon tempat sampah
- Item terhapus akan hilang dari daftar

### Halaman Profile
<img src="src/assets/images/Profile.png" height="300px">
Menampilkan informasi pengguna yang sedang login termasuk foto profil dan email, serta tombol untuk logout dari aplikasi.


