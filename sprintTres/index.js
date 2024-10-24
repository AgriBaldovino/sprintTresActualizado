import express from 'express'
import cors from 'cors'
import categoriaRoutes from './routes/categoria.routes.js'
import clienteRoutes from './routes/cliente.routes.js'
import cuponRoutes from './routes/cupon.routes.js'
import empresaEnvioRoutes from './routes/empresaEnvio.routes.js'
import envioRoutes from './routes/envio.routes.js'
import facturaRoutes from './routes/factura.routes.js'
import productoRoutes from './routes/producto.routes.js'
import rolRoutes from './routes/rol.routes.js'
import subCategoria from './routes/subCategorias.routes.js'
import subSubCategoria from './routes/subSubCategorias.routes.js'
import usuarioRoutes from './routes/usuario.routes.js'

import 'dotenv/config'


const corsOptions = {
    origin: 'http://localhost:8080', //URL del front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir cookies
};



const app = express()
app.use(cors());
app.use(cors(corsOptions));
app.use(express.json())

const port = 3002

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`)
})


app.use('/categoria', categoriaRoutes)
app.use('/cliente', clienteRoutes)
app.use('/cupon', cuponRoutes)
app.use('/empresa-envio', empresaEnvioRoutes)
app.use('/envio', envioRoutes)
app.use('/factura', facturaRoutes)
app.use('/producto', productoRoutes)
app.use('/rol', rolRoutes)
app.use('/sub-categoria', subCategoria)
app.use('/sub-sub-categoria', subSubCategoria)
app.use('/usuario', usuarioRoutes)
