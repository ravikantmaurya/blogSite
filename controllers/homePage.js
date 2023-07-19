const Post = require('../database/models/Post')

module.exports = async (req, res) => {
    const auth = req.session.userId
    await Post.find({}).then((result)=>{
        res.render('index',{
            result,
            auth
        })
    })
    .catch(err=> console.log(err))

    
}