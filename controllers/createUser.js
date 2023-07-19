module.exports = (req, res) =>{
    const auth = req.session.userId
    res.render('register',{
        errors: req.flash('registrationErrors'),
        auth
    })
}