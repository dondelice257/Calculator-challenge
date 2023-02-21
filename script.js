
	function appendToResult(value) {
		document.getElementById("result").value += value;
	}

	function clearResult() {
		document.getElementById("result").value = "";
	}

	function deleteCharacter() {
		let result = document.getElementById("result").value;
		document.getElementById("result").value = result.substring(0, result.length - 1);
	}

	function calculateResult() {
		try {
			document.getElementById("result").value = eval(document.getElementById("result").value);
		} catch (e) {
			document.getElementById("result").value = "Error";
		}
	}
