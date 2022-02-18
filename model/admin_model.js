const pool = require('./database');

module.exports = class Admin{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    login(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,result)=>{
                if(err) 
                    reject(err);
                else
                    {
                        let sql = "select * from user where";
                    }
            });
        });
    }
}