const db = require('../myconnect/myconnect')

exports.getAllProduct = (req,res)=>{
    db.query("SELECT pr.id AS id , pr.name AS name , pr.price AS price , pr.fullPrice AS fullPrice , pr.productKey AS productKey, pr.stock AS stock, pr.img AS img, pr.mainImg AS mainImg , pr.status AS status, b.name AS brand, pt.name_th AS typeName FROM products AS pr INNER JOIN brand AS b ON pr.brand = b.id INNER JOIN product_type AS pt ON pr.type = pt.id WHERE pr.status = 'Y'",(err,result)=>{
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
    db.query("SELECT * FROM product_type ORDER BY type_order",(err,result)=>{
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
    const mainImg = req.body.mainImg;
    db.query(`INSERT INTO products (name, mainDetail, detail, subDetail, price, fullPrice, productKey, color, stock, img, type, brand, status , mainImg) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?)`,
    [name,mainDetail,detail,subDetail,price,fullPrice,productKey,color,stock,img,type,brand,status,mainImg],(err,result)=>{
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

exports.UpdateProduct = (req,res)=>{
    console.log(req.body)
    const id = req.body.id;
    const name = req.body.name;
    const mainDetail = req.body.mainDetail;
    const detail = req.body.detail;
    const subDetail = req.body.subDetail;
    const price = req.body.price;
    const fullPrice = req.body.fullPrice;
    const productKey = req.body.productKey;
    const color = req.body.color;
    const stock = req.body.stock;
    const mainImg = req.body.mainImg;
    const img = req.body.img;
    const type = req.body.type;
    const brand = req.body.brand;
    const status = req.body.status;
    db.query(`UPDATE 
        products SET 
        name = ?, 
        mainDetail = ?, 
        detail = ?, 
        subDetail = ?, 
        price = ?, 
        fullPrice = ?, 
        productKey = ?, 
        color = ?, 
        stock = ?, 
        mainImg = ?,
        img = ?, 
        type = ?, 
        brand = ?, 
        status = ? 
        WHERE products.id = ?`,
    [name,mainDetail,detail,subDetail,price,fullPrice,productKey,color,stock,mainImg,img,type,brand,status,id],(err,result)=>{
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

exports.DeleteProduct = (req,res)=>{
    const id = req.body.id;
    const img = req.body.img;
    console.log(img);
    const fs = require('fs')
    for (let i=0 ; i<img.length ; i++){
        try {
            fs.unlink(`./images/${img[i]}`, (err) => {
                if (err) {
                    console.log(err)
                }
            });
        } catch(err) {
            console.log(err)
        } 
    }
    
    db.query(`DELETE FROM products WHERE products.id = '${id}'`,(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send({
                status : "success",
                message : "ลบสินค้าสำเร็จ",
                code : 1
            });
        }
    })
}

exports.deleteImage = (req,res)=>{
    const fileName = req.params.name;
    const fs = require('fs')
    try {
    fs.unlink(`./images/${fileName}`, (err) => {
        if (err) {
            console.log(err)
        }
        res.send({
            status : "success",
            message : "ลบสำเร็จ",
            code : 1
        });
    });
    } catch(err) {
        console.log(err)
    } 
}


exports.getProductById = (req,res)=>{
    const id = req.params.id;
    db.query(`SELECT 
        pr.id AS id , 
        pr.name AS name , 
        pr.price AS price , 
        pr.fullPrice AS fullPrice , 
        pr.productKey AS productKey, 
        pr.stock AS stock, 
        pr.mainImg AS mainImg,
        pr.img AS img, 
        pr.status AS status, 
        pr.mainDetail AS mainDetail,
        pr.detail AS detail,
        pr.subDetail AS subDetail,
        pr.color AS color,
        pb.name AS brandName_th, 
        pb.id AS brandId,
        pt.name_th AS typeName,
        pt.id AS typeId
        FROM products AS pr 
        INNER JOIN brand AS pb ON pr.brand = pb.id 
        INNER JOIN product_type AS pt ON pr.type = pt.id 
        WHERE pr.id = '${id}'`,(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.getProductByKey = (req,res)=>{
    const key = req.params.key;
    db.query(`SELECT 
        pr.id AS id , 
        pr.name AS name , 
        pr.price AS price , 
        pr.fullPrice AS fullPrice , 
        pr.productKey AS productKey, 
        pr.stock AS stock, 
        pr.mainImg AS mainImg,
        pr.img AS img, 
        pr.status AS status, 
        pr.mainDetail AS mainDetail,
        pr.detail AS detail,
        pr.subDetail AS subDetail,
        pr.color AS color,
        pb.name AS brandName_th, 
        pb.id AS brandId,
        pt.name_th AS typeName,
        pt.id AS typeId,
        pt.detail AS typeDetail
        FROM products AS pr 
        INNER JOIN brand AS pb ON pr.brand = pb.id 
        INNER JOIN product_type AS pt ON pr.type = pt.id 
        WHERE pr.productKey = '${key}'`,(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.getProductByType = (req,res)=>{
    const type = req.params.type;
    db.query(`SELECT 
        pr.id AS id , 
        pr.name AS name , 
        pr.price AS price , 
        pr.fullPrice AS fullPrice , 
        pr.productKey AS productKey, 
        pr.stock AS stock, 
        pr.mainImg AS mainImg,
        pr.img AS img, 
        pr.status AS status, 
        pr.mainDetail AS mainDetail,
        pr.detail AS detail,
        pr.subDetail AS subDetail,
        pr.color AS color,
        pb.name AS brandName_th, 
        pb.id AS brandId,
        pt.name_th AS typeName,
        pt.id AS typeId,
        pt.detail AS typeDetail

        FROM products AS pr 
        INNER JOIN brand AS pb ON pr.brand = pb.id 
        INNER JOIN product_type AS pt ON pr.type = pt.id 
        WHERE pr.type = '${type}' LIMIT 8`,(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}

exports.getProductAllByType = (req,res)=>{
    const type = req.params.type;
    db.query(`SELECT 
        pr.id AS id , 
        pr.name AS name , 
        pr.price AS price , 
        pr.fullPrice AS fullPrice , 
        pr.productKey AS productKey, 
        pr.stock AS stock, 
        pr.mainImg AS mainImg,
        pr.img AS img, 
        pr.status AS status, 
        pr.mainDetail AS mainDetail,
        pr.detail AS detail,
        pr.subDetail AS subDetail,
        pr.color AS color,
        pb.name AS brandName_th, 
        pb.id AS brandId,
        pt.name_th AS typeName,
        pt.id AS typeId,
        pt.detail AS typeDetail

        FROM products AS pr 
        INNER JOIN brand AS pb ON pr.brand = pb.id 
        INNER JOIN product_type AS pt ON pr.type = pt.id 
        WHERE pr.type = '${type}'`,(err,result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
}


