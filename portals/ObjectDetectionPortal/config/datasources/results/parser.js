/**
* The 'parser' variable is the entry point for your parser. Write logic inside of the provided function and return a value
* Constants and utility functions can be created outside of the parser
* The provided ctx parameter is an object that contains data and model information on this item
* @param {context} ctx 
* @returns {rtn} */
parser = (ctx) => {
  var frame = document.getElementById('frameId');
  
  if(Object.keys(ctx.data).length != 0){
    msg = JSON.parse(ctx.data.replaceAll('\'', '"'));
    CB_PORTAL.Loader.hide('video');
    CB_PORTAL.Loader.hide('list');
    frame.src = "data:image/jpeg;base64,"+msg['base64_encoded_image'];
  
    var widgetData = datasources.widgetData.latestData();
    for(var i=0; i<msg["objects"].length; i++){
      var data = {
        "label": "Object: " + msg["objects"][i]["name"] + ' | Confidence: ' + msg["objects"][i]["percentage_probability"] + '%' + ' | Time Stamp: ' + msg["approx_time_stamp_secs"],
        "value":{"item_id": msg["objects"][i]["name"]+msg["approx_time_stamp_secs"]}
      }
      widgetData.unshift(data);
      }
    datasources.widgetData.sendData(widgetData);
  }
      
  return ctx.data
}