const User = require('../database/models/User')

module.exports = async (req, res, next) => {
    //console.log(req.session.userId)
    if(req.session.userId){
        await User.findById(req.session.userId).then((result)=>{
            if(!result){
                return res.redirect('/')
            }
        })
        .catch((err)=>{
            if(err){
                console.log(`sdfakjfsdk err: ${err}`)
                return res.redirect('/')
            }
        })
    }
    
    next()
}