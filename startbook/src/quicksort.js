const swap = (i, j, arr) => {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	return arr;
}


const quicksort = (start, end, arr) =>  {
	if(end - start < 1) {
		 return;
	}
	
	let pivot = start;
	let left = start + 1;
	let right = end;
	while(true) {
		
		while(arr[right] > arr[pivot]) {
			right -= 1;
		}
		
		if(right < left) break;

		while(arr[left] < arr[pivot]) {
			left += 1;
		}
		if(right > left) {
			swap(right, left, arr);
		}
	}

	if(pivot < right) {
		swap(pivot, right, arr);
	}

	quicksort(start, right-1, arr);
	quicksort(right+1, end, arr);		
		
}

export const main = (start, end, arr) => {
	quicksort(start, end, arr);
	return arr;
}

//let testArr = [2, 5, 7, 1, 3, 9, 4, 6, 8];
//main(0, testArr.length-1, testArr);
