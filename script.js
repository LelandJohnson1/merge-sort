//ITERATION
function Fib_iteration(num) {
	let test = 0;
	let arr = [0];
	for (let i = 0; i < num; i++) {
		if (arr.length >= 2) {
			test = arr[i - 1] + arr[i];
		} else if (arr.length == 1) {
			test += 1;
		}

		arr.push(test);

		if (i == num - 2) {
			document.querySelector("p:first-child").innerHTML = "Iterative " + arr;
			return;
		}
	}
}

Fib_iteration(8);

//RECURSIVE
function Fib_recursive(num, next = 1, prev = 0) {
	let arr = [prev, next];
	let final_arr;

	if (num != 0) {
		final_arr = [arr[0]].concat(
			Fib_recursive(num - 1, arr[0] + arr[1], arr[1])
		);
	}

	document.querySelector("p+p").innerHTML = "Recursive " + final_arr;
	return final_arr;
}

console.log(Fib_recursive(8));

//MERGE SORT
///////////////////////////
const input = document.querySelector("input");
const button = document.querySelector("button");
const sorted_text = document.querySelector("button+p");

const merge = (arr, beg, mid, end) => {
	const index1 = mid - beg + 1;
	const index2 = end - mid;

	const L_arr = [];
	const R_arr = [];

	for (let i = 0; i < index1; i++) {
		L_arr[i] = arr[i];
	}
	for (let j = 0; j < index2; j++) {
		R_arr[j] = arr[j + (mid + 1)];
	}

	let i = 0;
	let j = 0;
	let k = beg;
	while (i < index1 && j < index2) {
		if (L_arr[i] <= R_arr[j]) {
			arr[k] = L_arr[i];
			i++;
		} else if (R_arr[j] <= L_arr[i]) {
			arr[k] = R_arr[j];
			j++;
		}
		k++;
	}

	while (i < index1) {
		arr[k] = L_arr[i];
		i++;
		k++;
	}

	while (j < index2) {
		arr[k] = R_arr[j];
		j++;
		k++;
	}

	sorted_text.innerHTML = arr;
};

const mergesort = (arr, beg = 0, end = arr.length - 1) => {
	if (beg >= end) {
		return;
	}
	let mid = beg + parseInt((end - beg) / 2);
	mergesort(arr, beg, mid);
	mergesort(arr, mid + 1, end);
	merge(arr, beg, mid, end);
};

button.onclick = function () {
	let test = input.value.split(",");
	let arr = [];
	for (let i = 0; i < test.length; i++) {
		arr.push(parseInt(test[i]));
	}
	mergesort(arr);
};
