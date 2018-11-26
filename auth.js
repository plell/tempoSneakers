const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

const secret = process.env.JWT_SECRET || 'fa783g4fiafisebuskdk'

app.listen(5000, () => console.log('Listening on 5000'))

function extractToken(req,res,next){
    // get auth header
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}

app.get('/api', (req, res)=>{
    res.json({message: 'welcome to the api!!'})
})

app.post('/api/post', extractToken, (req, res) => {
    jwt.verify(req.token, secret, (err, authData) => {
        if (err) res.sendStatus(403)
        else res.json({message:'posted!!', authData})
    })
})

app.post('/api/login', async (req, res) => {
    //mock user
    const user = {
        id: 1,
        firstName: 'david',
        lastName: 'plell'
    }
    const token = await jwt.sign({user},secret, {expiresIn:'120s'})
    if (token) res.json({token})
})

