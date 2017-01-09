module.exports = {
	findMinMax: function(inputarray) {
		var min = inputarray[0];
		var max=inputarray[0];
		for(i=0;i<inputarray.length;i++)
		{
		  if(inputarray[i]<min)
		  {
		    min=inputarray[i];
		  }
		  if(inputarray[i]>max)
		  {
		    max=inputarray[i];
		  }
		}
		var outputarray=[min,max];
		return outputarray;
	}
}