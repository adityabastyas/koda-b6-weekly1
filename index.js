import { stdin } from "node:process";
import { tanyaUser } from "./input.js";
import { tampilkanMenu } from "./menu.js";
import { tampilkanKeranjang, tambahKeKeranjang, hapusKeranjang } from "./keranjang.js";

console.log("Selamat Datang di Pizza Hut Indonesia");

const url = "https://raw.githubusercontent.com/adityabastyas/koda-b6-weekly1/refs/heads/main/data.json";

let menuData = []; 
let keranjang  = []

const tampilkanMenuUtama = () => {
  console.log("== MENU UTAMA ==");
  console.log("1. menu pizza");
  console.log("2. tambah ke keranjang");
  console.log("3. lihat keranjang");
  console.log("4. hapus item keranjang");
  console.log("5. checkout");
  console.log("6. lihat histori");
  console.log("7. keluar");
};

const menuUtama = async () => {
  tampilkanMenuUtama();
  
  const pilihan = await tanyaUser("pilih nomor menu: ");
  
  if (pilihan === "1") {
    tampilkanMenu(menuData);
    await menuUtama(); 
  } else if (pilihan === "2") {
    await tambahKeKeranjang(menuData, keranjang, tampilkanMenu)
    await menuUtama(); 
  } else if (pilihan === "3") {
    tampilkanKeranjang(keranjang)
    await menuUtama(); 

  } else if (pilihan === "4") {
    await hapusKeranjang(keranjang, tambahKeKeranjang)
    await menuUtama();
  
  } else if (pilihan === "5") {
    await menuUtama();


  } else if (pilihan === "6") {
    await menuUtama();


  } else if(pilihan === 7) {
    console.log("terimakasih")

    stdin.pause();
    process.exit(0);
  } else {
    console.log("pilihan tidak ada ");
    await menuUtama(); 
  }
};

const pizzaHutIndonesia = async () => {
  try {
    
    const response = await fetch(url);
    const data = await response.json();
    
    menuData = data;
    
    await menuUtama();
    
  } catch (error) {
    console.log("error :", error);
    stdin.pause();
    process.exit(1);
  }
};

pizzaHutIndonesia();
