const db = require('../myconnect/myconnect')

// exports.getProvinces = (req,res) => {
//     try {
//         db.query("SELECT * FROM provinces ORDER BY name_th",(err,result)=>{
//             if(err) {
//                 console.log(err);
//             }else {
//                 res.send(result);
//             }
//         })
//     } catch (error) {
//         console.log("error : " , error)
//     }
// }

// exports.getAmphures = (req,res) => {
//     try {
//         const province_id = req.params.province_id;
//         db.query(`SELECT * FROM amphures WHERE province_id = ${province_id} ORDER BY name_th`,(err,result)=>{
//             if(err) {
//                 console.log(err);
//             }else {
//                 res.send(result);
//             }
//         })
//     } catch (error) {
//         console.log("error : " , error)
//     }
// }

// exports.getDistricts = (req,res) => {
//     try {
//         const amphure_id = req.params.amphure_id;
//         db.query(`SELECT * FROM districts WHERE amphure_id = ${amphure_id} ORDER BY name_th`,(err,result)=>{
//             if(err) {
//                 console.log(err);
//             }else {
//                 res.send(result);
//             }
//         })
//     } catch (error) {
//         console.log("error : " , error)
//     }
// }