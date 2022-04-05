const axios = require('axios')
const express = require('express')
const res = require('express/lib/response')


// FETCH AND RENDER DATA FROM API

// RENDER HOME
exports.Home = (req, res) => {
    res.status(200).render('index', {url: req.url})
}

//  RENDER BLOGS
exports.TheBlog = (req, res) => {

    axios.get(`http://localhost:3000/theblog/blogs?filter=${req.query.filter || "allpost"}`)
        .then(data => res.status(200).render('theblog', { blogs: data.data, url: req.url}))



}

// RENDER BLOG BY ID
exports.Blog = (req, res) => {
    axios.get(`http://localhost:3000/theblog/${req.params.id}`)
        .then(data => res.render('blog', { blogs: data.data, url: req.url }))
}

// REBDER CREATE BLOG
exports.AddBlog = (req, res) => {
    res.status(200).render('create_blog', {url: req.url})
}

// EDIT BLOG
exports.EditBlog= (req, res)=>{
    axios.get(`http://localhost:3000/theblog/${req.params.id}`)
        .then(data => res.render('edit_blog', {blogs: data.data, url: req.url }))
}


// ABOUT
exports.About = (req, res) => {
    res.status(200).render('about', {url: req.url})
}
// CONTACT
exports.Contact = (req, res) => {
    res.status(200).render('contact', {url: req.url})
}