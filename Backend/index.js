const express=require('express')
const routes=require("./routes")
require('./config/dbConfig')
const app=express()
const cors=require('cors')
app.use(cors())// cors() is a MIDDLEWARE that adds, in the request header, the necessary information to allow access from different sources.
// An origin is nothing more than the patient's PROTOCOL, SUBDOMAIN, DOMAIN AND PORT. Example: http://api.mysite.io:80
// const corsOptions = {origin: 'http://127.0.0.1:8080'} => This can also be used to set permission for only some specific origins. Right after that, it is necessary to use: app.use(cors(corsOptions))
// Actually, if you build a application in C#, Java, Javascript or any other language, you can perform the request, but, if you try it in the Browser, you cannot, because the browser have cooks and it means
// that a malicious program running in your computer can try, per example, make a requestion in Facebook API to get your datas using your cooks.
// It is the reason why servers can make request between them even doesnt having the same origin, but the browser cannot do that because he have cooks, and it can be used to stole data!!!SO, THE BROWSER BLOCKS THE RESPONSE!
app.use(express.json())//Middleware that allows the express work with JSON data
app.use(routes)//Middleware that loads the routes

app.listen(3333,console.log("Aplicação rodando no http://localhost:3333"))
