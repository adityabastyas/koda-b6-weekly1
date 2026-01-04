import { tanyaUser } from "./input.js";

export const tampilkanKeranjang = (keranjang) => {
  console.log("keranjang belanja : ");
  
  if (keranjang.length === 0) {
    console.log("keranjang kosong");
    return; 
  }
  
  let totalBelanja = 0; 
  
  keranjang.forEach((item, index) => {
    let subtotal = item.harga * item.jumlah;
    
    totalBelanja = totalBelanja + subtotal;
    
    console.log(`${index + 1}. ${item.nama}`);
    console.log(` ${item.jumlah}x Rp${item.harga} = Rp${subtotal}`);
  });
  
  console.log(`TOTAL: Rp${totalBelanja}`);
};

export const tambahKeKeranjang = async (menuData, keranjang, tampilkanMenu) => {
  
  tampilkanMenu(menuData);
  
  const jawaban = await tanyaUser("pilih nomor atau 0 untuk batal : ");
  
  const nomor = parseInt(jawaban);
  
  if (nomor === 0) {
    console.log("batal");
    return; 
  }
  
  if (nomor < 1 || nomor > menuData.length) {
    console.log("nomor salah");
    return; 
  }
 
  const pizza = menuData[nomor - 1];
  
  const jawabanJumlah = await tanyaUser("mau beli berapa: ");
  const jumlah = parseInt(jawabanJumlah);
  
  if (jumlah < 1) {
    console.log("jumlah minimal 1");
    return; 
  }
 
  keranjang.push({
    nama: pizza.name,
    harga: pizza.harga,
    jumlah: jumlah
  });
  
  console.log(`berhasil ditambahkan`);
  console.log(`${pizza.name} x${jumlah} = Rp${pizza.harga * jumlah}`);
};

export const hapusKeranjang = async (keranjang, tampilkanKeranjang) => {
  
  if (keranjang.length === 0) {
    console.log("keranjang kosong");
    return;
  }
  
  tampilkanKeranjang(keranjang);
  
  const jawaban = await tanyaUser("pilih nomor atau 0 untuk batal : ");
  const nomor = parseInt(jawaban);
  
  if (nomor === 0) {
    console.log("batal");
    return; 
  }
  
  if (nomor < 1 || nomor > keranjang.length) {
    console.log("nomor salah");
    return; 
  }
  
  const namaItem = keranjang[nomor - 1].nama;
 
  keranjang.splice(nomor - 1, 1);
  
  console.log(`berhasil hapus: ${namaItem}`);
};