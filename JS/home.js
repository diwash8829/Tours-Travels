let x = document.getElementsByClassName("aa");

for(var i=0; i<x.length; i++)
{
	x[i].addEventListener("click", function(){
			this.style.color="red";
	});
}