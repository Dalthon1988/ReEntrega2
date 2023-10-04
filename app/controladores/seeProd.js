const ProductManager = require('../../ProductManager.js')
const productManager = new ProductManager("./datos.json")



exports.getData = async (req, res) =>{  

const product = await productManager.getProducts()
const limit =req.query.limit;
if (limit){
    res.send(product.slice(1,0));    
}else{
    res.send (product)
}


      
    //res.send ({data:"Esto viene desdee Ver JSON"})
}
 







