function getResult(value) {
	var result = document.getElementById("result");

	if (value == '=') {
		result.value = eval(result.value);
	} else {
		result.value += value;
	}
}

function clearResult() {
	document.getElementById("result").value = "";
}

function backspace() {
	var result = document.getElementById("result");
	result.value = result.value.slice(0, -1);
}
