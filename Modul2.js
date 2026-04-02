"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tsc --watch
let nama = "Yuma";
let umur = 19;
let aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
const user = {
    id: 1,
    nama: "Bob",
    role: "admin"
};
console.log(user);
const buku1 = {
    id: 1,
    judul: "Belajar Frontend"
};
console.log(buku1);
const siswa1 = {
    id: 2,
    nama: "Jaja",
    kelas: "12 (Dua Belas)"
};
function hitungUmur(tahunLahir) {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunLahir;
}
const umurPengguna = hitungUmur(2009);
console.log("\nTugas 1 - Interface Siswa:\n", siswa1);
console.log("\nTugas 2 - Function Hitung Umur", "\n Anda berumur", umurPengguna + " tahun.");
console.log("\nF. Refleksi Peserta Didik -\n    1. Typescript adalah sebuah perluasan dari JavaScript, biasanya digunakan untuk menambahkan tipe data ke JavaScript, \n    kodenya dapat lebih mudah dipahami, serta lebih aman dan terstruktur.\n    2.Bagian latihan menulis variable, membuat fungsi dan juga parameter.\n    3.Bagian pengunaan terminal dan perintah-perintahnya.");
//# sourceMappingURL=Modul2.js.map