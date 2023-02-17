var FCM = require('fcm-node')
const Server_key = 'AAAAMbWSmRM:APA91bGRuvgT_8wdN0uh65a-XxMBiAgbYNDxRN5AYDEtl75_anzHb7qowu0YpjH4yGUABm_jcFcEiznZBVNkJKdy9Xzxruv4eAcHiDPo3pWuXVK15zjTIWC_WPm8BngJ0r_SWulVYNPD'

var fcm = new FCM(Server_key);

let pushNoti = (req, res) => {
    try {
        var message = {
          to: req.params.tokenDevice,
          notification: {
             //you can send only notification or only data(or include both)
            // title: 'test chết app',
            // body: 'ddddddddddđ',
            // idOder: "RJ2096268",
            // image: "https://danviet.mediacdn.vn/2021/1/6/13197933916907312977860828685791406656205212o-16099346980101815349486.jpg"
          },
          android: {
            "priority": "high"
          }
        };
    
        fcm.send(message, function (err, response) {
          if (err) {
            res.status(401).json({
              messege: false
            })
          } else {
            res.status(200).json({
              messege: true
            })
          }
    
        });
      } catch (error) {
        console.log(error)
        res.status(401).json({
          messege: false
        })
      }
}
//export all the functions
module.exports = {
    pushNoti
};