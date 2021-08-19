// tippy('#bigha', {
// 	content: 'Enter Bigha',
// });

// tippy('#katha', {
// 	content: 'Enter kahta',
// });

// tippy('#dhur', {
// 	content: 'Enter dhur',
// });

// tippy('#squareMeterInput', {
// 	content: 'Enter square meters',
// });

//getting elements & values
var bigha = document.getElementById('bigha');
var katha = document.getElementById('katha');
var dhur = document.getElementById('dhur');
var squareMeterInput = document.getElementById('squareMeterInput');
var squareMeter = document.getElementById('squareMeter');
var squareFeet = document.getElementById('squareFeet');
var totalDhur = document.getElementById('totalDhur');
var totalArea = document.getElementById('totalArea');
var totalAreaSecond = document.getElementById('totalAreaSecond');
var squareFeetSecond = document.getElementById('squareFeetSecond');

//hiding the output values while it's null
document.getElementById('output1').style.display = 'none';
document.getElementById('output2').style.display = 'none';

bigha.addEventListener('input', sct);
katha.addEventListener('input', sct);
dhur.addEventListener('input', sct);

function sct() {
	document.getElementById('output1').style.display = '';

	var bighaValue = parseFloat(bigha.value) || 0;
	var kathaValue = parseFloat(katha.value) || 0;
	var dhurValue = parseFloat(dhur.value) || 0;
	var aa = bighaValue * 20 * 20 + kathaValue * 20 + dhurValue; //total dhur value
	var bb = aa * 182.25; //total squarefeet
	var cc = bb / 10.89; //total squaremeters

	var bigha1 = Math.floor(bb / 72900); //for bigha
	var katha1 = Math.floor(((bb - bigha1 * 72900) / 72900) * 20); //for katha
	var dhur1 = ((bb - (bigha1 + katha1 / 20) * 72900) / 72900) * 400; //for dhur

	//displaying outputs
	totalDhur.innerText = aa;
	squareFeet.innerText = bb;
	squareMeter.innerText = cc.toFixed(3);
	totalArea.innerText = bigha1 + '-' + katha1 + '-' + dhur1;
}

squareMeterInput.addEventListener('input', function (e) {
	document.getElementById('output2').style.display = '';

	// var aa = e.target.value; //squaremeter
	// var bb = aa * 10.89; //squarefeet

	// var bigha1 = Math.floor(bb / 72900); //for bigha
	// var katha1 = Math.floor(((bb - bigha1 * 72900) / 72900) * 20); //for katha
	// var dhur1 = Math.floor((bb - (bigha1 + katha1 / 20) * 72900) / 72900) * 400; //for dhur
	// var kanwa1 = Math.floor(
	// 	((bb - (bigha1 + katha1 / 20 + dhur1 / 400) * 72900) / 72900) * 4 * 400
	// ); //for kanwa

	var sqmt = e.target.value;
	var sqft11 = sqmt * 10.89;
	var ww = Math.floor(sqft11 / 72900); //for bigha
	var xx = Math.floor(((sqft11 - ww * 72900) / 72900) * 20); //for katha
	var yy = Math.floor(((sqft11 - (ww + xx / 20) * 72900) / 72900) * 400); //for dhur
	var zz = Math.floor(
		((sqft11 - (ww + xx / 20 + yy / 400) * 72900) / 72900) * 4 * 400
	); //for kanwa

	//displaying outputs
	squareFeetSecond.innerText = sqft11.toFixed(2);
	totalAreaSecond.innerText = ww + '-' + xx + '-' + yy + '-' + zz;
});
