	function calc(valueue) {
		var val = valueue;
		var str = document.getElementById("display").value;
		var element = str.charAt(str.length-1);
		if(	isNaN(element) && isNaN(val))
		{
			document.getElementById("display").value+=element;
			str=document.getElementById("display").value;
			setTimeout(function(){
    	document.getElementById("display").value ="You are Dumb";
		}, 850);

			setTimeout(function(){
    	document.getElementById("display").value =str;
		}, 2000);
			
		}	
		else
		{
			document.getElementById("display").value += val;
		}
	}
	
function equal() {
	var str = document.getElementById("display").value;
	var element = str.charAt(str.length-1);
	var element2 = str.charAt(str.length-2);
	if(isNaN(element))
	{
		document.getElementById("display").value="Expression can't end with operator";
		setTimeout(function(){
    	document.getElementById("display").value = str;
		}, 1250);
	}
	else if(element2=='/' && element=='0')
	{
		document.getElementById("display").value="Division by 0 -- Invalid !";
		setTimeout(function(){
    	document.getElementById("display").value = str;
		}, 1250);		
	}
	else
	{
		var result=eval(document.getElementById("display").value);
	document.getElementById("display").value=result;
	}
}

function back() {
	var str = document.getElementById("display").value;
	var len=str.length-1;
	var value = str.substring(0,len);
	document.getElementById("display").value= value;
	return true;
}

function reset(){
	document.getElementById("display").value="";
}