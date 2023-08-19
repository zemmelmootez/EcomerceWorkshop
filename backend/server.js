const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT
const connect=require("./helpers/dbConnect")
const cors=require("cors")
connect()
const userRoutes=require("./routes/userRoutes")
const productRoutes=require("./routes/productRoutes")
app.use(cors())
app.use(express.json())
app.use('/users',userRoutes)
app.use('/products',productRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))