function mapping(notVisited){
	//var notVisited = [/*user input*/];
	function distance(firstNodeX,firstNodey,secondNodex, secondNodey)
{
	var x1 = firstNodex;
	var x2 = secondNodex;
	var yl = firstNodey;
	var y2 = secondNodey;

	return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
}
	var allGroceries = []

	allGroceries.push({key:"start", end:true, x:1, y:0});

	allGroceries.push({key:"canneddrinks", end:true, x: 1 , y: 1 });
	allGroceries.push({key:"bottledsoda", end:false, x: 1 , y: 2 });
	allGroceries.push({key:"energydrinks", end:false, x: 1 , y: 3 });
	allGroceries.push({key:"water", end:true, x: 1 , y: 4 });

	allGroceries.push({key:"popcorn", end:true, x: 2 , y: 1 });
	allGroceries.push({key:"chips", end:false, x: 2, y: 2 });
	allGroceries.push({key:"utensils", end:false, x: 2, y: 3 });
	allGroceries.push({key:"candy", end:true, x: 2, y: 4 });

	allGroceries.push({key:"pies", end:true, x: 3, y: 1 });
	allGroceries.push({key:"icecream", end:false, x: 3, y: 2 });
	allGroceries.push({key:"popsicles", end:false, x: 3, y: 3 });
	allGroceries.push({key:"toppings", end:true, x: 3, y: 4 });

	allGroceries.push({key:"frozenpizza", end:true, x: 4, y: 1 });
	allGroceries.push({key:"tvdinners", end:false, x: 4, y: 2 });
	allGroceries.push({key:"frozenvegetables", end:false, x: 4, y: 3 });
	allGroceries.push({key:"frozenfish", end:true, x: 4, y: 4 });

	allGroceries.push({key:"apples", end:true, x: 4, y: 0.5});
	allGroceries.push({key:"oranges", end:true, x: 4.5, y: 0.5 });

	allGroceries.push({key:"popcorn", end:true, x: 5 , y: 1 });
	allGroceries.push({key:"chips", end:false, x: 5, y: 2 });
	allGroceries.push({key:"utensils", end:false, x: 5, y: 3 });
	allGroceries.push({key:"candy", end:true, x: 5, y: 4 });


	var currentNode = "start"	;
	var nextnode;
	var directions = [];

	while(notVisited.length != 0)
	{
		directions.push(allGroceries[currentNode].key);
		var currentMinDist = Number.MAX_SAFE_INTEGER;
		for (var i = 0; i < notVisited.length; i++) 
		{console.log(allGroceries[currentNode])
			var distance = distance(allGroceries[currentNode].x,
				allGroceries[currentNode].y, allGroceries[notVisited[i]].x, 
				allGroceries[notVisited[i]].y);
			if (distance < currentMinDist)
			{
				currentMinDist = distance;
				nextnode = notVisited[i];
			}
		}
		currentNode = nextnode;
		currentIndex = notVisited.indexOf(currentNode);
		notVisited.splice(currentIndex, currentIndex + 1);
	}

	for(var i = 0; i < directions.length; i++){
		document.getElementById(directions[i]).style.color = "blue";
	}
}

	function getIndexFromKey(key, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].key == key)
				return i
		}
		else return -1;

	}

var x = mapping(["apples, oranges"])
