var House = function() {
	var points = arguments;
	for (var i = 0; i < points.length; i++) {
		this.push(points[i]);
	}
};
House.prototype = Array.prototype;