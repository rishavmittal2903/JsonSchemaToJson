# JSON Schema Reference to Json

This package convert json schema reference into normalized json format

## Installation

Use the package manager [npm](https://www.npmjs.com/package/jsonschematojson) to install foobar.

```bash
npm install jsonschematojson
```

## Usage

```python
const {convertJsonSchemaRefToJson}= require("jsonschematojson")

let sampleJsonschemaInput={"$schema":"","$id":"","title":"Sample","sampleData1Type":{"type":"string","enum":["test1","test2"]},"sampleData2Type":{"type":"object","required":["Test1","Test2"],"properties":{"Test1":{"type":"string"},"Test2":{"type":"string"}}},"Header":{"type":"object","required":["Name","Id","Designation"],"properties":{"Name":{"type":"string"},"Id":{"type":"string"},"Designation":{"type":"string"}}},"ItemType":{"type":"object","required":["creationDateTime","sampleData1","sampleData2","sampleData3"],"properties":{"creationDateTime":{"type":"string","format":"date-time"},"sampleData1":{"$ref":"#/sampleData1Type"},"sampleData2":{"$ref":"#/sampleData2Type"}}},"type":"object","required":["Header","item"],"properties":{"Header":{"$ref":"#/Header"},"item":{"type":"array","items":{"$ref":"#/ItemType"}}}}
let output=convertJsonSchemaRefToJson(sampleJsonschemaInput)

Output result:{"$schema":"","$id":"","title":"Sample","sampleData1Type":{"type":"string","enum":["test1","test2"]},"sampleData2Type":{"type":"object","required":["Test1","Test2"],"properties":{"Test1":{"type":"string"},"Test2":{"type":"string"}}},"Header":{"type":"object","required":["Name","Id","Designation"],"properties":{"Name":{"type":"string"},"Id":{"type":"string"},"Designation":{"type":"string"}}},"ItemType":{"type":"object","required":["creationDateTime","sampleData1","sampleData2","sampleData3"],"properties":{"creationDateTime":{"type":"string","format":"date-time"},"sampleData1":{"type":"string","enum":["test1","test2"]},"sampleData2":{"type":"object","required":["Test1","Test2"],"properties":{"Test1":{"type":"string"},"Test2":{"type":"string"}}}}},"type":"object","required":["Header","item"],"properties":{"Header":{"type":"object","required":["Name","Id","Designation"],"properties":{"Name":{"type":"string"},"Id":{"type":"string"},"Designation":{"type":"string"}}},"item":{"type":"array","items":{"type":"object","required":["creationDateTime","sampleData1","sampleData2","sampleData3"],"properties":{"creationDateTime":{"type":"string","format":"date-time"},"sampleData1":{"type":"string","enum":["test1","test2"]},"sampleData2":{"type":"object","required":["Test1","Test2"],"properties":{"Test1":{"type":"string"},"Test2":{"type":"string"}}}}}}}}

```

## Contributing
For major changes, please open an issue first to discuss what you would like to change.



