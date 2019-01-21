const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.POST || 3000

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

/*********************** edit code **********************/
app.get('/', (req, res) => {
    res.send({ status: 'ok' })
})

app.post('/webhook', (req, res) => {
    console.log('---- webhook ----')
    let body = req.body
    let response = {
        status: 'ok',
        body: body
    }
    console.log('Body ==> ')
    console.log(body)
    res.send(response)
})
/*********************** edit code **********************/

app.listen(port, () => {
    console.log(`Run on port ${port}`);
});