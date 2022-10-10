
// const a = document.querySelectorAll('.close');

// event bubbling / event gelembung air adalah ketika kita membuat suatu event, misalnya pada kasus ini terdapat class close yang diberikan event, maka event tersebut juga akan berlaku untuk elemen-elemen pembungkus-nya, jadi seperti gelembung air yang semakin ke atas. contoh

// a.forEach(function(el){
// 	el.addEventListener('click', function(event){
// 		event.target.parentElement.style.display = 'none';
// 		event.preventDefault();
// 		event.stopPropagation(); // event bubbling
// 	});
// });

//jika kita menjalankan event pada tombol close, maka card juga otomatis akan dijalankan. misal jika kita click tombol close, maka alert akan terlebih dulu dijalankan, barulah event pada close jalan, untuk mengatasi hal tersebut, maka kita gunakan event bubbling agar ketika saat click tombol close maka alert-nya tidak jalan, caranya adalah dengan menambahkan stopPropagation(); pada event close.


const cards = document.querySelectorAll('.card');

cards.forEach(function(card){
	card.addEventListener('click', function(event){
		alert('ok');
	});
});

//sebenarnya cara ini memiliki kekurangan, misalnya jika kita menambahkan card baru secara real time (tidak lewat code), maka card yang baru belum ada event click-nya. karena nanti kedepannya pasti akan menambahkan data secara real time (bukan lewat code), maka cara ini kurang efektif.

//------------------------------------------------------------------------------------------------------------------------------------------------

//cara yang lebih efektif

const container = document.querySelector('.container');

container.addEventListener('click', function(event){
	console.log(event.target); // kita bisa manfaatkan event target pada contaier, karena container ini merupakan parent dari seluruh elemen.
	if(event.target.className == 'close'){ // jika event target yang className nya sama dengan close, maka lakukan sesuatu
		event.target.parentElement.style.display = 'none';
	}
});

//jadi dengan menggunakan cara ini, jika ingin menambahkan data/elemen baru secara real time/instan, maka event akan tetap ada pada elemen card baru. 