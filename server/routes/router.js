const express = require('express')
const services = require('./../services/render') 
const controller = require('./../controller/controller')

const router = express.Router()

// Rendering Pages
router.get('/', services.Home)
router.get('/home', services.Home)

router.get('/theblog', services.TheBlog)
router.get('/theblog/blogs/:id', services.Blog)
router.get('/theblog/blogs/:id/editblog', services.EditBlog)
router.get('/theblog/addblog', services.AddBlog)

router.get('/about', services.About)
router.get('/contact', services.Contact)


// CONTROLLER

// API
router.get('/theblog/blogs', controller.ShowBlogs)
router.get('/theblog/:id', controller.ShowBlogContent)

// CRUD
router.post('/theblog/:id', controller.Update)
router.post('/theblog/addblog', controller.CreateBlog)

module.exports = router