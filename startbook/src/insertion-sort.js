export const insertionSort = (arr) =>  {
	let i, k;
	for(i=1; i<arr.length; i++) {
		const tmp = arr[i];
		for(k=i; k>0 && arr[k-1]>tmp; k--){
			arr[k] = arr[k-1];
		}
		arr[k] = tmp;
	}
	
	return arr;
}
