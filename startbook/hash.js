// const Hash = (int num) => {
	// hash計算
//}

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
