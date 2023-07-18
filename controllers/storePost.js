const path = require('path')
const Post = require('../database/models/Post')

module.exports = async (req, res) =>{
    const {image} = req.files
    console.log(`image: ${image}`)
    image.mv(path.resolve(__dirname, '..' , 'public/posts', image.name), async (err)=>{
        await Post.create({
            ...req.body,
            image: `/posts/${image.name}`
        }).then((result)=>{
            console.log(`result: ${result}`)
            res.redirect('/')
        })
        .catch(err=>{
            console.log(`err: ${err}`)
        })
    })
}