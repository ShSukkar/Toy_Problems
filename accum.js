// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(input)
{
	var str = "";

    for(i=0; i<input.length; i++)
    {
    	for(j=1; j<=i+1; j++)
    	{
    		if(j===1)
    		{
    			str += input[i].toUpperCase();
    		}
    		else
    		{
    			str += input[i].toLowerCase();
    		}
    	}
    	str += "-";
    }
    //Remove the last "-" from str:
    str = str.split("");
    str.splice(str.length-1, 1);
    str = str.join("");

    return str;
}