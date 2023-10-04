const express = require('express')
const fs = require('fs');
const controlador = require('../controladores/seeProd')

const rutas = express.Router()





const path = 'pujs'


rutas.get (
   `/${path}`,
    controlador.getData  
)

module.exports = rutas