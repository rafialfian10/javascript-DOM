/*
	Events pada javascript mempresentasikan sebuah kejadian yang terjadi didalam DOM, kejadian tersebut bisa dilakukan oleh user, misalnya seperti ketika user melakukan (mouse event, keyboard event, dll), ataupun dilakukan secara otomatis oleh API / computer, misalnya seperti (animasi selesai dijalankan, halaman selesai di load, dll). penting: events berbeda dengan even
	Ada 2 cara melakukan event:
		1. Event Handler.ini merupakan cara lama. event ini aada 2:
			a. Inline HTML Attribute
			b. Element Method
		2. addEventlistener(). ini merupakan cara baru
*/

//menambahkan backgrorund dan warna ketika paragraf 1 di click mengunakan Inline HTML Attribute
const p1 = document.querySelector('.p1');
function ubahWarnap1(){
	p1.style.backgroundColor = 'lightgreen';
	p1.style.fontWeight = 'bolder';
}

//menambahkan backgrorund dan warna ketika paragraf 2 di click mengunakan Element Method

const p2 = document.querySelector('.p2');

function ubahWarnap2(){
	p2.style.backgroundColor = 'lightgreen';
}
function ubahWarnap2(){
	p2.style.color = 'blue';
}

p2.onclick = ubahWarnap2; //tidak perlu pakai kurung
//penting: function ubahWaarna pertama tidak akan dijalankan karena ditimpa oleh function kedua,itulah kelemahan element method


//-------------------------------------------------------------------------------------------------------------------------------------------------

//menambahkan item baru ketika paragraf 4 di click mengunakan addEventListener

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {

	const liBaru = document.createElement('li');
	
	const textLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(textLiBaru);
	const ul= document.querySelector('section#b ul');
	ul.appendChild(liBaru);
});

//mengubah backgrroud dan warna ketika paragraf 3 di mouse over&leave menggunakan addEventlistener

const p3 = document.querySelector('section#a p:nth-child(4)');

p3.addEventListener('mouseover', function(){
	p3.style.backgroundColor = 'lightblue';
	p3.style.fontWeight = 'bolder';
});

p3.addEventListener('mouseleave', function(){
	p3.style.backgroundColor = 'white';
	p3.style.fontWeight = 'normal';
});
//jika menggunakan element method maka funtion baru akan menimpa functon sebelumnya