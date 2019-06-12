export const bubblesort = (arr) => {
	const len = arr.length-1;
	for(let i=0; i<len; i++) {
		for(let k=len; k>i; k--){
			if(arr[k] < arr[k-1]) {
				const tmp = arr[k]
				arr[k] = arr[k-1]
				arr[k-1] = tmp;
			}
		}
	}
	return arr;
}
