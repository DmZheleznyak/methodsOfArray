Array.prototype.myMap = function(callback, thisArg) {
// T (thisArg), A ()    
	var thisArgument;

	if (this == null) {
		throw new TypeError(' this is null or not defined');
	}

	var O = Object(this); // Object ведёт себя идентично коду new Object()
// Object создаёт объект-обёртку для переданного значения
	console.log(`O.length`, O.length )
	var lengthOurArray = O.length >>> 0;  // Логический сдвиг вправо ??? 
// Сдвигает двоичное представление числа a на b разрядов вправо. Освобождающиеся разряды заполняются нулями.    
	
	if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}

	if (arguments.length > 1) {
		thisArgument = thisArg;
	}

	var newArray = new Array(lengthOurArray); // создаём массив с той же длинной , что обрабатываемый массив

	var k = 0; // переменная счётчик и индекс элемента

	while ( k < lengthOurArray ) {

		var kValue, mappedValue;
		
		if (k in O) {
			kValue = O[k];
			mappedValue = callback.call(thisArgument, kValue, k, O);
			newArray[k] = mappedValue;
		}
		k++;
	}

	return newArray;
};

	
	const r = [1,2,3].myMap( a => a + a )
	const v = [ 10, 20, 30].myMap( a => a * a )

	console.log( r, v )