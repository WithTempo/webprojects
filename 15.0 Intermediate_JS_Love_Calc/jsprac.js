function fibonacciGenerator(n) {
	var a = 0;
	var b = 1;
	var c = 0;
	var my_array=[];

	for(var x=0; x<n; x++){
	my_array.push(a)
	c = a+b;
	a = b;
	b = c;
	}

	console.log(my_array);
	return my_array;
}

fibonacciGenerator(0);
fibonacciGenerator(1);
fibonacciGenerator(2);
fibonacciGenerator(3);
fibonacciGenerator(15);