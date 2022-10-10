/*
	DOM Manipulation method

	1. Manipulasi element
		a. element.innerHTML berfungsi untuk merubah isi dari tag yang diseleksi
		b. element.style<property> berfungsi untuk merubah style dari tag yang diseleksi
		c. element.setAttribute() berfungsi untuk merubah atribut dari tag yang diseleksi. ada kita mengelola dengan attribute yang lain
			a). element.getAttribute() membuat attribute
			b). element.setAttribute() mengetahui / melihat isi dari attribute
			c). element.removeAttribute() menghapus attribute
		d. element.classList berfungsi untuk mengelola class dari tag yang diseleksi.ad beberapa element.classList
			a). element.classList.add() berfungsi untuk menambah elemen pada class
			b). element.classList.remove() berfungsi untuk menambah elemen pada class
			c). element.classList.add() berfungsi untuk menghapus elemen pada class
			d). element.classList.item() berfungsi untuk mengetahui class tertentu elemen pada class
			e). element.classList.contains() berfungsi untuk mengetahui apakah ada atau tidak class tertentu elemen pada class
			f). element.classList.replace() berfungsi untuk mengubah elemen pada class
*/

//contoh innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<h1>Biodata</h1><br><h6>Nama : Rafi Alfian<br>NIM : A710170021<br>Prodi : Teknik Informatika</h6>';

const sectionB = document.querySelector('section#b');
sectionB.innerHTML = 'Paragraf 4 diubah menjadi Hello World';

//-------------------------------------------------------------------------------------------------------------------------------------------------

//contoh element.style<property>
const h6 = document.querySelectorAll('#judul h6'); //meneruskan dari innerHTML meskipun di halaman HTML tidak diubah
h6[0].style.color = 'blue';

//-------------------------------------------------------------------------------------------------------------------------------------------------

//contoh element.setAttribute(). attribute adalah sesuatu yang menempel pada html.contoh attribute id, class, href dll..
const sectionA = document.querySelector('section#a p:nth-child(4)');
sectionA.setAttribute('name', 'paragraf 3'); //memberi attribute name dengan nama paragraf 3.bisa dilihat di console /elements

const sectionC = document.querySelector('section#c ul li:nth-child(1)');
sectionC.setAttribute('href', 'http://www.google.com');
sectionC.setAttribute('class', 'li1');
sectionC.setAttribute('class', 'li2'); // jika ingin menambah 2 attribute class maka tidak bisa menggunakan setAttribute, hasilnya li2 akan menimpa li1, jika ingin menambah mak gunakan method element.classList

//contoh element.getAttribute() // harus disimpan kedalam variabel dulu agar bisa dijalankan method-nya
sectionC.getAttribute('href'); //ini akan menampilkan http://www.google.com

// //contoh element.removeAttribute() 
const a2 = document.querySelector('section#a a:nth-child(5)') //ini akan menangkap href yang kedua
a2.removeAttribute('href'); // method ini akan menghapus attribute href dari a2

//-------------------------------------------------------------------------------------------------------------------------------------------------

//element.classList berfungsi untuk mengelola class dari tag yang diseleksi


