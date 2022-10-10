
// const body = document.getElementsByTagName('body')[0];

// body.addEventListener('mousemove', function(event){

// 	//posisi mouse. gunakan method clientX (untuk mengetahui koordinat sumbu X), jika clientY (untuk mengetahui koordinat sumbu Y). tapi client itu harus menempel pada sebuah objek, dan objek yang harus dikiri kedalam function, shinggaa harus ada parameter didalam function.

// 	console.log(event.clientX);

// 	//ukuran browser. browser itu ada didalam objek window bukan objek document. document adalah kotak halaman putih, sedangkan window itu mencakup seluruh halaman. untuk mengetahui ukuran dari window, maka gunakan (wwindow.innerWidth / window.innerHeight). Method ini mengetahui ukuran dari halaman putih, tapi karena dikelola oleh window, maka ditulis window, bukan document.

// 	console.log(window.innerWidth);

// 	//jadi kesimpulannya clientX untuk mengetahui posisi kursor mouse dihalaman sedangkan window.innerWidth/Height untuk mengetahui lebar halaman. angka inilah yang nantinya akan digunakan.

// 	//buat variabel baru
// 	const posisiX = Math.round((event.clientX / window.innerWidth) * 255); //hasilnya adalah 255 angka inilah yang akan dipakai untuk color rgb.
	
// 	const posisiY = Math.round((event.clientY / window.innerHeight) * 255);
// 	console.log(posisiX);
// 	console.log(posisiY);
// 	body.style.backgroundColor = 'rgb('+ posisiX +','+ posisiY +', 100)';
// })
