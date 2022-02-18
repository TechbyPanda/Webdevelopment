const User = require("../model/user_model");

exports.homePage = (req, res)=>{
    res.render("infobean.ejs");
}

exports.faq = (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let comments = req.body.comments;
    let phone = req.body.phone;
    let company = req.body.company;
    const user = new User(name,email,comments,phone,company);

    user.save().then(result=>{
        res.send("successful send");
    }).catch(err=>{
        console.log(err);
        res.send("failed");
    });
}