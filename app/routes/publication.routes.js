const controller = require("../controllers/publication.controller");

module.exports = function(app){
    
    app.post("/api/post/add",controller.createPost);
    app.post("/api/post/like",controller.like);
    app.post("/api/post/comment",controller.comment);

}
