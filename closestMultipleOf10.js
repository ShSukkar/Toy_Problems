 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) 
 {
 	var num2;
 	var numMod = num % 10;

 	if(numMod <5)
 	{
 		num2 = num - numMod;
 	}
 	else
 	{
 		num2 = num + (10 - numMod);
 	}

 	return num2;
 }