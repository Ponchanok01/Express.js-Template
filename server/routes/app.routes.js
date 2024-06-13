var userManagement = require("../project/service/management/service/userServices");


;module.exports = function (app) {

  var Path = "/user";
  // // user
  app.get(userPath + "/",function (req,response){
    response.status(200).json(new Date());
  })

  app.get(path + "/setting/message", Setting_Message.onQuery);
  app.post(path + "/setting/message", Setting_Message.onCreate);
  app.put(path + "/setting/message", Setting_Message.onUpdate);
  app.delete(path + "/setting/message", Setting_Message.onDelete); 






//
//
//   // end Package Marketplace
//
//   /*----- Catch 404 Error -----*/
//   app.use(function (req, res) {
//     res.status(404).json(resMsg.getMsg(40400));
//   });
//
//   /*----- Catch 500 Error -----*/
//   app.use(function (err, req, res) {
//     res.status(501).json(resMsg.getMsg(50001));
//   });
};




