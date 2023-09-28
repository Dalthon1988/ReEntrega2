import{promises as fs } from 'fs'

const RUTA_ARCHIVO = './datos.txt'

class ProductManager {
    constructor(path) {
      this.path = path
      this.products = [];
    }
  
    static incrementarID(){
      if(this.idIn) {
        this.idIn++
      } else {
        this.idIn=1
      }
      return this.idIn
    }
  
    // Método para agregar un nuevo producto se agrega promesas..
    async addProduct(product) {
      
      const products = await fs.readFile(this.path, 'utf-8')
      const Item = JSON.parse(products)
      product.id =ProductManager.incrementarID()
      Item.push(product)
  
      if (!product.code ||
        !product.price ||
        product.price <= 0 ||
        product.stock < 0) {
        return "Product Inavild";


      } else if (
        this.products.find((producto) => producto.code == product.code)
      ) {
        return "Duplicate product";
      }
      try {
        await fs.writeFile(this.path, JSON.stringify(Item));
      } catch (error) {
        console.log(error);
      }
      return "The product was added successfully";}
    
  
    // Método para obtener todos los productos agregando Promesas 
    async getProducts() {
      try{
        const products = await fs.readFile(this.path,'utf-8')
        const Item = JSON.parse(products)
        return Item
      }catch (error){
        console.log(error);
        return[];
      }
      
    }
  
    // Método para obtener un producto por su ID
   async getProductById() {
      const product = this.products.find((producto) => producto.id === id);
  
      if (!product) {
        return "Producto no encontrado.";
      } else {
        return product;
      }
    }
  
    // Método para actualizar un producto por su ID
    updateProductById(id, updatedProduct) {
      const index = this.products.findIndex((producto) => producto.id === id);
  
      if (index === -1) {
        return "Producto no encontrado.";
      } else {
        this.products[index] = {
          ...this.products[index],
          ...updatedProduct,
        };
        return "Producto actualizado con éxito.";
      }
    }
  
    // Método para eliminar un producto por su ID
    deleteProductById(id) {
      const index = this.products.findIndex((producto) => producto.id === id);
  
      if (index === -1) {
        return "Producto no encontrado.";
      } else {
        this.products.splice(index, 1);
        return "Producto eliminado con éxito.";
      }
    }
  }
  
  const productos = new ProductManager();
  
  // Primera llamada = arreglo vacío
  console.log(productos.getProducts());
  
  try {
    // Agrego productos
    console.log(productos.addProduct("hamburguesa1", "hamburguesa con queso1", 1500, "imagen1", "burger123", 15));
    console.log(productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15));
  
    // Prueba de código repetido
    console.log(productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15));
  
    console.log(productos.getProductById(4));
  
    // Actualizar un producto
    console.log(productos.updateProductById(1, {
      title: "Nueva Hamburguesa",
      description: "Nueva descripción",
      price: 2000,
    }));
  
    // Eliminar un producto
    console.log(productos.deleteProductById(2));
  
  } catch (error) {
    console.error(error.message);
  }
  
  // Mostrar todos los productos después de las operaciones
  console.log(productos.getProducts());
  