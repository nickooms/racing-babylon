var Point = function() {
	var point, type, arg, isObject, isArray, length;
	this.x = undefined;
	this.y = undefined;
	length = arguments.length;
	switch (length) {
		case 1:
			arg = arguments[0];
			isObject = typeof arg == 'object';
			if (isObject) {
				isArray = arg.length != undefined;
				if (isArray) type = 'array';
				switch (type) {
					case 'array':
						point = arg;
						this.x = point[0];
						this.y = point[1];
						break;
					default:
						break;
				}
			}
			break;
		default:
			break;
	}
};
Point.prototype.toString = function() {
	return '[' + this.toFixed(2).join(',') + ']';
};
Point.prototype.toFixed = function(digits) {
	return [this.x.toFixed(digits), this.y.toFixed(digits)];
};