// const Hash = (int num) => {
	// hash計算
//}

const ShowHash = () => {
	const form = document.forms.hashForm;
	console.log(form.inputHash.value);
	const div = document.createElement('div')
	div.textContent = form.inputHash.value;

	const element = document.getElementById('hashForm');
	element.parentNode.insertBefore(div, element.nextSibling)
}
