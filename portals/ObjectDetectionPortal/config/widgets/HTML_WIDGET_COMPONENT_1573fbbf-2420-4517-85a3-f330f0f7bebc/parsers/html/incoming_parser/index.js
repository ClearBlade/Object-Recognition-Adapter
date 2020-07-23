//JavaScript
/**
* The 'parser' variable is the entry point for your parser. Write logic inside of the provided function and return a value
* Constants and utility functions can be created outside of the parser
* The provided ctx parameter is an object that contains data and model information on this item
* @param {context} ctx 
* @returns {rtn} */
parser = (ctx) => {
    var frame = document.getElementById('frameId');

    // setInterval(()=>{
    //     var prev_base64 = datasources.latestBase64.latestData();
    //     var msg = datasources.results.latestData();
    //     if(Object.keys(msg).length != 0){
    //         msg = JSON.parse(msg.replaceAll('\'', '"'));
    //         if(prev_base64 != undefined && prev_base64 != msg['base64_encoded_image']){
    //             frame.src = "data:image/jpeg;base64,"+msg['base64_encoded_image'];
    //             datasources.latestBase64.sendData(msg['base64_encoded_image']);
    //         } else if(prev_base64 == undefined){
    //             frame.src = "data:image/jpeg;base64,"+msg['base64_encoded_image'];
    //             datasources.latestBase64.sendData(msg['base64_encoded_image']);
    //         }
    //     }
    // }, 1000);
}