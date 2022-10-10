const ubahWarna = document.getElementById('ubahWarna');
const body = document.querySelector('body');

ubahWarna.addEventListener('click', function(){
	body.classList.toggle('biruMuda');
})

//-------------------------------------------------------------------------------------------------------------------------------------------------

const ubahWarnaBaru = document.createElement('button');
const teksUbahWarnaBaru = document.createTextNode('Random color');
ubahWarnaBaru.appendChild(teksUbahWarnaBaru);
ubahWarnaBaru.setAttribute('type', 'button');

const buttonBaru = document.querySelector('button');
buttonBaru.after(ubahWarnaBaru);

ubahWarnaBaru.addEventListener('click', function(){

	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

//-------------------------------------------------------------------------------------------------------------------------------------------------

const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function(){

	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;

	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sGreen.addEventListener('input', function(){

	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;

	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBlue.addEventListener('input', function(){

	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;

	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// const container = document.querySelector('.container');

// container.addEventListener('input', function(event){

// 	const r = sRed.value;
// 	const g = sGreen.value;
// 	const b = sBlue.value;

// 	if(event.target === r,g,b){
// 		body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// 	}
// });


	




