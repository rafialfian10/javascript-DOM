

const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

/*
DOM traversal / penelusuran DOM adalah penelusuran elemen berdasarkan elemen yan diseleksi diawal. beberapa DOM traversal:
	1. parentElement ini akan mengembalikan nilai element.
	2. parentNode ini akan mengembalikan nilai node.
	3. nextSibling berarti saudara kandung (bukan parent) setelahnya, jika tidak menggunakan element, maka karakter sepeti enter pun akan dibaca. ini akan mengembalikan nilai node.
	4. nextElementSibling juga berarti saudara kandung (bukan parent) setelahnya. ini akan mengembalikan nilai element.
	5. previousSibling berarti saudara kandung (bukan parent) sebelumnya, jika tidak menggunakan element, maka karakter sepeti enter pun akan dibaca. ini akan mengembalikan nilai node.
	6. previousElementSibling juga berarti saudara kandung (bukan parent) sebelumnya. ini akan mengembalikan nilai element.
*/

//menggunakan pengulangan for
// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function(){
// 	// card[i].style.display = 'none'; // jika memakai cara ini, maka sama saja dengan cara biasa yang menggunakan selector dan manipulation.
// 	close[i].parentElement.style.display = 'none'; // dengan menggunakan parentElement / DOM traversal, maka hanya perlu selector satu elemen saja.
// 	});
// }


//menggunakan pengulangan forEach
close.forEach(function(el){
	el.addEventListener('click', function(event){
	event.target.parentElement.style.display = 'none';//parentElement dari target adalah class card yaang berada didalam div, sedangkan target itu berarti yang mana yang akan ditarget / di click. boleh tidak meenggunakan target, tapi dengan menggunakannya kita bsaa mengetahui macam-macam informasi dari event yang sedaang terjadi (lihat di console), jika menggunakan target maka parrameter function wajib di isi.
	
	});
});


