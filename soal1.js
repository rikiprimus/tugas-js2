//slice adalah metode untuk membuat salin dari bagian tertentu dari array 
//dan mengembalikannya sebagai array baru

const mobil = ["Avanza", "BMW", "Nissan", "Lamborgini"]
const ambil = mobil.slice(0, 3);
console.log(ambil)

//at adalah metode untuk mengembalikan elemen yang di index dari array
const posisi = mobil.at(2);
console.log(posisi)

//pop adalah metode untuk menghapus elemen terakhir dari array
mobil.pop()
console.log(mobil)

//push adalah metode untuk menambahkan elemen baru ke array terakhir
mobil.push("Honda")
console.log(mobil)

//shift adalah metode untuk menghapus elemen pertama dari array
mobil.shift()
console.log(mobil)

//unshift adalah metode untuk menambahkan elemen baru ke awal array
mobil.unshift("Suzuki")
console.log(mobil)

//splice adalah metode untuk menghapus dan menambahkan elemen array
mobil.splice(0, 2, "Tesla", "Jaguar")
console.log(mobil)

//sort adalah metode untuk mengurutkan elemen-elemen dalam sebuah array
//dengan fungsi pembanding
const usia = [25, 16, 21, 35 ,19]
const urutan = usia.sort((a, b) => a-b)
console.log(urutan)

// filter adalah metode untuk membuat sebuah array baru dengan sebuah elemen
// yang lulus uji kondisi yang diberikan
const nilai = [75, 60, 81, 55, 49];
const kkm = nilai.filter(num => num >= 60);
console.log(kkm);

//concat adalah metode untuk menggabungkan 2 array menjadi satu array
const makanan = ["Nasi", "Tempe", "Ayam", "Sayur"]
const minuman = ["Air Putih", "Teh Manis", "Jus"]
const sarapan = makanan.concat(minuman)
console.log(sarapan)

