export const tampilkanHistori = (histori) => {
  console.log("hitori pembelian :");
  
  if (histori.length === 0) {
    console.log("belum ada histori");
    return; 
  }
  
  histori.forEach((transaksi, idx) => {
    console.log(`transaksi ${idx + 1}`);
    
    transaksi.items.forEach((item) => {
      let subtotal = item.harga * item.jumlah;
      console.log(item.nama);
      console.log(`${item.jumlah}x Rp ${item.harga}  Rp ${subtotal}`);
    });
    
    console.log(`total: Rp ${transaksi.total}`);
  });
  
};