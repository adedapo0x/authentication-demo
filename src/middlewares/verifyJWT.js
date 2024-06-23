const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next){
    const userHeader = req.headers.authorization

    if (!userHeader || !userHeader.startsWith('Bearer ')){
        return res.status(401).json({message: "Unauthorized access"})
    }

    const token = userHeader.split(' ')[1]
    
    try {
        const decoded_payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded_payload
        next()
    } catch(err) {
        res.status(401).json({message: 'Unauthorized. Error encountered'})
    }
}

module.exports = verifyJWT