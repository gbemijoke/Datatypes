module.exports = {
  aritGeo: function(inputarray) {
    if(inputarray.length<1)
    {
      return 0;
    }
    else if(inputarray.length==1)
    {
      return -1;
    }
    else
    {
      var length = inputarray.length;
      var tvalue = inputarray[0];
      var result = inputarray[0]+((inputarray.length-1)*(inputarray[length-1]-inputarray[length-2]));
      if(result==inputarray[length-1])
      {
        return "Arithmetic";
      }
      var temp = Math.pow((inputarray[length-1]/inputarray[length-2]),length-1);
      var result2=inputarray[0]*temp;
      if(result2==inputarray[length-1])
      {
        return "Geometric";
      }
      return -1;

    }
  }
}