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


const CalcHash = (num, divident) => {
	return  num % divident;
}

const CreateHashTable = () => {
	const arrayD = [12, 25, 36, 20, 30, 8, 42];
	let arrayH = [0,0,0,0,0,0,0,0,0,0];
	const divident = arrayH.length;

	for(i=0; i<divident; i++) {
		const value = arrayD[i]
		let k = CalcHash(value, divident);

		while(arrayH[k]!=0) {
			k = CalcHash(k+1, divident);
		}
		
		arrayH[k] = value;
	}

	console.log(arrayH);
}


CreateHashTable();
