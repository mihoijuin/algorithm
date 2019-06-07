

const createResultElement = (content) => {
	const resultId = 'searchResult';
	const resultElm = document.getElementById(resultId);
	if(resultElm != null) {
                resultElm.textContent = content;
        } else {
                const div = document.createElement('div')
                div.setAttribute('id', resultId);
                div.textContent = content;
                const element = document.getElementById('hashForm');
                if(element != null) element.parentNode.insertBefore(div, element.nextSibling);
        }
}

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

export const hashing = (inputNum, arrayH) => {
	const divident = arrayH.length;
	let k = calcHash(inputNum, divident);
	
	while(arrayH[k] != inputNum){
		k = calcHash(k+1, divident);	
		if(arrayH[k] == 0) return null;
	}
	
	return k;
} 

export const showResult = (inputValue=null) => {
        const form = document.forms.hashForm;
        if(form != null) inputValue = form.inputHash.value;
        if(isNaN(inputValue)) {
                createResultElement("数値を入力してね");
                return null;
        }
	
	let inputNum = parseInt(inputValue, 10)

        const arrayH = createHashTable();
	const result = hashing(inputNum, arrayH);
	if(result == null) {
		createResultElement("入力した数値はデータ内に存在しないよ");
	} else {
		createResultElement(result + "番目にデータがあるよ");
	}
	return result;
}


window.showResult = showResult;
