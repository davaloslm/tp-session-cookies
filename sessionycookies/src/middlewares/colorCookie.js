module.exports = (req,res,next)=>{
    if (req.cookies.recordarColor) {
        req.session.backgroundColor  = req.cookies.recordarColor;
        res.locals.backgroundColor = req.cookies.recordarColor;

    }
    next()
}