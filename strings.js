// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
function characPosit(character)
{
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(var i = 0; i<alphabet.length; i++)
	{
		if(alphabet[i] === character)
		{
			return i+1;
		}
	}
	return -1; //if not found in alphabet
}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
function repeatStr (n, s) 
{
	var str = "";
	for(var i = 0; i<n; i++)
	{
		str += s;
	}

	return str;
}