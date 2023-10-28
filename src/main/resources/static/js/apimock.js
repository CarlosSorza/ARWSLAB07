//@author hcadavid

export const apimock = (function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];
	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];
	 mockdata["carlos"]=[{author:"carlos","points":[{"x":65,"y":45},{"x":89,"y":43}],"name":"planocarlos"},
	 {author:"carlos","points":[{"x":76,"y":23},{"x":56,"y":9}],"name":"planocarlos2"}];
	 mockdata["francisco"]=[{author:"francisco","points":[{"x":65,"y":45},{"x":89,"y":43}],"name":"planofrancisco"},
	 {author:"francisco","points":[{"x":76,"y":23},{"x":56,"y":9}],"name":"planofrancisco2"}];

	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		}
	}	

})();







