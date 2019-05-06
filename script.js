const http = require('http');

http.createServer((req, res) => {
  res.end(console.log(getTree(obj)));
}).listen(8000, "127.0.0.1");

const obj = {
  one: 1,
  two: "2",
  three: [3,1,"3"],
  four: {
    fourOne: 1,
    fourTwo: {
      fourTwoOne: 1,
    }
  },
  five: [23, [123, 1]],
  fiveOne: {
    fiveOneOne:1
  }
}

let getTree = (tree) => {
  let paths = [];

  let getPath = (obj, str) => {
    Object.keys(obj).forEach((key) => {
      if(Array.isArray(obj[key]) || typeof obj[key] == 'object'){
        getPath(obj[key], str ? str + " > " + key : key);
      }
      else{
        if(obj[key] == 1){
          paths.push(str ? str + " > " + key : key);
        }
      }
    })
  }
  getPath(tree, "");
  return paths;
}
