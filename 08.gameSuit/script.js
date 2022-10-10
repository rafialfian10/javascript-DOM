//buat function pilihan computer dengan method Math.random()
function getPilihanComputer(){
	const comp = Math.random();
		// if (comp < 0.33){
		// 	comp = 'gajah';
		// } else if(comp >= 0.33 && comp <0.66){
		// 	comp = 'orang';
		// } else {
		// 	comp = 'semut';
		// }

		//atau bisa diringkas
		if(comp < 0.33) return 'gajah';
		if(comp >= 0.33 && comp < 0.66) return 'orang';
		return 'semut';
}

// tentukan rules / aturan permainan
function getHasil(comp, player){
	// if (comp == player){
	// 	hasil = 'DRAW';
	// } else if (player == 'gajah'){
	// 	hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
	// } else if (player == 'orang'){
	// 	hasil = (comp == 'gajah') ? 'KALAH' : 'KALAH'; 
	// } else if (player == 'semut'){
	// 	hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
	// }
	//caraa lain

	if (comp == player) return 'DRAW';
	if (player == 'gajah') return (comp == 'orang') ? 'YOU WIN!' : 'YOU LOSE!';
	if (player == 'orang') return (comp == 'semut') ? 'YOU WIN!' : 'YOU LOSE!';
	if (player == 'semut') return (comp == 'gajah') ? 'YOU WIN!' : 'YOU LOSE!'; 
}

function putar(){
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();//untuk mendapatkan waktu saat itu, jadi saat fungsi putar dijalankan sewaktu di click, maka akan diambil waktu saat itu.

	//buat setInterval()
	setInterval(function(){ 
		if (new Date().getTime() - waktuMulai > 2000){ //jika waktu sudah lebih dari 2 detik maka clearInterval / hentikan.
			clearInterval;
			return;
		}

		//fungsi untu melakukan sesuatu secara berulang-ulang dengan waktu tertentu, dalam kasus ini saya beri 0,1s. Setiap 0,1s berikan perintah ganti gambar dengan setAttribute	
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

		if(i == gambar.length){ i = 0} //jika i = seluruh gambar maka ulangi lagi dari 0 (maka hasilnya gambar akan terus berputar)
	}, 100);

}

//seleksi seluruh gambar yang akan di clik (thumb)
const pilihan = document.querySelectorAll('.area-player ul li img'); 
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanPlayer = pil.className; // pilihan player di isi dengan pilihan yang punya classname
		const PilihanComputer = getPilihanComputer(); // pilihan komputer di isi dengan function getPilihancomputer()
		const hasil = getHasil(PilihanComputer, pilihanPlayer); // hasil di isi dengan function gethasil dengan 2 parameter.

		//tambahkan fungsi putar()
		putar();

		// setTimeout() digunakan untuk menjalankan function ketika setelah function putar selesai. jadi apabila function putar() selesai, maka baru function ini dijalankan, apabila tidak diberi function ini, maka gambar akan diganti sebelum function putar selesai.
		setTimeout(function(){ 
			//seleksi img-komputer
			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png'); // ubah / timpa dengan setAttribute

			//seleksi info
			const info = document.querySelector('.info');
			info.innerHTML = hasil; // ubah isi info dengan variabel hasil dengan menggunakan innerHTML
		}, 2000);

	});
});
