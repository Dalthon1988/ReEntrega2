const express = require('express')

const fs = require('fs');

const controlador = require('../controladores/pxid')


const rutas = express.Router()





const path = 'productos/id'


rutas.get (
   `/${path}`,
    controlador.getData  
)

module.exports = rutas