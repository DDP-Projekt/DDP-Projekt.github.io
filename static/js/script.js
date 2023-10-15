


let cIndex = 1;
const maxC = 3;
document.addEventListener('DOMContentLoaded', async () => {
	const latestRelease = await fetch("https://api.github.com/repos/DDP-Projekt/Kompilierer/releases/latest")
		.then(x => x.json() )
	console.log(latestRelease)

	if (window.navigator.platform.includes("Win")) {
		for (const asset of latestRelease.assets) {
			if (asset.name.includes("win") && !asset.name.includes("mingw")) {
				document.getElementById('dl-btn').onclick = () => open(asset.browser_download_url)
				document.getElementById('dl-text').innerText = asset.name;
			}
		}
	}
	else if (window.navigator.platform.includes("Linux")) {
		for (const asset of latestRelease.assets) {
			if (asset.name.includes("linux")) {
				document.getElementById('dl-btn').onclick = () => open(asset.browser_download_url)
				document.getElementById('dl-text').innerText = asset.name;
			}
		}
	}
	else {
		document.getElementById('dl-text').innerText = "OS not supported";
	}
})

function nextC() {
	document.getElementById('c'+cIndex).classList.toggle('hidden')
	cIndex++;
	if (cIndex > maxC) {
		cIndex = 1;
	}
	document.getElementById('c'+cIndex).classList.toggle('hidden')
}