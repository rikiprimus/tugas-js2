const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

    if(nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
        return
    }

    if(dataArray.length <= 5){
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        return
    }

    const hasilSeleksi = dataArray.filter(num => num > nilaiAwal && num < nilaiAkhir)
    
    if(hasilSeleksi.length === 0){
        console.log("Nilai tidak ditemukan")
        return
    }

    hasilSeleksi.sort((a, b) => a - b)
    console.log(hasilSeleksi)
}


SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(5, 17, [2, 25, 4]);
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])