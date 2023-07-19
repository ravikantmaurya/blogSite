const User = require('../database/models/User')

module.exports = async (req, res)=>{
    await User.create(req.body).then((result)=>{
        if(result){
            res.redirect('/')
        }
    })
    .catch((err)=>{
        // console.log(`err: ${JSON.stringify(err.errors)}`)
        if(err){
            const registrationErrors = Object.keys(err.errors).map(key => err.errors[key].message)
            req.flash('registrationErrors', registrationErrors)
            return res.redirect('/auth/register')
        }
    })
}