
const { send } = require('express/lib/response')
const blogSchema = require('./../model/schema')

exports.CreateBlog = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "REQ DATA NOT FOUND!"})
    }
    const blog = new blogSchema({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        title: req.body.title,
        description: req.body.description,
        blog: req.body.blog
    })

    blog.save('blog')
    .then(data=>{
        res.redirect('/theblog')
    })
    .catch(err=>{
        console.log('cannot fetch data')
    })
}

exports.ShowBlogs = (req, res)=>{
    blogSchema.find()
    .then(data=>{
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || "cannot find blogs" })
    })
}

exports.ShowBlogContent = (req, res)=>{
    if(req.params.id){
        const id = req.params.id
        blogSchema.findById(id)
        .then(data=>{
            res.send(data)
        })
    }
}