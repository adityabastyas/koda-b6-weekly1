export const tampilkanMenu = (menuData) => {
  console.log("=== MENU PIZZA ===");
  
  menuData.forEach((item, idx) => {
    let nama = item.name;
    let harga = item.harga;
    
    console.log(`${idx + 1}. ${nama}  Rp ${harga}`);
  });
};

