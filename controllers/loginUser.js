const bcrypt = require('bcrypt')
const User = require('../database/models/User')

module.exports = async (req, res) =>{
    const {email, password} = req.body
    await User.findOne({email}).then((result)=>{
        if(result){
            console.log(result)
            bcrypt.compare(password, result.password, (err, same)=>{
                if(same){
                    req.session.userId = result._id
                    res.redirect('/')
                }
                else{
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}
