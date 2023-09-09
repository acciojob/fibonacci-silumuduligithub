function fun(num){
	if(num == 0 || num == 1)return num;
	return fun(num - 1) + fun(num - 2);
}
function fibonacci(num) {
// your code here
	return fun(num);
}

module.exports = fibonacci;
