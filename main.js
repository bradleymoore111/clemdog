function boldEachElement(stuff){
	console.log(stuff);
	for(var i=0;i<stuff.length;i++){
		setTimeout(callback(stuff,i),2000*i);
	}
}
var sum=0;
var intro = "Sum = ";
function doStuff(stuff, index){
	var s="[";
	for(var j=0;j<stuff.length;j++){
		s+= (j==index)?"<b>"+stuff[j]+"</b>,":stuff[j]+",";
	}
	document.getElementById('array').innerHTML = s+"]";
	intro += (index==0)?stuff[index]:" + "+stuff[index];
	sum += parseFloat(stuff[index]);
	document.getElementById('sum').innerHTML = ("<p>" + intro + " = " + sum + "</p>");
}
function callback(a,i){
    return function(){
    	doStuff(a,i);
    }
}