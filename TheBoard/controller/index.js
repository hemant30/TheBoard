(function (controllers) { 

    var workpaperController = require('./workpaperController.js');
    controllers.init = function (app, cors) {
        workpaperController.init(app, cors);
    };


})(module.exports)