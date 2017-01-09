
module.exports = {
  dataTypes: function(input) {
   
  if(typeof(input) === 'number')
  {
    if (input < 100)
      {return 'less than 100';}
    else if(input > 100)
      { return 'more than 100';}
    else{return 'equal to 100';}
  }
  if(typeof(input) === 'object')
  {
    if(input instanceof (Array))
    {
      if(input.length >= 3)
      {
        return input[2];
      }
      else{return undefined;}
    }
    else
    {
      return 'no value';
    }
  }
  if(typeof(input) === 'string')
  {
    return input.length;
  }
  if(typeof(input) === 'boolean')
  {
    return input;
  }
  if(typeof(input) === 'undefined')
  {
    return 'no value';
  } 
  if(typeof(input) === 'function')
  {
    return input (true);
  } 
}
}