//fetch("https://api.github.com/repos/DDP-Projekt/Kompilierer/releases/latest")
//.then(x => x.json())
//.then(x => console.log(x))

//document.getElementById('dl-text')

let cIndex = 1;
const maxC = 3;
//document.addEventListener('DOMContentLoaded', () => {
//	
//})

function nextC() {
	document.getElementById('c'+cIndex).classList.toggle('hidden')
	cIndex++;
	if (cIndex > maxC) {
		cIndex = 1;
	}
	document.getElementById('c'+cIndex).classList.toggle('hidden')
}