
const a = document.querySelectorAll('.close');

// prevent default adalah method yang berfungsi untuk menghentikan aksi pada web yang kita buat / menghentikan aksi pada elemen-nya sendiri. pada kasus ini, elemen yang diambil adalah tag a dengan href-nya kosong, jadi href akan kembali kehalaman dirinya sendiri.

a.forEach(function(el){
	el.addEventListener('click', function(event){
		event.target.parentElement.style.display = 'none';
		event.preventDefault();
	});
});
//jadi hasilnya halaman ini akan seperti direfresh, karena jika dilihat pada tag a itu adalah hyperlink yang berfungsi untuk pindah halaman, tetapi href-nya kosong, jadi akan kembali kehalaman itu sendiri, utnuk mencegah hal tersebut, maka dapat menggunakan method preventDefault(), dengan cara panggil event-nya lalu preventDefault();