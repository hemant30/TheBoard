(function (workpaper) {
    
    var validator = require("validator");
    var uuid = require("node-uuid");
    var data = require("../data");
    
    var test = function () {
        return [{ name: 'Hemant' }]
    };
    
    workpaper.init = function (app, cors) {
        
        app.get('/api/v1/workpapers/getAllWorkpapers', cors(), function (req, res) {
            
            res.set('Content-Type', 'application/json');
            res.send(data.getAllWorkpapers() || []);
        });
        
        app.get('/api/v1/workpapers/getAllFolders', cors(), function (req, res) {
            res.set('Content-Type', 'application/json');
            res.json(data.getFolders() || []);
        });
        
        app.post('/api/v1/workpapers/folder', cors(), function (req, res) {
            var foldername = req.body.foldername;
            if (validator.isAlpha(foldername)) {
                console.log(foldername);
                res.json({ 'success' : true, 'folderid' : uuid.v1(), 'foldername' : foldername });
            } else {
                res.json({ 'success' : false, 'message': 'foldername must contains only alpha' });
            }
        });

    };
})(module.exports);