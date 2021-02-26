const db = require('../myconnect/myconnect')

exports.user99 = (req,res)=>{
    db.query("SELECT * FROM config WHERE name='OFFROAD'",(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.login = (req,res)=>{
    console.log('function : /login');
    db.query("SELECT * FROM config WHERE name='OFFROAD'",(err,result)=>{
        if(err) {
            console.log(err);
            res.send({
                status : "error",
                message : "error",
                code : 0
            });
        }else {
            let md5 = require('md5');
            const userName = req.body.userName;
            const password = req.body.password;
            let logCode = md5(result[0].value+password);
            db.query(`SELECT * FROM admin WHERE userName='${userName}' AND password='${logCode}'`,(err,result)=>{
                if(err) {
                    console.log(err);
                    res.send({
                        status : "error",
                        message : "error",
                        code : 0
                    });
                }else {
                    console.log(result);
                    if(result.length > 0) {
                        res.send({
                            status : "success",
                            message : "login สำเร็จ",
                            name : result.name,
                            code : 1
                        });
                    }else {
                        res.send({
                            status : "fail",
                            message : "user name หรือ password ไม่ถูกต้อง",
                            code : 0
                        });
                    }
                    
                }
            });
            
            //res.send(result);
        }
    })
}