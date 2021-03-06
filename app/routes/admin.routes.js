const controller = require("../controllers/admin.controller");

module.exports = function(app)
{
    app.post("/admin/addskill",controller.addSkill);
    app.post("/admin/remskill",controller.removeSkill);
    app.post("/admin/updateskill",controller.updateSkill);
    app.post("/admin/remuser",controller.removeuser);
 
};