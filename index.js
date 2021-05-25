const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
const path = require("path")

const db = require('./myconnect/myconnect')

const productRouter = require('./router/productRouter')
const addressRouter = require('./router/addressRouter')
const mainRouter = require('./router/mainRouter')


// Upload image
const multer = require('multer');

const storage = multer.diskStorage({ 
destination: function (req, file, cb) {
    cb(null, 'images/')
},
filename: function (req, file, cb) {
    let fileName = file.originalname.split(".");
    cb(null, fileName[0] + "_" + Date.now() + ".png")
}
})
const upload = multer({ storage: storage }) 
    app.get('/', (req, res) => {
    res.send('Hello Upload')
})
app.post('/upload', upload.single('file'),  (req, res) => { 

res.send(req.file)
})


// Get Images
app.use("/images", express.static(path.join(__dirname, "images")));

// Login
app.get('/user99', mainRouter.user99);
app.post('/login', mainRouter.login);

// Products
// GET
app.get('/getAllProduct' , productRouter.getAllProduct);
app.get('/getBrand', productRouter.getBrand);
app.get('/getProductType', productRouter.getProductType);
app.get('/getConfig/:name', productRouter.getConfig);
app.get('/getProductById/:id', productRouter.getProductById);
app.get('/getProductByKey/:key', productRouter.getProductByKey);
app.get('/getProductByType/:type', productRouter.getProductByType);
app.get('/getProductAllByType/:type', productRouter.getProductAllByType);

// POST
app.post('/createProduct', productRouter.CreactProduct);
app.post('/updateProduct', productRouter.UpdateProduct);
app.post('/deleteProduct', productRouter.DeleteProduct);
app.post('/deleteImage/:name', productRouter.deleteImage);

// Address
// GET
app.get('/getProvinces', addressRouter.getProvinces);
app.get('/getAmphures/:province_id', addressRouter.getAmphures);
app.get('/getDistricts/:amphure_id', addressRouter.getDistricts);

app.listen('3001',()=>{
    console.log('Server is running on port 3001')
})