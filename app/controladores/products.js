const ProductManager = require('../../ProductManager.js')
const productManager = new ProductManager("./datos.json")

exports.getData = async (req, res) =>{
     
    // const product = await productManager.getProducts()
    // res.send(product)
    const products = await productManager.getProducts();

  const { limit } = req.query;
  console.log(limit)
  if (!limit) {
    return res.status(201).send(products);
  } else {
    const Limitproduct = parseInt(limit);
    

        if (isNaN(Limitproduct) || Limitproduct <= 0) {
      return res.status(400).json({ error: 'Error de límite' });
    } else {
      const ProductLimit = products.slice(0, Limitproduct);
      return res.json(ProductLimit);
    }
  }



    // res.send ({data:"Esto viene desdee RUTA"})

}