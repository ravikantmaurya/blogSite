module.exports = (req, res) => {
    const auth = req.session.userId
    if(req.session.userId){
        return res.render('create',{
            auth
        })
    }
    res.redirect('/auth/login')
    
}