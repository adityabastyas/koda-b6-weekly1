import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
const rl = createInterface({
  input: stdin,
  output: stdout,
});
console.log("Selamat Datang di Pizza Hut Indonesia");

const url =
  "https://raw.githubusercontent.com/adityabastyas/koda-b6-weekly1/refs/heads/main/data.json";

const pizzaHutIndonesia = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const target = data.map((item) => {
      let menu = item.name;
      // let harga = item.harga;

      return menu;
    });

    console.log(target);
    const pilih = await rl.question("Silahkan pilih menu pizza): ");
    console.log(`pesanan ${pilih} berhasil`);

    rl.close();
  } catch (error) {
    console.log(error);
  }
};

pizzaHutIndonesia();
