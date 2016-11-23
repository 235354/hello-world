//var hw = document.getElementById('hw');

//hw.addEventListener('click', function(){
    //alert('Hello world');
//})

var IpRegistType = {Host, Group};

var type = "allow";
var test = new IpFilterObject(type);
console.log(test);
document.write(test.type);
// document.write(test);

function IpFilterObject(_filterType, _maxIpFilterCount) { 

	this.filterType = _filterType; // allow or deny
	this.maxIpFilterCount = _maxIpFilterCount; // maxIpFilterCount
	this.nowIpFilterCount = 0; // initIpFilterCount
	var filterInfo = {type, beginAddr, endAddr}; // Filter[i]'s 3 info
	'addIpRegistry' = function(_type, _beginIp, _endIp) {
		setDynamic		

	}

	'checkValidFilterInfo' = function {

	}
}

IpFilterObject.prototype.addIpRegistry = function(first_argument) {
	// body...
	
};