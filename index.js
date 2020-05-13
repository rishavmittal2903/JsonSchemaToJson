var _result={};
var _initialData={}
function replaceSpecialCharacter(value)
{
  return value.replace("#","").replace("/","");
}
function extractJsonKeys(jsonSchema,_result)
{
  
    for(var key in jsonSchema)
    {
     
      if(jsonSchema[key].constructor===Object)
      {
        if(!_result.hasOwnProperty(key))
        {
          _result[key]=new Object();
          
        }
        _result[key]=extractJsonKeys(jsonSchema[key],_result[key]);
      }
      else
      {
        if(key==="$ref")
        {
          _result=extractJsonKeys(_initialData[replaceSpecialCharacter(jsonSchema[key])],_result);
        }
        else
        {
            _result[key]=jsonSchema[key];
        }
      }
    }
    return _result;
}
exports.convertJsonSchemaRefToJson=(jsonSchema)=>{
    _initialData=Object.assign(jsonSchema,{});
    return extractJsonKeys(jsonSchema,_result);
}