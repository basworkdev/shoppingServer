const db = require('../myconnect/myconnect')
exports.saveOrderDetail = async (req,orderId) => {
    try {
        const order_id = orderId;
        const brandId = req.brandId;
        const brandName_th = req.brandName_th;
        const color = req.color;
        const mainImg = req.mainImg;
        const name = req.name;
        const productKey = req.productKey;
        const deliveryCost = parseFloat(req.deliveryCost);
        const fullPrice = parseFloat(req.fullPrice);
        const product_id = req.id;
        const order_amount = parseInt(req.order);
        const price = parseFloat(req.price);
        const stock = parseInt(req.stock);
        const order_time = new Date();
        let status = 0; 
        status = await db.query(`INSERT INTO order_detail (
            order_id , 
            brandId , 
            brandName_th , 
            color , 
            mainImg , 
            name , 
            productKey , 
            deliveryCost , 
            fullPrice , 
            product_id , 
            order_amount , 
            price , 
            stock
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)`,
        [
            order_id,
            brandId,
            brandName_th,
            color,
            mainImg,
            name,
            productKey,
            deliveryCost,
            fullPrice,
            product_id,
            order_amount,
            price,
            stock
        ],(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                status = 1
            }
            return status
        })
        return status
    } catch (error) {
        console.log("error : " , error)
    }
    
}

