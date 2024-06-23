const jwt = require('jsonwebtoken')
const userRouter = express.Router()

const userHeader = req.headers.authorization

if (!userHeader || !userHeader.startsWith('Bearer ')){
    return res.json({message: "Unauthorized access"})
}

try {
    const token = userHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET)
} catch {

}
