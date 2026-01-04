import { stdin } from "node:process";
import { tanyaUser } from "./input.js";

console.log("Selamat Datang di Pizza Hut Indonesia");

const url = "https://raw.githubusercontent.com/adityabastyas/koda-b6-weekly1/refs/heads/main/data.json";

let menuData = []; 

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
  
  const pilihan = await tanyaUser("pilih menu: ");
  
  if (pilihan === "1") {
    tampilkanMenu(menuData);
    await menuUtama(); 
    
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
