const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi === "marah") {
      (async () => {
        const hitungIXX = hitung(await promiseTheaterIXX(), emosi);
        const hitungVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(hitungIXX + hitungVGC);
      })();
    }

    else if (emosi === "tidak marah") {
      (async () => {
        const hitungIXX = hitung(await promiseTheaterIXX(), emosi);
        const hitungVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(hitungIXX + hitungVGC);
      })();
    }

    else {
      reject('data tidak valid');
    }  
  });
}

const hitung = (data, emosi) => {
  let total = 0;

  if (emosi == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        total++;
      }
    }
  }
 
  else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        total++;
      }
    }
  }

  return total;
}

module.exports = {
  promiseOutput,
};
