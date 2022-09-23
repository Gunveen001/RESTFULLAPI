const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//import routes
const postsRoutes = require('./routes/posts')
app.use('/posts', postsRoutes)

//routes
app.get('/', (req,res) =>{
    res.send('we are on home')
})

//connectdb
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB'))


// how to start listen to sever
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})