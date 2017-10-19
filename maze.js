window.onload =function1; 


	function function1(){
	//Ex 1


	document.getElementById('boundary1').addEventListener("mouseover",function(){
		document.getElementById('boundary1').className='boundary youlose';
	});

	//Ex 2
	var boun = document.querySelectorAll(".boundary");
	for(i=0;i<=boun.length;i++){
		boun[i].onmouseover=function(){
			for(var j =0;j<boun.length;j++){
				boun[j].className="boundary youlose";
			}
		}
	}
}