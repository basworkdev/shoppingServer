const db = require('../myconnect/myconnect')

exports.getAllProduct = (req,res)=>{
    db.query("SELECT pr.id AS id , pr.name AS name , pr.price AS price , pr.fullPrice AS fullPrice , pr.productKey AS productKey, pr.stock AS stock, pr.img AS img, pr.status AS status, b.name AS brand, pt.name_th AS typeName FROM products AS pr INNER JOIN brand AS b ON pr.brand = b.id INNER JOIN product_type AS pt ON pr.type = pt.id WHERE pr.status = 'Y'",(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.getBrand = (req,res)=>{
    db.query("SELECT * FROM brand",(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.getProductType = (req,res)=>{
    db.query("SELECT * FROM product_type",(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.getConfig = (req,res)=>{
    const configName = req.params.name;
    db.query(`SELECT * FROM config WHERE name='${configName}'`,(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.CreactProduct = (req,res)=>{
    console.log(req.body)
    const name = req.body.name;
    const mainDetail = req.body.mainDetail;
    const detail = req.body.detail;
    const subDetail = req.body.subDetail;
    const price = req.body.price;
    const fullPrice = req.body.fullPrice;
    const productKey = req.body.productKey;
    const color = req.body.color;
    const stock = req.body.stock;
    const img = req.body.img;
    const type = req.body.type;
    const brand = req.body.brand;
    const status = req.body.status;
    db.query(`INSERT INTO products (name, mainDetail, detail, subDetail, price, fullPrice, productKey, color, stock, img, type, brand, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)`,
    [name,mainDetail,detail,subDetail,price,fullPrice,productKey,color,stock,img,type,brand,status],(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send({
                status : "success",
                message : "บันทึกสำเร็จ",
                code : 1
            });
        }
    })
}


