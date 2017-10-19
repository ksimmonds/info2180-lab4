window.onload =function1; 


	function function1(){
	var boun = document.querySelectorAll(".boundary");
	//Ex 1


	document.getElementById("boundary1").addEventListener("mouseover",function(){
		document.getElementById("boundary1").className="boundary youlose";
	});

	//Ex 2

	for(let i=0;i<=boun.length-1;i++){
		boun[i].addEventListener("mouseover",function(){
			for(var j =0;j<boun.length-1;j++){
				boun[j].className="boundary youlose";
				document.getElementById("status").innerHTML="You Lose!";
			}
		});
	}

	//Ex 3
	/*document.getElementById("end").addEventListener("mouseover",function(){
		window.alert("You win!");
	});*/

	//Ex 4
	document.getElementById("start").addEventListener("click",function(){
		for(var i=0;i<boun.length-1;i++){
			boun[i].className="boundary";
		}
	});

	//Ex 5
	document.getElementById("end").addEventListener("mouseover",function(){
		if(!document.getElementById("boundary1").classList.contains("youlose")){
			document.getElementById("status").innerHTML="You Win!";
		}
		else{
			document.getElementById("status").innerHTML="You Lose!";
		}
	});
}