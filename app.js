const {promises: fs} = require('fs');
const express = require('express')

const app = express()

const port = 8080

const productoRouters = require('./app/rutas/products')
const inicioRouters = require('./app/rutas/inicio')
const paramRouters = require('./app/rutas/productoxID')



app.use(productoRouters)
app.use(inicioRouters)
app.use(paramRouters)


app.listen (port,()=>{
    console.log('La aplicacion esta en linea')
})
//Cambio Comentario

//se agrega gitignore