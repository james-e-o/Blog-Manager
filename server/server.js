const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const bodyParser = require('body-parser')

const corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/api/',(req, res)=>{
    res.json({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      })
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