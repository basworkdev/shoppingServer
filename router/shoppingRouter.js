const db = require('../myconnect/myconnect')
let moment = require('moment');
exports.saveOrder = (req,res) => {
    try {
        console.log(req.body)
        let date = new Date();
        const id = moment(date).format('YYMMDDHHmmss');
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
        const delivery_date = req.body.delivery_date;
        const user_id = req.body.user_id;
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
            delivery_date,
            user_id
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
                delivery_date,
                user_id
            ],(err,result)=>{
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
    } catch (error) {
        console.log("error : " , error)
    }
}