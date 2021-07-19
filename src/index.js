const express = require('express')
const app = express()
const port = 3001

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.route('/')
    .get(function (req, res) {
        res.send('Hello World!')
    })

app.route('/bb')
    .get(function (_, res) {
        res.send(`Get Random`)
    })
    .post(function (req, res) {
        res.send(req.body)
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
