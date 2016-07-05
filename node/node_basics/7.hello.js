/* 示例1 */
// exports.world = function() {
// 	console.log('Hello, World!');
// }

/* 示例2 */

function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	};
	this.sayHello = function() {
		console.log('Hello   ' + name);
	};
};
module.exports = Hello;