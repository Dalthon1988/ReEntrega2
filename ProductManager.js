const { promises: fs } = require("fs");
const express = require("express");

const RUTA_ARCHIVO = "./datos.JSON";

class ProductManager {
  constructor(path) {
    this.path = path;}
    
        
      
        static incrementarID() {
            this.idIn++;
          return this.idIn;
        }
      
 
  async addProduct(product) {
    try {
      const products = await fs.readFile(this.path, "utf-8");
      const parsedProducts = JSON.parse(products); 

      product.id = ProductManager.incrementarID();

      if (
        !product.code ||
        !product.price ||
        product.price <= 0 ||
        product.stock < 0
      ) {
        return "Product Invalid";
      } else if (
        parsedProducts.find((producto) => producto.code === product.code)
      ) {
        return "Duplicate product";
      }

      parsedProducts.push(product);

      await fs.writeFile(this.path, JSON.stringify(parsedProducts));
      return "The product was added successfully";
    } catch (error) {
      console.log(error);
      return "Error adding product";
    }
  }
  async getProducts() {
    try {
      const products = await fs.readFile(this.path, "utf-8");
      const parsedProducts = JSON.parse(products);
      return parsedProducts;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getProductById(id) {
    try {
      const products = await fs.readFile(this.path, "utf-8");
      const Item = JSON.parse(products);
      const foundProduct = Item.find((item) => item.id === parseInt(id));
      if (foundProduct) {
        return foundProduct;
      } else {
        throw new Error('Producto no encontrado');
      }
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(
    id,
    { title, description, price, thumbnail, code, stock }
  ) {
    try {
      const products = await fs.readFile(this.path, "utf-8");
      const Item = JSON.parse(products);
      const index = Item.findIndex((item) => item.id === parseInt(id));
      if (index !== -1) {
        Item[index].title = title;
        Item[index].description = description;
        Item[index].price = price;
        Item[index].thumbnail = thumbnail;
        Item[index].code = code;
        Item[index].stock = stock;
        await fs.writeFile(this.path, JSON.stringify(Item));
        return "Updated product";
      } else {
        return "Product not found";
      }
    } catch (error) {
      console.log(error);
      return "Error updating product";
    }
  }

  async deleteProduct(id) {
    try {
      const products = await fs.readFile(this.path, "utf-8");
      const parsedProducts = JSON.parse(products);
      const filteredItem = parsedProducts.filter(
        (item) => item.id !== parseInt(id)
      );
      if (filteredItem.length !== parsedProducts.length) {
        await fs.writeFile(this.path, JSON.stringify(filteredItem));
        return "Product was removed";
      } else {
        return "Product not found";
      }
    } catch (error) {
      console.log(error);
      return "Error deleting product";
    }
  }
}

class Product {
  constructor(
    title = "",
    description = "",
    price = 0,
    thumbnail = "",
    code = "",
    stock = 0
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

const productManager = new ProductManager(RUTA_ARCHIVO);

// muestra los productos
productManager.getProducts().then((prods) => console.log(prods));

// Agregar Producto


const newProduct = new Product(
  "2222",
  
  "2222",
  100,
  "2222",
  "2222",
  100
);

productManager.addProduct(newProduct).then((result) => {
  console.log(result);
});

// Borrar producto queda comentado sacar y probar para el deleteado de productos
//productManager.deleteProduct(1).then((result) => console.log(result));
module.exports = ProductManager;
