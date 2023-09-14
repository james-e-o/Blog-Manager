const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')

const corsOptions = {
    origin:'localhost:2000'
}

app.use(cors(corsOptions))

app.post('/signup',(req, res)=>{

})

app.get('/api/name',(req,res)=>{
    res.send({name:'Jamiecruise', id:20})
    console.log(req.ips)
})

const authenticate = (req ,res, next)=>{

}

app.listen(PORT, ()=>{console.log(
    `server is running on designated port @ port:${PORT}`
)})