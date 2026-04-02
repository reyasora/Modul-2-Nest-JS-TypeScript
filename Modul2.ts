//tsc --watch
let nama: string = "Yuma";
let umur: number = 19;
let aktif: boolean = true;
console.log(nama, umur, aktif);

function login(username: string, password: string): boolean {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));

interface User {
    id: number;
    nama: string;
    role: string;
}

const user: User = {
    id: 1,
    nama: "Bob",
    role: "admin"
};
console.log(user);

interface Buku {
    id: number;
    judul: string;
    penulis?: string;
}
const buku1: Buku = {
    id:1,
    judul: "Belajar Frontend"
};
console.log(buku1);


interface Siswa {
    id: number;
    nama: string;
    kelas: string;
}
const siswa1: Siswa = {
    id:2,
    nama:"Jaja",
    kelas:"12 (Dua Belas)"
}

function hitungUmur(tahunLahir: number): number {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunLahir;   
}
const umurPengguna = hitungUmur(2009);

console.log("\nTugas 1 - Interface Siswa:\n", siswa1);

console.log("\nTugas 2 - Function Hitung Umur", "\n Anda berumur", umurPengguna + " tahun.");

console.log("\nF. Refleksi Peserta Didik -\n    1. Typescript adalah sebuah perluasan dari JavaScript, biasanya digunakan untuk menambahkan tipe data ke JavaScript, \n    kodenya dapat lebih mudah dipahami, serta lebih aman dan terstruktur.\n    2.Bagian latihan menulis variable, membuat fungsi dan juga parameter.\n    3.Bagian pengunaan terminal dan perintah-perintahnya.");