window.onload =function1; 


	function function1(){
	var boun = document.querySelectorAll(".boundary");
	//Ex 1


	document.getElementById('boundary1').addEventListener("mouseover",function(){
		document.getElementById('boundary1').className='boundary youlose';
	});

	//Ex 2

	for(let i=0;i<=boun.length-1;i++){
		boun[i].addEventListener('mouseover',function(){
			for(var j =0;j<boun.length-1;j++){
				boun[j].className="boundary youlose";
				console.log(boun[i]);
			}
		});
	}

	//Ex 3
	document.getElementById('end').addEventListener('mouseover',function(){
		window.alert("You win!");
	});
}