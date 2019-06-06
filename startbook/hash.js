const ShowHash = () => {
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



const CreateHashTable = () => {
	const arrayD = [12, 25, 36, 20, 30, 8, 42];
	let arrayH = [0,0,0,0,0,0,0,0,0,0];
	const divident = arrayD.length;

	for(i=0; i<divident; i++) {
		const value = arrayD[i]
		let k = arrayD[i] % divident;

		while(arrayH[k]!=0) {
			k = (k+1) % divident;
		}
		
		arrayH[k] = value;
	}

	console.log(arrayH);
}

CreateHashTable();
