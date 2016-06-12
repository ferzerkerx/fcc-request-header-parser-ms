'use strict';


function ReqHeaderService () {


    this.returnWhoAmI = function (req, res) {

        var userAgent = req.headers['user-agent'];
        var parenthesisIndex = userAgent.indexOf('(');
        if (parenthesisIndex >= 0) {
            userAgent =userAgent.substring(parenthesisIndex + 1, userAgent.indexOf(')'));
        }
        var whoAmI = {ipaddress: req.ip, language: req.headers['accept-language'].split(",")[0], software: userAgent};

        res.json(whoAmI);
    };

}

module.exports = ReqHeaderService;