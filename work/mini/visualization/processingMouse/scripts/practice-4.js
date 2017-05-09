var time = setInterval(function() 
{
	function rad(strelka, turn)
	{
		strelka.setAttribute('transform', 'rotate('+ turn +' 602 311)')
	}
		var da = new Date()
		rad(seconds, 6*da.getSeconds())  
		rad(minutes, 6*da.getMinutes())
		rad(hours, 30 * (da.getHours() % 12) + da.getMinutes()/2);
		console.log(da);
},
1000);

Request('./data/tree.svg', function(evt) {
  	var xml = this.responseXML;
  	var mypaths = xml.documentElement.querySelectorAll('path');//////////this part
	var new_g = document.createElement('g');
	document.querySelector('svg').appendChild(new_g);
	new_g.className = "tree";
	//console.log(new_g);
	//console.log(mypath);
var new_path;
var i;
[].forEach.call(mypaths, function (mypath, i){ 
	new_path = document.createElement('path')});
// 	// console.log(mypaths);
// 	// console.log(new_path);
	
setInterval(function(){
	var path = new_g.appendChild(new_path),  
	i * 1000});

});

 // 	var new_parent = document.querySelector('.tree');
	// for(var x = 0; x < mypaths.length; x++)
	// {
	// 	new_path = document.createElement('path');
	// 	console.log(new_path);
	// 	setTimeout(function()
	// 	{
	// 		new_g.appendChild(new_path);
	// 		console.log(x);
	// 		console.log(new_path);
	// 	},
	// 	x * 1000)};
	// });

//});
// mypaths.forEach.call(function(mypaths){
// 	new_path = document.createElement('path')});
// }




