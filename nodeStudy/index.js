var fs = require("fs");
var data = fs.readFileSync(__dirname + "/configRouter.js","utf-8");

data = data.replace(/\s/g,'');

var dataTemp = data.split('.state(')

var datas = []
for(var i = 0; i < dataTemp.length ; i++){
  var value = dataTemp[i];
  if(value){
    var values = value.split(',{');
    var name = values[0];
    var val = values[1];
    if(val){
      var index = val.lastIndexOf('}');
      var str = val.substr(0, index);
      str = '{' + str;
      str += '}';
    }
    // console.log(str)

    //str = JSON.parse(str)
    var arr = {
      'routerName': name,
      'routerConfigure': str
    }
    datas.push(arr);
  }
}
// console.log(datas);
// fs.writeFileSync(__dirname + "/txt.txt", JSON.stringify(datas), function(err) {
//   if(err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });
// fs.writeFile(__dirname + '/txt.txt', JSON.stringify(datas), function (err) {
//    if(err) {
//     console.error(err);
//     } else {
//        console.log('写入成功');
//     }
// });





var data2 = fs.readFileSync("txt.txt","utf-8");

var data2s = data2.replace(/\"/g,'')

fs.writeFile("txt1.txt", data2s, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

