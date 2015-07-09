var theString = "YOU GONNA CLICK IT?";
getLength = function(stringLength){
	
	document.write(stringLength.length);
}

getLength(theString);

function getValue()
{
var x=document.getElementById("Clicko");
//x.innerHTML = theString;
//document.write(x.outerHTML);
x.outerHTML = '<p id="Click2" onclick="getValue2()">' + theString + '</p>';
}

function getValue2()
{
var y=document.getElementById("Click2");
//x.innerHTML = theString;
//document.write(x.outerHTML);
y.outerHTML = '<h1 id="Clicko" onclick="getValue()">and again!</h1>';
}
