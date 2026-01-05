import { tanyaUser } from "./input.js";

export const checkout = async (keranjang, histori, tampilkanKeranjang) => {
  
  if (keranjang.length === 0) {
    console.log("keranjang kosong, belanja dulu yuk!");
    return; 
  }
  
  tampilkanKeranjang(keranjang);
  
  const jawaban = await tanyaUser("lanjut bayar? (y/n): ");
  
  if (jawaban === "y" || jawaban === "Y") {
    
    let totalBelanja = 0;
    
    keranjang.forEach((item) => {
      let subtotal = item.harga * item.jumlah;
      
      totalBelanja = totalBelanja + subtotal;
    });
    
    histori.push({
      items: [...keranjang], 
      total: totalBelanja
    });
    
    console.log("npembayaran berhasil");
    console.log(`total yang dibayar Rp${totalBelanja}`);
    
    keranjang.length = 0;
  
  } else {
    console.log("checkout dibatalkan");
  }
};