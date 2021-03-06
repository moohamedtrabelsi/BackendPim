const controller = require("../controllers/skill.controller");

module.exports = function(app){
    
    app.post("/api/skill/add",controller.addskill);

}