
/*
	DOM manipulation Node berfungsi untuk menambahkan, menghapus, dan mengganti node baru / eleen baru padda DOM. ada beberapa:

	1. document.createElement() berfungsi
	2. document.createTextNode()
	3. node.appendChild()
	4. node.insertBefore()
	5. parentNode.removeChild()
	6. parentNode.replaceChild()
	7. dll.
*/

// menambahkan paragraf baru setelah paragraf 3 menggunakan apendChild()

// buat dulu tag paragraf dan simpn kedalam variabel 
const paragrafBaru  = document.createElement('p'); 
// massukkan isi dan simpan kedalam variabel isi string ini akan nanti akan dimasukkan ke tag p. kedua varibel diatas ini belum terhubung.
const textParagrafBaru = document.createTextNode('paragraf baru');
//teksParagrafBaru akan disimpan kedalam paragrafBaru dengan appendChild. 
paragrafBaru.appendChild(textParagrafBaru); 
paragrafBaru.setAttribute('class', 'p4');
//simpan variabel paragrafBaru diakhir section A
const sectionA = document.querySelector('section#a');
//Terakhir simpan paragraf baru kedalam sectionA deengan appendChild
sectionA.appendChild(paragrafBaru); // PENTING: appendChild() menambahkan ke akhir elemen
paragrafBaru.style.backgroundColor = 'lightblue';

//-------------------------------------------------------------------------------------------------------------------------------------------------

// menambahkan item list sebelum item 2 menggunakan insertBefore()

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

//cari parent terlebih dahulu. parent-nya yaitu ul
const ul = document.querySelector('section#b ul');
//setelah itu set tag yang akan ditambahkan mau elemen berap. Elemen dimulai dari 1.
const li2 = document.querySelector('section#b ul li:nth-child(2)')
ul.insertBefore(liBaru, li2); //inserBefore() membutuhkan 2 parameter (bukan string). pertama tag elemen baru, kedua akan disimpan sebelum elemen apa
liBaru.style.backgroundColor = 'lightblue';

//-------------------------------------------------------------------------------------------------------------------------------------------------

// menghapus link pada tag a menggunakan removeChild()

const sectionAA = document.querySelector('section#a');
const link = document.querySelector('section#a a');

// //hapus link yang ada didalam sectionA
sectionAA.removeChild(link);

//-------------------------------------------------------------------------------------------------------------------------------------------------

// mengganti tag p paragraf 4 menjadi tag h2 menggunakan replaceChild()

//buat tag h2
const h2Baru = document.createElement('h1');
//buat teks yang akan disimpan kedalam h2
const teksH2Baru = document.createTextNode('paragraf baru');
//simpan teksP4Baru kedalam p4
h2Baru.appendChild(teksH2Baru);
//cari parent dari paragraf 4
const sectionB = document.querySelector('section#b');
//set tag mana yang akan direplace
const p4 = document.querySelector('section#b p');

sectionB.replaceChild(h2Baru, p4); //parameter ada 2, pertama node baru apa, kedua, mana yang akan direplace
h2Baru.style.backgroundColor = 'lightblue';


/*Method baru (manipulasi node)

	1. parentNode.append()
	2. parentNode.prepend()
	3. childNode.before()
	4. childNode.after()
	5. childNode.remove()
	6.childNode.replaceWith()
	penting: method baru saat ini belum support pada semua browser
*/