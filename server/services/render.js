const axios = require('axios')
const express = require('express')


// FETCH AND RENDER DATA FROM API
exports.Home = (req, res) => {
    res.status(200).render('index')
}

exports.TheBlog = (req, res) => {
    console.log(req)

    axios.get(`http://localhost:3000/theblog/blogs?filter=${req.query.filter || "allpost"}`)
        .then(data => res.status(200).render('theblog', { blogs: data.data }))



}

exports.Blog = (req, res) => {
    axios.get(`http://localhost:3000/theblog/${req.params.id}`)
        .then(data => res.render('blog', { blogs: data.data }))
}

exports.AddBlog = (req, res) => {
    res.status(200).render('create_blog')
}

exports.About = (req, res) => {
    res.status(200).render('about')
}

exports.Contact = (req, res) => {
    res.status(200).render('contact')
}