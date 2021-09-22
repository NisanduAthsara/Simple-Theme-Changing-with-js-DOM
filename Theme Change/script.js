

function darktheme(){
	document.body.style.backgroundColor = 'black';
	document.body.style.transition = "0.3s ease";
	var h1 = document.querySelector(".h1");
	h1.style.color = 'white';
	var btn = document.querySelector("#btn");
	btn.style.display = 'none';
	var btn1 = document.querySelector("#btn1");
	btn1.style.display = 'block';
	var p1 = document.querySelector(".p1");
	p1.style.color = "white";
}

function lighttheme(){
	document.body.style.backgroundColor = 'white';
	document.body.style.transition = "0.3s ease";
	var h1 = document.querySelector(".h1");
	h1.style.color = 'black';
	var btn = document.querySelector("#btn");
	btn.style.display = 'block';
	var btn1 = document.querySelector("#btn1");
	btn1.style.display = 'none';
	var p1 = document.querySelector(".p1");
	p1.style.color = "black";
}