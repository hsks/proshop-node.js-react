import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import errorHandler from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

// Load env vars
dotenv.config()

// Connect to database
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoutes)

//errorHandler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)