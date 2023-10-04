const ProductManager = require('../../ProductManager.js')
const productManager = new ProductManager("./datos.json")

exports.getData = async (req, res) => {
    try {
      const productID= req.params.productId;
      const product = await productManager.findById(parseInt(2));
  
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      } else{}
  
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }