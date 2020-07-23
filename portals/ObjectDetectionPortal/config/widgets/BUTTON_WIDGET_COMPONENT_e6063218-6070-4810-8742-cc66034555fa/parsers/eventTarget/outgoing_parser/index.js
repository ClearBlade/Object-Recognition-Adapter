/**
* The 'parser' variable is the entry point for your parser. Write logic inside of the provided function and return a value
* Constants and utility functions can be created outside of the parser
* The provided ctx parameter is an object that contains data and model information on this item
* @param {context} ctx 
* @returns {rtn} */
parser = (ctx) => {

  // var settings = {};

  // if(datasources.fps.latestData().fps != undefined)
  //   settings['fps'] = datasources.fps.latestData().fps;
  // else if(datasources.fps.latestData() != "")
  //   settings['fps'] = parseInt(datasources.fps.latestData());
  // else
  //   settings['fps'] = 1;

  // if(datasources.confidence.latestData().confidence != undefined)
  //   settings['confidence'] = datasources.confidence.latestData().confidence;
  // else if(datasources.confidence.latestData() != "")
  //   settings['confidence'] = parseInt(datasources.confidence.latestData());
  // else
  //   settings['confidence'] = 45;

  // if(datasources.interval.latestData().interval != undefined)
  //   settings['detection_interval'] = datasources.interval.latestData().interval;
  // else if(datasources.interval.latestData() != "")
  //   settings['detection_interval'] = parseInt(datasources.interval.latestData());
  // else
  //   settings['detection_interval'] = 1;

  // if(datasources.objects.latestData().objects != undefined)
  //   settings['customObjects'] = datasources.objects.latestData().objects;
  // else if(datasources.objects.latestData() != ""){
  //   // console.log(datasources.objects)
  //   var objects = datasources.objects.latestData().split(',');
  //   settings['customObjects'] = objects;
  // }
  // else
  //   settings['customObjects'] = ["person", "boat"];

  // settings['path'] = "IMG_9322_1.MP4";
  // console.log(settings);

  // db_entry = {};
  // db_entry["adapter_name"] = "ObjectRecognitionAdapter";
  // db_entry["topic_root"] = "";
  // db_entry["adapter_settings"] = JSON.stringify(settings);

  // CB_PORTAL.ClearBlade.init({
	// 		systemKey: CB_PORTAL.ClearBlade.systemKey,
	// 		systemSecret: CB_PORTAL.ClearBlade.systemSecret,
	// 		useUser: {
	// 			email: CB_PORTAL.ClearBlade.user.email,
	// 			authToken: CB_PORTAL.ClearBlade.user.authToken
	// 		}
	// });

  // var col = CB_PORTAL.ClearBlade.Collection({collectionName: "adapter_config"});
  // var callback = function (err, data) {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log('Sent');
  //     CB_PORTAL.Loader.show('video');
  //     CB_PORTAL.Loader.show('list');
  //     console.log(datasources.start);
  //     datasources.start.sendData(JSON.stringify({}));
  //   }
  // };

  // console.log(db_entry)

  // col.create(db_entry, callback);
  CB_PORTAL.Loader.show('video');
  CB_PORTAL.Loader.show('list');
  console.log(datasources.start);
  datasources.start.sendData(JSON.stringify({}));
  return {};
}