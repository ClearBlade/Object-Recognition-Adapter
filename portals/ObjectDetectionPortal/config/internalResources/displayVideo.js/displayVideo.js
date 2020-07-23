// var frame = document.getElementById('frameId');

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