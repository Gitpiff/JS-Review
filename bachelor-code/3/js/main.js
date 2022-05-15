const contestants = document.querySelectorAll(".contestant") //we need to specify that we are looking for a class

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle("hidden")
	}else{
		alert("Wrong!");
	}
}
