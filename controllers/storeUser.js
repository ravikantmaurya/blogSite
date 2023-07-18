const User = require('../database/models/User')

module.exports = async (req, res)=>{
    await User.create(req.body).then((result)=>{
        if(result){
            res.redirect('/')
        }
    })
    .catch((err)=>{
        if(err){
            return res.redirect('auth/register')
        }
    })
}