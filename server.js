if (process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

const express = require('express')
const fs = require('fs')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/store',function(req,res){
    fs.readFile('items.json',function(error,data){
        if (error) {
            res.status(500).end()
        } else{
            res.render('store.ejs',{
                items: JSON.parse(data)
            })
            //passing items.json file to store.html = store.ejs
        }
    })
})

app.listen(4000)