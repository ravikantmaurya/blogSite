module.exports = (req, res)=> {
    const auth = req.session.userId
    res.render('login',{
        auth
    })
}