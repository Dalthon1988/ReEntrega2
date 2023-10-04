const ProductManager = require('../../ProductManager.js');
const productManager = new ProductManager("./datos.json");

exports.getData = async (req, res) => {
  try {
    const { productoId } = req.params;
    const productos = await productManager.getProducts(); // Suponiendo que tienes un método getProducts() para obtener la colección de usuarios

    const producto = productos.find((producto) => producto.id === parseInt(productoId, ""));

    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
  
  // Esto se ejecutará independientemente del resultado de la búsqueda
  // res.send({ data: "Bienvenidos Esto es el params" });
};
