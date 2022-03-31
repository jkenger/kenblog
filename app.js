const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const ejs = require('ejs')
const req = require('express/lib/request')
const route = require('./server/routes/router')
const mongoConnection = require('./server/database/connect')

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
// ASSIGN PORT
const PORT = process.env.PORT || 8000


// CONNECT DATABASE
mongoConnection()
.then(res=>{
    app.listen(PORT, ()=>{
        console.log('listening at PORT: ', PORT)
    })
})
.catch(err=>{
    console.log('cannot connect', err)
})


// ROUTE
app.use('/', route)


// USE 404 PAGE IF REQUEST DIDN'T FOUND
app.use((req, res)=>{
    res.status(404).render('404')
})