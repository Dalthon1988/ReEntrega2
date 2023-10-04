const ProductManager = require('../../ProductManager.js')
const productManager = new ProductManager("./datos.json")

exports.getData = async (req, res) =>{
    

    const product = await ProductManager.getpro()
    res.send(product)



   // res.send ({data:"Esto viene desdee RUTA"})


}