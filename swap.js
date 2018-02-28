	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input)
	{
		var input2 = input.toUpperCase();
		var str = "";
		
		for(i=0; i<input.length; i++)
		{
			if(input[i] === input2[i])
			{
				str += input[i].toLowerCase();
			}
			else
			{
				str += input2[i];
			}
		}
		return str;
	}