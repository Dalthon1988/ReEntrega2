const {promises: fs} = require('fs');
const express = require('express')

const app = express()

const port = 8080

const productoRouters = require('./app/rutas/products')
const inicioRouters = require('./app/rutas/inicio')
const seeProdRouters = require('./app/rutas/seeProd')
const poridRouters = require('./app/rutas/pxid')

app.use(productoRouters)
app.use(inicioRouters)
app.use(seeProdRouters)
app.use(poridRouters)

app.listen (port,()=>{
    console.log('La aplicacion esta en linea')
})
