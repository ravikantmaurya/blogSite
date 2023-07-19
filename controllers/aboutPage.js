module.exports = (req, res) => {
    const auth = req.session.userId
    
    res.render('about',{
        auth
    })
}