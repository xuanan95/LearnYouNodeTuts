var fs = require('fs');

fs.readFile(process.argv[2],function(err,data){
	var content=data.toString();
	console.log(content.split('\n').length-1);
})
