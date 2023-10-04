const express = require('express')

const controlador = require('../controladores/inicio')

const rutas = express.Router()



const path = '/'



rutas.get (
   `/${path}`,
    controlador.getData  
)

module.exports = rutas