const express = require('express')

exports.Home = (req, res)=>{
    res.status(200).render('index')
}

exports.TheBlog = (req, res)=>{
    res.status(200).render('theblog')
}

exports.Blog = (req, res)=>{
    res.status(200).render('blog')
}

exports.AddBlog = (req, res)=>{
    res.status(200).render('create_blog')    
}

exports.About = (req, res)=>{
    res.status(200).render('about')
}

exports.Contact = (req, res)=>{
    res.status(200).render('contact')
}