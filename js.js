const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++){
	inputs[i].addEventListener("keypress", (e)=>{if (isNaN(e.key)){e.preventDefault()}})
}

document.querySelector("#btn1").addEventListener("click", function(){
	let num1 = parseFloat(document.querySelector("#num1").value);
	let num2 = parseFloat(document.querySelector("#num2").value);
	document.querySelector("#score").innerHTML = num1 + num2;
	log("+");
})
document.querySelector("#btn2").addEventListener("click", function(){
	let num1 = parseFloat(document.querySelector("#num1").value);
	let num2 = parseFloat(document.querySelector("#num2").value);
	document.querySelector("#score").innerHTML = num1 - num2;
	log("-");
})
document.querySelector("#btn3").addEventListener("click", function(){
	let num1 = parseFloat(document.querySelector("#num1").value);
	let num2 = parseFloat(document.querySelector("#num2").value);
	document.querySelector("#score").innerHTML = num1 * num2;
	log("×");
})
document.querySelector("#btn4").addEventListener("click", function(){
	let num1 = parseFloat(document.querySelector("#num1").value);
	let num2 = parseFloat(document.querySelector("#num2").value);
	document.querySelector("#score").innerHTML = num1 / num2;
	log("/");
})

function log(n){
	document.querySelector("#log").innerHTML += "<div class='row'><div class='col-md-10'>"+document.querySelector("#num1").value+n+document.querySelector("#num2").value+"="+document.querySelector("#score").innerHTML+"</div><div class='col-md-2'><button onclick='remove(this)'>R</button><button onclick='edit(this)'>E</button></div></div>"
}
function remove(e){
	e.parentElement.parentElement.remove();
}

function edit(e){
	if (document.querySelector("#a")){document.querySelector("#a").parentElement.parentElement.children[0].innerHTML = document.querySelector("#a").parentElement.parentElement.children[0].children[0].value;}
	e.parentElement.parentElement.children[0].innerHTML = '<input type="text" id="a" value = '+ e.parentElement.parentElement.children[0].innerHTML + ' /><button onclick="edit2(this)">ok</button>';
}
function edit2(e){
	e.parentElement.innerHTML = document.querySelector("#a").value;
}



let observer = new MutationObserver(callback);
    
function callback (mutations) {
  //document.body.style.backgroundColor = "black";
  //setTimeout(function(){document.body.style.backgroundColor = "white"}, 50)
  let log = document.querySelector("#log");
  log.classList.add("mutant");
  setTimeout(function(){log.classList.remove("mutant")}, 800)

}

observer.observe(document.querySelector("#log"), {childList: true});
