const express = require('express')

const controlador = require('../controladores/productosParams')

const rutas = express.Router()



const path = 'productos/params'



rutas.get (
   `/${path}`,
    controlador.getData  
)

module.exports = rutas