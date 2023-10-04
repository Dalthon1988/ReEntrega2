const ProductManager = require('../../ProductManager.js');
const productManager = new ProductManager("./datos.json");



exports.getData = (req, res) =>{


    res.send ({data:"Bienvenidos"})


}