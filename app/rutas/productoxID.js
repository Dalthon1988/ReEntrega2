const express = require('express')

const controlador = require('../controladores/productoxID')

const rutas = express.Router()



const path = 'productos/:productoId'



rutas.get (
   `/${path}`,
    controlador.getData  
)

module.exports = rutas