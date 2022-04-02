
const { send } = require('express/lib/response')
const blogSchema = require('./../model/schema')

// SERVE DATA APIS
exports.CreateBlog = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "REQ DATA NOT FOUND!" })
    }
    const blog = new blogSchema({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        title: req.body.title,
        description: req.body.description,
        blog: req.body.blog,
        genre: req.body.genre
    })

    blog.save('blog')
        .then(data => {
            res.redirect('/theblog')
        })
        .catch(err => {
            console.log('cannot fetch data')
        })
}

exports.ShowBlogs = (req, res) => {
    if (req.query.filter === 'allpost') {
        blogSchema.find()
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({ message: err.message || "cannot find blogs" })
            })
    }

    if(req.query.filter === 'gaming'){
        blogSchema.find({genre: 'Gaming'})
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: err.message || "cannot find blogs" })
        })
    }

    if(req.query.filter === 'webdev'){
        blogSchema.find({genre: 'Web Development'})
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: err.message || "cannot find blogs" })
        })
    }

    if(req.query.filter === 'blockchain'){
        blogSchema.find({genre: 'Blockchain'})
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: err.message || "cannot find blogs" })
        })
    }
    
    console.log(req.query.filter)
}

exports.ShowBlogContent = (req, res) => {
    if (req.params.id) {
        const id = req.params.id
        blogSchema.findById(id)
            .then(data => {
                res.send(data)
            })
    }
}


// UPDATE BY ID

exports.Update = (req, res)=>{
    const id = req.params.id
    const {first_name, last_name, title, description, blog} = req.body
    blogSchema.findByIdAndUpdate(id, req.body)
    .then(data=>{
        res.redirect('/theblog')
        console.log('updated')
    })
}

// DELETE BY ID
exports.Delete = (req, res)=>{
    const id = req.params.id
    blogSchema.findByIdAndDelete(id)
    .then(data=>{
        res.json({redirect:'/theblog'})
    })
}