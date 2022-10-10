/*
	DOM Manipulation method lanjutan

	1. Manipulasi element
		d. element.classList berfungsi untuk mengelola class dari tag yang diseleksi. ada beberapa element.classList
			a). element.classList.add() berfungsi untuk menambah elemen pada class
			b). element.classList.remove() berfungsi untuk menambah elemen pada class
			c). element.classList.toggle() berfungsi untuk menambahkan class yang belum ada, dan menghapus class yang sudah ada, ibarat tombol 		lampu. toogle biasanya akan digunakan pada event
			d). element.classList.item() berfungsi untuk mengetahui class tertentu elemen pada class
			e). element.classList.contains() berfungsi untuk mengetahui apakah ada atau tidak class tertentu elemen pada class
			f). element.classList.replace() berfungsi untuk mengubah elemen pada class
	
*/
//element.classList.add()
const judul = document.getElementById('judul');
judul.classList.add('h2'); // ini tidak akan menimpa class h1 yang ada pada id judul
judul.classList.add('h3', 'h4', 'h5');



//element.classList.remove()
judul.classList.remove('h2', 'h3');


//element.classList.toggle()
judul.classList.toggle('cek-toogle'); // toggle ini akan aktif
judul.classList.toggle('cek-toogle'); // tapi apabila dipanggil kembali, toggle akan non aktif, begiu seterusnya
judul.classList.toggle('cek-toogle');


 //element.classList.item()
judul.classList.item(2); //method ini akan mencari class kedua yang dimulai dari index ke-0, bisa diketik di console


 //element.classList.contains()
judul.classList.contains('h6'); //method ini akan mencari apakah ada atau tidak class yang namanya h6, jika ada maka true, jika tidak ada, maka tidak maka false, bisa diketik di console

 //element.classList.replace()
judul.classList.replace('h1', 'h100'); //method ini akan merubah class h1 menjadi h100


