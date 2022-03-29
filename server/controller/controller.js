
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
        blog: req.body.blog,
    })

    blog.save('blog')
    .then(data=>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log('cannot fetch data')
    })
}