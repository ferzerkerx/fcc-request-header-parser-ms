'use strict';

var path = process.cwd();
var ReqHeaderService = require(path + '/app/service/ReqHeaderService.js');

module.exports = function (app) {


    var reqHeaderService = new ReqHeaderService();

    app.route('/whoami')
        .get(reqHeaderService.returnWhoAmI);

};
