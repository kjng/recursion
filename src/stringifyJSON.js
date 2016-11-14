// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (typeof obj === 'number' || obj === null || obj === true || obj === false) {
		return '' + obj;
	}
	else if (typeof obj === 'string') {
		return '"' + obj + '"';
	}
	else if (Array.isArray(obj)) {
		if (obj.length) {
			var outputArray = [];
			obj.forEach(function(element) {outputArray.push(stringifyJSON(element))});
			return '[' + outputArray + ']';
		}

		return '[' + obj + ']';
	}
	else if (typeof obj === 'object') {
		var keys = Object.keys(obj);
		var objArray = [];

		keys.forEach(function(key) {
			if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
				objArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
			}
		});

		return '{' + objArray + '}';
	}
};