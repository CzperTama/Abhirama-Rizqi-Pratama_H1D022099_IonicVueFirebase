# Vue Firebase Authentication
 
Nama        : Abhirama Rizqi Pratama  
Nim         : H1D022099  
Shift Lama  : D  
Shift Baru  : A 
 
# Tugas 9

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


# Tugas 10

### Halaman Login
<img src="src/assets/images/Login.png" height="300px">
Halaman ini menampilkan opsi login menggunakan akun Google. Setelah berhasil login, pengguna akan diarahkan ke halaman Home.

### Alert Login
<img src="src/assets/images/AlertLogin.png" height="300px">
Menampilkan pesan alert ketika terjadi kesalahan saat proses login.

### Halaman Home (CRUD)
<img src="src/assets/images/HomeCRUD.png" height="300px">
Halaman utama aplikasi yang menampilkan daftar todo dan implementasi CRUD:

### Create:
<img src="src/assets/images/Create.png" height="300px">
- Tambah todo baru melalui tombol floating action button (+)
- Input judul dan deskripsi todo
- Todo baru akan muncul di daftar aktif

### Read:
<img src="src/assets/images/AfterCreate.png" height="300px">
- Menampilkan daftar todo aktif dan yang sudah selesai
- Todo ditampilkan dengan judul, deskripsi, dan waktu terakhir diperbarui
- Terdapat fitur refresh untuk memperbarui daftar

### Update:
<img src="src/assets/images/MenuUpdate.png" height="300px">
<img src="src/assets/images/Update.png" height="300px">
<img src="src/assets/images/AfterUpdate.png" height="300px">
<img src="src/assets/images/AfterComplete.png" height="300px">
- Edit todo dengan menggeser item ke kiri dan klik ikon edit
- Ubah status todo (selesai/aktif) dengan menggeser ke kanan
- Perubahan langsung tercermin di daftar

### Delete:
<img src="src/assets/images/MenuDelete.png" height="300px">
<img src="src/assets/images/AfterDelete.png" height="300px">
- Hapus todo dengan menggeser item ke kiri
- Konfirmasi penghapusan melalui ikon tempat sampah
- Item terhapus akan hilang dari daftar

### Halaman Profile
<img src="src/assets/images/Profile.png" height="300px">
Menampilkan informasi pengguna yang sedang login termasuk foto profil dan email, serta tombol untuk logout dari aplikasi.

## Build Project Ionic ke bentuk APK

### Konfigurasi Project
ionic build
<img src="src/assets/images/APKIonicBuild.png" height="300px">
Perintah ini akan membuild project Ionic kita menjadi file statis yang siap dideploy. Proses ini mengkompilasi semua kode TypeScript, Vue components, dan asset lainnya menjadi bundle yang optimal.

### Install dependencies
npm install @capacitor/android
<img src="src/assets/images/APKInstallCap.png" height="300px">
Menginstall package Capacitor untuk Android yang diperlukan untuk mengkonversi aplikasi web kita menjadi aplikasi native Android. Package ini menyediakan bridge antara kode web dan native Android.

### Build aplikasi
npm run build
<img src="src/assets/images/APKRunBuild.png" height="300px">
Membuild aplikasi Vue.js untuk production. Proses ini mengoptimasi semua asset dan kode untuk performa terbaik. Output akan disimpan di folder `dist/`.

### Add Android platform
npx cap add android
<img src="src/assets/images/APPAddAndro.png" height="300px">
Menambahkan platform Android ke project Capacitor. Ini akan membuat folder `android/` yang berisi semua file yang diperlukan untuk project Android native, termasuk struktur project Android Studio.

### Copy web assets
npx cap copy
<img src="src/assets/images/APKCapCopy.png" height="300px">
Menyalin semua file web yang telah di-build (dari folder `dist/`) ke dalam project Android native. Ini memastikan aplikasi web kita terintegrasi dengan benar ke dalam container native.

### Sync project
npx cap sync android
<img src="src/assets/images/APKSyncAndro.png" height="300px">
Mensinkronkan semua perubahan, termasuk:
- Plugin yang diinstall
- Konfigurasi Capacitor
- Web assets
- Dependencies native
Proses ini memastikan project Android memiliki semua komponen yang diperlukan.

### Open Project di Android Studio
npx cap open android
<img src="src/assets/images/APPOpenAndro.png" height="300px">