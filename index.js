
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3340
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello World !'))

app.get('/crud/:name', (req, res) =>{
    let namaSiswa = req.params.name; 
    res.end("Student name: "+namaSiswa);
});

app.post('/crud/', (req, res) => {
    let namaSiswa = req.body.name;
    let kelas = req.body.class;
    res.end("new Student name : "+ namaSiswa +" "+"class: "+ kelas)
});

app.put('/crud/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa = req.body.name;
    let kelas = req.body.class;
    res.end("student by id : "+ id +" "+"has done update ")
});

app.delete('/crud/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa = req.body.name;
    res.end("student by id : "+ id +"and name : "+ namaSiswa +"has deleted")
});


// nomer satu
app.get('/buku/:judul', (req, res) => {
    let namaBuku = req.params.buku;
    res.end("Judul Buku : " + namaBuku)
});

app.post('/buku', (req, res) => {
    let namaBuku = req.body.buku;
    let hargaBuku = req.body.harga;
    res.end("Judul Buku : " + namaBuku +" "+"Harga Buku : " + hargaBuku)
}); 

app.put('/buku/:id', (req, res) => {
    let id = req.params.id;
    let namaBuku = req.body.buku;
    let hargaBuku = req.body.harga;
    res.end("Buku by id : "+ " " + id + "" +"Judul Buku : " + namaBuku + " " +"Harga : "+" "+ hargaBuku+" Buku ada") 
});

app.delete('/buku/:id', (req, res) => {
    let id = req.param.id;
    let namaBuku = req.body.buku;
    let hargaBuku = req.body.harga;
    res.end("Buku by id : "+ " " + id + "" +"Judul Buku : " + namaBuku + " " +"Harga : "+" "+ hargaBuku+" Buku habis") 
});

// nomer dua
app.get('/ikan/:jenis', (req, res) => {
    let jenisIkan = req.params.jenis;
    res.end("jenis ikan : " + " " + jenisIkan)
});

app.post('/ikan', (req, res) => {
    let jenisIkan = req.body.jenis;
    let namaIkan = req.body.nama;
    res.end("Jenis Ikan : " + jenisIkan + "Nama Ikan : " + namaIkan )    
});

app.put('/ikan/:id', (req, res) => {
    let id = req.params.id;
    let jenisIkan = req.body.jenis;
    let namaIkan = req.body.nama;
    res.end("Jenis by id : "+ " " + id + "" +"Jenis : " + jenisIkan + " " +"Nama : "+" "+ namaIkan+" ikan :v") 
});

app.delete('/ikan/:id', (req, res) => {
    let id = req.param.id;
    let jenisIkan = req.body.jenis;
    let namaIkan = req.body.nama;
    res.end("Jenis by id : "+ " " + id + "" +"Jenis : " + jenisIkan + " " +"Nama : "+" "+ namaIkan+" ikan :(") 
});

// nomer tiga
app.get('/nama/:jurusan', (req, res) => {
    let jurusan = req.params.jenis;
    res.end("jurusan : " + " " + jurusan)
});

app.post('/nama/', (req, res) => {
    let jurusan = req.body.jenis;
    let kelas = req.body.kelasnya;
    res.end("jurusan : " + " " + jurusan + "kelas = " +kelas)    
});

app.put('/nama/:id', (req, res) => {
    let id = req.params.id;
    let jurusan = req.body.jenis;
    let kelas = req.body.kelasnya;
    res.end("Jurusan by id : "+ " " + id + "" +"Jurusan : " + jurusan + " " +"kelas : "+" "+ kelas+" kan :v") 
});

app.delete('/nama/:id', (req, res) => {
    let id = req.params.id;
    let jurusan = req.body.jenis;
    let kelas = req.body.kelasnya;
    res.end("Jurusan by id : "+ " " + id + "" +"Jurusan : " + jurusan + " " +"kelas : "+" "+ kelas+" kan :v") 
});

// nomer empat
app.get('hp/:merek', (req, res) => {
    let merek = req.params.mereknya;
    res.end("Merek : " + " " + merek)
});

app.post('hp/', (req, res) => {
    let merek = req.body.mereknya;
    let tipe  = req.body.tipenya;
    res.end("merek : " + " " + merek + "tipe = " +tipe)    
});

app.put('hp/', (req, res) => {
    let id = req.params.id;
    let merek = req.body.mereknya;
    let tipe  = req.body.tipenya;
    res.end("Merek by id : "+ " " + id + "" +"Merek : " + merek + " " +"tipe : "+" "+ tipe+" hust :v") 
});

app.delete('hp/', (req, res) => {
    let id = req.params.id;
    let merek = req.body.mereknya;
    let tipe  = req.body.tipenya;
    res.end("Merek by id : "+ " " + id + "" +"Merek : " + merek + " " +"tipe : "+" "+ tipe+" hust :v") 
});

// nomer lima
app.get('unggas/:jenis', (req, res) => {
    let jenis = req.params.jeniss;
    res.end("jenis : " + " " + jenis)
});

app.post('unggas/', (req, res) => {
    let jenis = req.body.jeniss;
    let jumlah = req.body.jumlahh;
    res.end("jenis : " + " " + jenis + "jumlah = " +jumlah)    
}); 

app.put('unggas/:id', (req, res) => {
    let id = req.params.id;
    let jenis = req.body.jeniss;
    let jumlah = req.body.jumlahh;
    res.end("Unggas by id : "+ " " + id + "" +"jenis : " + jenis + " " +"jumlah : "+" "+ jumlah+" hust :v") 
});

