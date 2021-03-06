const db = require("../models");
const User = db.user;
const Skill = db.skill;

exports.addskill = (req,res)=>
{
    User.findOne({
        username:req.body.username
    }).exec((err,user)=>{
        Skill.findOne({
            name:req.body.name
        }).exec((err,skill)=>{
            if (err) {
                res.status(500).send({ message: err });
                return;
              }

            user.skills.push(skill)
            user.save(err=>
                {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                      }
                      res.status(500).send("skill added to user");

                })
        })
    });
}