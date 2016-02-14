// enter code here

var $ = function (id) {
	return document.getElementById(id);
}

var calculate_click = function () {
	
var length = parseFloat( $("length") .value);
var width = parseFloat( $("width") .value);

$("area") .value = "";
$("perimeter") .value = "";

if(isNaN(length) || length <=0) {
	alert("Please enter a Length greater than zero.");
} else if(isNaN(width) || width <= 0) {
	alert("Please enter a width greater than zero.");
} else {
	var area = width * length;
	var perimeter = (width * 2) + (length * 2);
	
	$("area") .value = area.toFixed(2);
	$("perimeter") .value = perimeter.toFixed(2);
}
}
window.onload = function () {
	//alert("debug");
	$("calculate") .onclick = calculate_click;
	$("length") .focus();
}