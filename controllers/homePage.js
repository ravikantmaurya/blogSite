const Post = require('../database/models/Post')

module.exports = async (req, res) => {

    await Post.find({}).then((result)=>{
        res.render('index',{
            result
        })
    })
    .catch(err=> console.log(err))

    
}