const express = require('express')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const Middleware = require('./middleware')
const port = process.env.PORT || 3000
dotenv.config()

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    res.send('<center><h1> Work Order Management  Microservice </h1></center>')
    
})


// require orderRoutes
const orderRoutes = require('./routes/order.routes')

// verify token before serving 
// app.use(Middleware.decodeToken)

// using orders routes as middleware
app.use('/api/v1/orders', orderRoutes)

  mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`works management microservice running on port ${port}`)
        })
    }).catch((error) => {
        console.log(`${error} \n did not connect to database!` )
})