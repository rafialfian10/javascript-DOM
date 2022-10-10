// const container = document.querySelector('.container');
// const gBesar = document.querySelector('.gBesar');
// const thumbs = document.querySelectorAll('.thumb');

// container.addEventListener('click', function(event){
// 	//cek apaah yang di click adalah thumb
// 	if(event.target.className == 'thumb'){
// 		gBesar.src = event.target.src; //gBesar src (karena class ini memiliki src) akan diisi dengan event-nya (gambar yang diclick).
// 		gBesar.classList.add('fade'); //lalu tambahkan pada gBesar animasi fade. Tapi terdapat problem lain, animasi ini akan berjalan pada saat pertama kali di click, karena harusnya pada saat thumb diclick itu seharusnya efek fade-nya akan terus menempel, untuk menghilangkannya, maka gunakan method setTimeout() lalu berikan perintah remove class
// 		setTimeout(function(){
// 			gBesar.classList.remove('fade');
// 		}, 500);

// 		//hilangkan class active pada saat pindah / click thumb yang lain
// 		thumbs.forEach(function(thumb){
// 			// jika ada contains class active,  maka remove class active
// 			// if(thumb.classList.contains('active') ){ 
// 			// 	thumb.classList.remove('active'); 
// 			// }
// 			// cara lain
// 			thumb.className = 'thumb';
// 		});
		
// 		//pada saat diclick thumb-nya maka beri class active, ini terdapat problem lain , jika kita click thumb lain, maka class active-nya pada thumb yang sebelumnya tidak hilang, untuk mengatasi hal tersebut maka, gunakan looping untuk menghapus class active ketika pindah thumb 
// 		event.target.classList.add('active');
// 	}
// });


const gBesar = document.querySelector('.gBesar');
const thumbs = document.querySelectorAll('.thumb');


thumbs.forEach(function(thumb){
    thumb.addEventListener('click', function(event){
        if(event.target === thumb){
            gBesar.src = thumb.src;
        }

        gBesar.classList.add('fade');

        setTimeout(function(){
            
                gBesar.classList.remove('fade');
            
        }, 100);

        thumbs.forEach(function(thumb){
            if(thumb.classList.contains('active')){
                thumb.classList.remove('active');
            }
        });

        
        event.target.classList.add('active');
    });
});


