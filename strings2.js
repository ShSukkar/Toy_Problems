//  Given a sequence of items and a specific item in that sequence, return the item
// 	immediately following the item specified. If the item occurs more than once in a sequence,
// 	return the item after the first occurence. This should work for a sequence of any type.
// 	When the item isn't present or nothing follows it, the function should return null
//  nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
//  nextItem("testing", "t") # "e"

	function nextItem(items, elem)
	{
		var indexItem = items.indexOf(elem);
		if(indexItem != -1)
		{
			if(indexItem != items.length-1)// if elem isn't the last elem in items
			{
				return items[indexItem+1];
			}
			else
			{
				return elem + " is already the last element in your items";
			}
		}
		return "elem doesn't exist";
	}

//  We need a function that can transform a number into a string.
// 	What ways of achieving this do you know?
// 	numberToString(123); // returns '123';`   
// 	numberToString(999); // returns '999';`

	function numberToString(num) 
	{
	  //Way 1:
	  // var strNumber = ""+num;
	  // return strNumber;

	  //Way 2:
	  var strNumber = num.toString();
	  return strNumber;

	}