const pool = require('./database');

module.exports = class User{
    constructor(name,email,comments,phone,company){
        this.name = name;
        this.email = email;
        this.comments = comments;
        this.phone = phone;
        this.company = company;
    }

    save(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((error,con)=>{
                if(!error)
                {
                    let sql = "insert into faq(name,email,comments,phone,company) values (?,?,?,?,?)";
                    con.query(sql,[this.name,this.email,this.comments,this.phone,this.company],(err,result)=>{
                        if(err)
                            reject(err);
                        else
                            resolve(result);
                    });
                }
                else
                    reject(error);
            });
        });
    }
}