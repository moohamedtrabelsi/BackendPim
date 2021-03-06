const { skill } = require("../models");
const db = require("../models");
const config = require("../config/db.config");
const User = db.user;
const Skill = db.skill;

exports.addSkill = (req,res) => 
{
const skill = new Skill({
    name:req.body.name 
});
skill.save((err)=>
    
    {
    if(err)
        {
            console.log("error",err);
            res.status(200).send("skill not added");
                return;
        }
        else{
        console.log("skill added");
        res.status(200).send("skill added");
        }
    });


};


exports.removeSkill = (req,res) => {
        
        Skill.findOne({
            name: req.body.name
          }).deleteOne((err)=>
          {
              if(err){
                  res.status(400).send("8alet");
                  return;
              }
              res.status(200).send("mriguel");
          }
          )
};

exports.updateSkill = (req,res) => {
        
        Skill.findOne({
            name: req.body.name
          }).exec((err,skill)=>
          {
              if(err){
                  res.status(400).send("8alet");
                  return;
              }
              skill.name = req.body.newname
              skill.save((err)=>{
                  if(err){
                      res.status(500).send(err);
                        return;
                    }
                  res.status(200).send("jawek behi");
              })

            }
          )
    };

exports.removeuser = (req,res) => {
        
        User.findOne({
            username: req.body.username
          }).deleteOne((err)=>
          {
              if(err){
                  res.status(400).send("8alet");
                  return;
              }
              res.status(200).send("mriguel");
          }
          )
};   