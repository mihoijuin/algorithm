const showHash = () => {
	const form = document.forms.hashForm;
	const inputValue = form.inputHash.value;
	const resultId = 'searchResult';
	
	const resultElm = document.getElementById(resultId);
	if(resultElm != null) {
		resultElm.textContent = inputValue; 
	} else {
		const div = document.createElement('div')
		div.setAttribute('id', resultId);
		div.textContent = inputValue;
		const element = document.getElementById('hashForm');
	        element.parentNode.insertBefore(div, element.nextSibling);
	}
}

window.showHash = showHash;

export const calcHash = (num, divident) => {
	return num % divident;
}

export const createHashTable = () => {
	const arrayD = [12, 25, 36, 20, 30, 8, 42];
	let arrayH = [0,0,0,0,0,0,0,0,0,0,0];
	const divident = arrayH.length;

	for(let i=0; i<arrayD.length; i++) {
		const value = arrayD[i]
		let k = calcHash(value, divident);
		while(arrayH[k]!=0) {
			k = calcHash(k+1, divident);
		}
		
		arrayH[k] = value;
	}

	console.log(arrayH);
	return arrayH;
}

