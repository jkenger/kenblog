const express = require('express')
const services = require('./../services/render') 
const controller = require('./../controller/controller')

const router = express.Router()

// Rendering Pages
router.get('/', services.Home)
router.get('/home', services.Home)
router.get('/theblog', services.TheBlog)

router.get('/blog', services.Blog)

router.get('/theblog/addblog', services.AddBlog)
router.get('/about', services.About)
router.get('/contact', services.Contact)

// Controller
router.post('/theblog/addblog', controller.CreateBlog)
router.get('/theblog/blogs', controller.ShowBlogs)

module.exports = router