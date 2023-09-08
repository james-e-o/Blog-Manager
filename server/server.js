const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/api/name',(req,res)=>{
    res.send({name:'Jamiecruise'})
    console.log(req.ips)
})

app.listen(PORT, ()=>{console.log(
    `server is running on designated port @ port:${PORT}`
)})