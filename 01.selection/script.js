/*
	beberapa cara melakukan DOM selection Method :
	1. getElementById() berfungsi untuk mengambil elemen DOM berdasarkan id dan hanya bisa satu elemen yang diambil. menghasilkan element.
	2. getElementsByTagName() berfungsi untuk mengambil elemen DOM berdasarkan nama tag tertentu dan bisa lebih dari satu elemen yang diambil.	 	menghasilkan HTMLCollection / kumpulan dari elemen.
	3. getElementsByClassName() berfungsi untuk mengambil elemen DOM berdasarkan id dan bisa diambil lebih satu elemen yang diambil.menghasilkan 	HTMLCollection.
	4. querySelector() berfungsi untuk mengambil elemen DOM berdasarkan selector dan hanya bisa satu elemen yang diambil. menghasilkan element. 
	5. querySelectorAll() berfungsi untuk mengambil elemen DOM berdasarkan selector dan bisa lebih dari satu elemen yang diambil. menghasilkan	 	nodeList. 
*/

//contoh 1:
const h1 = document.getElementById('h1'); // tangkap elemen berdasarkan id = h1, yang ada didalam document lalu masukkan kedalam variabel
h1.style.backgroundColor = 'lightblue'; // tujuan menangkap elemen agar bisa elemennya bisa dimanipulasi 
h1.style.color = 'blue';
h1.style.fontFamily = 'georgia';
h1.innerHTML = 'Rafi Alfian'; // atau bisa memanipulasi isi dari elemen menggunakan innerHTML.


//contoh 2:
const p = document.getElementsByTagName('p'); //semua elemen p akan ditangkap pada file HTML 
// p[0].style.backgroundColor = 'salmon'; // karena p di halaman HTML lebih dari satu, maka berikan index sebagai penanda, jika ingin memanipulasi semua maka gunakan looping karena HTMLCollection adalah array. 
for (let i = 0; i < p.length; i++){
	p[i].style.backgroundColor = 'grey';
	p[i].style.color = 'salmon';
	p[i].style.fontWeight = 'bold';
}

//contoh 3:
const p1 = document.getElementsByClassName('p1'); //method ini juga mengembalikan HTMLCollection jadi jika ingin memanipulasi mak gunakan index
p1[0].innerHTML = 'Ini diubah dari javascript';

//contoh 4:
const li2 = document.querySelector('section#b ul li:nth-child(2)'); //method ini menghasilkan elemen, jadi hanya dapat menangkap satu elemen saja. jadi selectornya ditulis secara spesifik.misal saya ingin mengubah paragraf 2 disection a.
li2.style.color = 'green';
li2.style.fontWeight = 'bolder';

const p5 = document.querySelector('section#c p');
p5.style.color = 'black';
p5.style.fontWeight = 'bolder';

//contoh 5:
const li5 = document.querySelectorAll('section#c ul li'); //method ini menghaslkan nodeList jadi dapat menyeleksi lebih dari satu elemen.
// li5[0].style.color = 'blue'; //jadi harus diberi index. atau bisa lakukan looping bisa for atau forEach

li5.forEach(function(e){
	e.style.color = 'blue';
	e.style.fontWeight = 'bolder';
})
	

