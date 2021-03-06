const db = require("../models");
const Like = require("../models/like.model");
const Publication = db.publication;
const User = db.user;
const like = db.like;
const Comment = db.comment;

exports.createPost = (req,res)=>{
    User.findOne({
        username:req.body.username
    }).exec((err,user)=>{
        const post = new Publication({
            content:req.body.content,
            likes:[],
            comments:[],
            author:user
            
        });
        post.save((err)=>{
            if(err){
                res.status(400).send(err);
                return;
            };
            res.status(200).send({author:post._id});
        })
    });

}

exports.like = (req,res)=>{
Publication.findById({
    _id:req.body.post
}).exec((err,post)=>
{
    User.findOne({
        username:req.body.username
    }).exec((err,user)=>{
        const like = new Like({
            userl:user
        });
        like.save(err=>{
            if(err){res.status(400).send("nooo");return;}

        })
        post.likes.push(like);
        post.save(err=>{
            if(err){
                res.status(400).send("not liked");

                return;
            }
            res.status(200).send("liked");

        })
    })
})
}


exports.comment = (req,res)=>{
    Publication.findById({
        _id:req.body.post
    }).exec((err,post)=>
    {
        User.findOne({
            username:req.body.username
        }).exec((err,user)=>{
            const com = new Comment({
                content:req.body.content,
                userc:user
            });
            com.save(err=>{
                if(err){res.status(400).send("nooo");return;}
    
            })
            post.comments.push(com);
            post.save(err=>{
                if(err){
                    res.status(400).send("not commented");
    
                    return;
                }
                res.status(200).send("commented");
    
            })
        })
    })
    }