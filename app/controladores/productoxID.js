const ProductManager = require('../../ProductManager.js');
const productManager = new ProductManager("./datos.json");

exports.getData = async (req, res) => {
  try {
    const { productoId } = req.params;
   
    const productos = await productManager.getProducts(); 

    const producto = productos.find((producto) => producto.id === parseInt(productoId, ""));

    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado ruta prod' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
  
 
 
};


// const { limit} = req.query