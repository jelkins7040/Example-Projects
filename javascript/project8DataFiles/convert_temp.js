var $ = function (id) {
	return document.getElementById(id);
	}

var radio_click = function () {	
	//alert("click worked");
	if ($("to_celsius").checked) {		
		//alert("test 1");
		$("degrees_celsius").disabled = true;
		$("degrees_fahrenheit").disabled = false;
		$("degrees_celsius").value = "";
		$("degrees_fahrenheit").value = "";
	}
	else if ($("to_fahrenheit") .checked) {	
		//alert("test 2");
		$("degrees_celsius").disabled = false;
		$("degrees_fahrenheit").disabled = true;
		$("degrees_celsius").value = "";
		$("degrees_fahrenheit").value = "";	
	}	
}
	
var convert_click = function () {
	
	//alert("click worked");
	var celsius = parseFloat( $("degrees_celsius").value );
    var fahrenheit = parseFloat( $("degrees_fahrenheit").value );
	
	if ($("to_celsius").checked) {
		if (isNaN(fahrenheit) || fahrenheit <= 0) {
			alert("Fahrenheit be a valid number\nand greater than zero.");
		}
		else {
			celsius = (fahrenheit-32) * 5/9;
			//alert(typeof celsius);
		}
		$("degrees_celsius").value = celsius.toFixed(0);
	}
	else if ($("to_fahrenheit") .checked) {	
		if(isNaN(celsius) || celsius <= 0) {
			alert("Celsius must be a valid number\nand greater than zero.");
		} 
		else {
			fahrenheit = celsius * 9/5 + 32;
			//alert(typeof fahrenheit);
		}
		$("degrees_fahrenheit").value = fahrenheit.toFixed();
	}
}


window.onload = function () {
    $("convert") .onclick = convert_click;
    $("to_celsius") .onclick = radio_click;
	$("to_fahrenheit") .onclick = radio_click;
	//alert("window onload test");
}