app.delete('unggas/:id', (req, res) => {
    let id = req.params.id;
    let jenis = req.body.jeniss;
    let jumlah = req.body.jumlahh;
    res.end("Unggas by id : "+ " " + id + "" +"jenis : " + jenis + " " +"jumlah : "+" "+ jumlah+" hust :v") 
});

// nomer enam
app.get('/kelas/:absen', (req, res) => {
    let Absen = req.params.absen;
    res.end("Absen : " + " " + Absen)
});

app.post('/kelas/', (req, res) => {
    let Absen = req.body.absen;
    let Kelas = req.body.kelas;
    res.end("Absen : " + "" + Absen + "Kelas : " + " " + Kelas)
});

app.put('/kelas/:id', (req, res) => {
    let id = req.params.id;
    let Absen = req.body.absen;
    let Kelas = req.body.kelas;
    res.end("Absen by id : "+ " " + id + "" +"Absen : " + Absen + " " +"Kelas : "+" "+ Kelas+" Oke ")
});

app.delete('/kelas/:id', (req, res) => {
    let id = req.params.id;
    let Absen = req.body.absen;
    let Kelas = req.body.kelas;
    res.end("Absen by id : "+ " " + id + "" +"Absen : " + Absen + " " +"Kelas : "+" "+ Kelas+" Oke ")
});

// nomer tujuh
app.get('/minum/:nama', (req, res) => {
    let Minuman = req.params.minuman;
    res.end("Minuman : " + Minuman)
});

app.post('/minum', (req, res) => {
    let Minuman = req.body.minuman;
    let Harga = req.body.harga;
    res.end("Minuman : " + Minuman +" "+"Harga Buku : " + Harga)
}); 

app.put('/minum/:id', (req, res) => {
    let id = req.params.id;
    let Minuman = req.body.minuman;
    let Harga = req.body.harga;
    res.end("Minuman by id : "+ " " + id + "" +"Minuman : " + Minuman + " " +"Harga : "+" "+ Harga+" tersedia") 
});

app.delete('minum/:id', (req, res) => {
    let id = req.params.id;
    let Minuman = req.body.minuman;
    let Harga = req.body.harga;
    res.end("Minuman by id : "+ " " + id + "" +"Minuman : " + Minuman + " " +"Harga : "+" "+ Harga+" habis") 
});

// nomer delapan
app.get('/mapel/:nama', (req, res) => {
    let Mapel = req.params.mapel;
    res.end("Mata Pelajaran : " + Mapel)
});

app.post('/mapel', (req, res) => {
    let Mapel = req.body.mapel;
    let Guru = req.body.guru;
    res.end("Mata Pelajaran : " + Mapel +" "+"Guru : " + Guru)
}); 

app.put('/mapel/:id', (req, res) => {
    let id = req.params.id;
    let Mapel = req.body.mapel;
    let Guru = req.body.guru;
    res.end("Mapel by id : "+ " " + id + "" +"Mata Pelajaran : " + Mapel +" "+"Guru : " + Guru+" Mengajar") 
});

app.delete('/mapel/:id', (req, res) => {
    let id = req.params.id;
    let Mapel = req.body.mapel;
    let Guru = req.body.guru;
    res.end("Mapel by id : "+ " " + id + "" +"Mata Pelajaran : " + Mapel +" "+"Guru : " + Guru+" santuy :V") 
});

// nomer sembilan
app.get('/sepatu/:jenis', (req, res) => {
    let Jenis = req.params.jenis;
    res.end("Sepatu : " + Jenis)
});

app.post('/sepatu', (req, res) => {
    let Jenis = req.body.jenis;
    let Ukuran = req.body.ukuran;
    res.end("Sepatu : " + Jenis+" "+"Ukuran : " + Ukuran)
}); 

app.put('/sepatu/:id', (req, res) => {
    let id = req.params.id;
    let Jenis = req.body.jenis;
    let Ukuran = req.body.ukuran;
    res.end("Sepatu by id : "+ " " + id + "" +"Sepatu : " + Jenis+" "+"Ukuran : " + Ukuran+" ada") 
});

app.delete('/sepatu/:id', (req, res) => {
    let id = req.params.id;
    let Jenis = req.body.jenis;
    let Ukuran = req.body.ukuran;
    res.end("Sepatu by id : "+ " " + id + "" +"Sepatu : " + Jenis+" "+"Ukuran : " + Ukuran+" habis") 
});

// nomer sepukuh
app.get('/boneka/:ukuran', (req, res) => {
    let Ukuran= req.params.ukuran
    res.end("Boneka : " + Ukuran)
});

app.post('/boneka', (req, res) => {
    let Ukuran = req.body.ukuran;
    let Harga = req.body.harga;
    res.end("Boneka : " + Ukuran+" "+"Harga : " + Harga)
}); 

app.put('/boneka/:id', (req, res) => {
    let id = req.params.id;
    let Ukuran = req.body.ukuran;
    let Harga = req.body.harga;
    res.end("Boneka by id : "+ " " + id + "" +"Boneka : " + Ukuran+" "+"Harga : " + Harga+" ada") 
});

app.delete('/boneka/:id', (req, res) => {
    let id = req.params.id;
    let Ukuran = req.body.ukuran;
    let Harga = req.body.harga;
    res.end("Boneka by id : "+ " " + id + "" +"Boneka : " + Ukuran+" "+"Harga : " + Harga+" kososng") 
});

app.listen(port, () => console.log('Progam mlaku'))

