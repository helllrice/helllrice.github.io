let a = document.getElementById('container') 

const arr = [
	{
		price:45,
		color:'red',

	},
	{
		price:54,
		color:'green',
	},
	{
		price:32,
		color:'white',
	},
	{
		price:24,
		color:'black',
	},
	{
		price:65,
		color:'blue',
	},
];

let html = ''

for(let i=0; i<arr.length; i++){
	let key = arr[i]
	html += `<div class="object">
		<div> price: ${key.price}</div>
		<div>${key.color}</div>
	</div>`
// 	for(let key in arr[i]){
// 		let b = `${key} : ${arr[i][key]}`
// 		html += `<div>${b}</div>`
// 	}
}

a.innerHTML = html;







