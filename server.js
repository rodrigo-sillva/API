import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarname', (req, res) => {


        console.log(req)

        res.send('Next Button')
})

app.get('/password', (req, res) => {
    res.send('Okay, welcome back')
})


app.listen(3000)