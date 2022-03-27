const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const ejs = require('ejs')

const app = express()

// Middlewares
app.use(morgan('tiny'))
// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Template Engine
app.set('view engine', 'ejs')
// Public files
app.use(express.static('public'))


// ENV Config
dotenv.config()

const PORT = process.env.PORT || 8000

app.get('/', (req, res)=>{
    res.send('ASD')
})

app.listen(PORT, ()=>{
    console.log('listening at PORT: ', PORT)
})


