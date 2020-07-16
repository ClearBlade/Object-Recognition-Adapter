/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

/*
* Config Data Description:
* 1. token - This is the user token which is used by the adapter to store the results in a collection on the platform
* 2. fps - Frames per second parameter for video processing. Normal fps values = 24
* 3. confidence - The minimum threshold prediction probability
* 4. customObjects - The objects to detect in the video
* 5. resultCollection - Name of the collection in which you want to store the results
* 6. detection_interval - After this interval, the frames will be processed. Can be used to speed up the processing
*    since it skips the frames. Default value is 1.
* 7. video_path - Path of the video to process. This can be a file path or a streaming protocol (RSTP). Default is 
*    IMG_9322_1.MP4 which is a video file inside the adapter.
*/

function configService(req,resp){
    // These are parameters passed into the code service
    var params = req.params
    ClearBlade.init({request:req});
    var msg = ClearBlade.Messaging();
    
    var configData = {
        token: req.userToken,
        fps: 1,
        confidence: 45,
        customObjects: ["person", "boat"],
        resultCollection: "result",
        detection_interval: 1,
        video_path: './IMG_9322_1.MP4'   
    }

    msg.publish("send/_broadcast",JSON.stringify(configData));

    resp.success("Success");
}
