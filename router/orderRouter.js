const db = require('../myconnect/myconnect')
let moment = require('moment');
const tc = require('../textConfig/textConfig.json')
const OrderDao = require('../dao/OrderDao')
const productRouter = require('./productRouter')


// const orderDao = new OrderDao();
exports.saveOrder = async (req,res) => {
    try {
        // console.log(req.body)
        let date = new Date();
        // const id = moment(date).format('YYMMDDHHmmss');
        const id = req.body.id;
        const amount = parseInt(req.body.amount);
        const sum_full_price = parseFloat(req.body.sum_full_price);
        const sum_discount = parseFloat(req.body.sum_discount);
        const sum_price = parseFloat(req.body.sum_price);
        const sum_shipping_cost = parseFloat(req.body.sum_shipping_cost);
        const total = parseFloat(req.body.total);
        const customer_name = req.body.customer_name;
        const customer_tel = req.body.customer_tel;
        const customer_email = req.body.customer_email;
        const customer_address = req.body.customer_address;
        const customer_province = req.body.customer_province;
        const customer_amphure = req.body.customer_amphure;
        const customer_district = req.body.customer_district;
        const customer_postcode = req.body.customer_postcode;
        const order_time = req.body.order_time;
        const pay_status = req.body.pay_status;
        const status = req.body.status;
        const delivery_number = req.body.delivery_number;
        const delivery_company = req.body.delivery_company;
        const user_id = req.body.user_id;
        let orderDetail = req.body.orderDetail;
        db.query(`INSERT INTO orders (
            id,
            amount,
            sum_full_price,
            sum_discount,
            sum_price,
            sum_shipping_cost,
            total,
            customer_name,
            customer_tel,
            customer_email,
            customer_address,
            customer_province,
            customer_amphure,
            customer_district,
            customer_postcode,
            order_time,
            pay_status,
            status,
            delivery_number,
            delivery_company,
            user_id
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                id,
                amount,
                sum_full_price,
                sum_discount,
                sum_price,
                sum_shipping_cost,
                total,
                customer_name,
                customer_tel,
                customer_email,
                customer_address,
                customer_province,
                customer_amphure,
                customer_district,
                customer_postcode,
                order_time,
                pay_status,
                status,
                delivery_number,
                delivery_company,
                user_id
            ], async (err,result)=> {
                if(err) {
                    console.log(err);
                    res.send({
                        status : "Error",
                        message : tc.error.errorSystem,
                        code : 1
                    });
                }else {
                    let status = [];
                    for(let i=0 ; i<orderDetail.length ; i++){
                        let statusSave = await OrderDao.saveOrderDetail(orderDetail[i],id)
                        let stock = {
                            stock : orderDetail[i].stock - orderDetail[i].order,
                            id : orderDetail[i].id
                        }
                        let updateStock = await productRouter.UpdateStock(stock);
                        console.log("updateStock" , updateStock)
                        console.log("statusSave",statusSave)
                        if(statusSave === 1) {
                            status.push(1)
                        }
                    }
                    console.log("status",status)
                    if(status.length === orderDetail.length) {
                        res.send({
                            status : "success",
                            message : tc.success.orderSaveSuccess,
                            code : 1
                        });
                    } else {
                        res.send({
                            status : "success",
                            message : tc.success.errorSystem,
                            code : 1
                        });
                    }
                    
                }
            })
    } catch (error) {
        console.log("error : " , error)
    }
}

exports.getOrderAll = async (req,res) => {
    try {
        db.query(`SELECT * FROM orders ORDER BY order_time_update DESC , order_time DESC`,(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                res.send(result);
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}

exports.getOrderAndOrderDetail = async (req,res) => {
    const orderId = req.params.orderId;
    console.log(orderId)
    try {
        db.query(`SELECT * FROM orders AS rd INNER JOIN order_detail AS rdd ON rd.id = rdd.order_id WHERE rd.id = '${orderId}'`,(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                res.send(result);
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}

exports.getOrderById = async (req,res) => {
    const orderId = req.params.orderId;
    console.log("orderId",orderId)
    try {
        db.query(`SELECT * FROM orders WHERE id = '${orderId}'`,(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                res.send(result);
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}

exports.searchOrder = async (req,res) => {
    const column = req.body.column;
    const value = req.body.value;
    try {
        // db.query(`SELECT * FROM orders AS rd INNER JOIN order_detail AS rdd ON rd.id = rdd.order_id WHERE rd.${column} = '${value}'`,(err,result)=>{
        db.query(`SELECT * FROM orders WHERE ${column} = '${value}' ORDER BY order_time DESC`,(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                res.send(result);
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}
exports.searchOrderDetailByOrderId = async (req,res) => {
    const orderId = req.params.orderId;
    console.log("order_id",orderId)
    try {
        // db.query(`SELECT * FROM orders AS rd INNER JOIN order_detail AS rdd ON rd.id = rdd.order_id WHERE rd.${column} = '${value}'`,(err,result)=>{
        db.query(`SELECT * FROM order_detail WHERE order_id = '${orderId}'`,(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                res.send(result);
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}


exports.updateSlip = async (req,res) => {
    const orderId = req.body.orderId;
    const pay_status = req.body.pay_status;
    const pay_date = req.body.pay_date;
    const status = req.body.status;
    const pay_image = req.body.pay_image;
    try {
        db.query(`UPDATE orders SET pay_status = '${pay_status}', pay_date = '${pay_date}', status = '${status}' , pay_image = '${pay_image}' WHERE id = '${orderId}'`,(err,result)=>{
            if(err) {
                console.log(err);
            }else {
                console.log(result);
                res.send({
                    status : "success",
                    message : "บันทึกสำเร็จ",
                    code : 1
                });
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}

exports.updateOrderDetail = async (req,res) => {
    const orderId = req.body.orderId;
    const delivery_company = req.body.delivery_company;
    const delivery_number = req.body.delivery_number;
    const delivery_trace = req.body.delivery_trace;
    const delivery_date = req.body.delivery_date;
    const pay_date = req.body.pay_date;
    const pay_status = req.body.pay_status;
    const status = req.body.status;
    try {
        db.query(`UPDATE orders SET
            delivery_company = '${delivery_company}', 
            delivery_number = '${delivery_number}', 
            delivery_trace = '${delivery_trace}' , 
            pay_date = '${pay_date}',
            pay_status = '${pay_status}',
            status = '${status}' ,
            delivery_date = '${delivery_date}'
            WHERE id = '${orderId}'`,
            (err,result)=>{
            if(err) {
                console.log(err);
            }else {
                console.log(result);
                res.send({
                    status : "success",
                    message : "บันทึกสำเร็จ",
                    code : 1
                });
            }
        })
    } catch (error) {
        console.log("error : " , error)
    }
}

