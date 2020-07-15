const a  = document.querySelector('.btn');

function change(){
	let a = document.getElementsByClassName('container_block')[0];
	a.style.display='none';
	const element = document.querySelector('.container_block2');
	element.innerHTML  = '<div class="block">цветок</div><div class="block">сумка</div><div class="block">полка</div><div class="block">кактус</div>'
};


const b  = document.querySelector('.btn2');

function change2(){
	let a = document.getElementsByClassName('container_block')[0];
	a.style.display='flex';
	const element = document.querySelector('.container_block2');
	element.innerHTML  = ''
};



