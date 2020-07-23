/**
* The 'parser' variable is the entry point for your parser. Write logic inside of the provided function and return a value
* Constants and utility functions can be created outside of the parser
* The provided ctx parameter is an object that contains data and model information on this item
* @param {context} ctx 
* @returns {rtn} */
parser = (ctx) => {
  var settings = JSON.parse(ctx.datasource[0]["data"]["adapter_settings"]);
  console.log(settings['path']);
  if(settings['path'] != undefined)
    return settings['path'];
  else
    return "IMG_9322_1.MP4";
}