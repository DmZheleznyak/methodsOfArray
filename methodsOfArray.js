Array.prototype.myMap = function(callback, arg) {
	const returnArray = []
	const arr = arg || this
	for (let i = 0; i < arr.length; i++ ) {
		returnArray.push( callback(arr[i], i, arr ) )
	}
	return returnArray
}


Array.prototype.myReduce = function(callback, initValue) {
	
	var resultCallback = this[0]
 
	if (initValue !== undefined) {
		resultCallback = callback(initValue, this[0], 0, this)
	}
	
	for ( let i = 1; i < this.length; i++) {
		resultCallback = callback(resultCallback, this[i], i, this)
	}

	return resultCallback
}

Array.prototype.myforEach = function( callback, arg ) {

  const arr = arg || this

  for (let i = 0; i < arr.length; i++ ) {
		if (arr[i] === undefined ) continue	
  	callback( arr[i], i, arr)
  }
// always return undefined
}

Array.prototype.mySome = function( callback, arg ) {

  const arr = arg || this

  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === undefined ) continue
    if ( !!callback( arr[i], i, arr) ) return true;    
	}
	
  return false
}

Array.prototype.myFilter = function( callback, arg ) {
  const returnArray = []
  const arr = arg || this

  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === undefined ) continue
    if ( !!callback( arr[i], i, arr) ) returnArray.push( arr[i] )     
  }
  
  return returnArray
}

Array.prototype.myFlat = function( ) {
  const returnArray = []
  for (let i = 0; i < this.length; i++) {

    if (this[i] === undefined) continue

    if ( !Array.isArray( this[i] ) ) returnArray.push(this[i])

    if ( Array.isArray( this[i] ) ) {

      for (let j = 0; j < this[i].length; j++) {
        if (this[i][j] === undefined) continue
        returnArray.push( this[i][j] )
      }

    }

  }
  
  return returnArray
}

console.log( [1,2,[3,4]].myFlat() )