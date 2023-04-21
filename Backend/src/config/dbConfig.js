const mongoose=require("mongoose")
const dbConfig="mongodb+srv://zkauambbr:zKauaMBBR12345@cluster0.lljri6r.mongodb.net/?retryWrites=true&w=majority"
const connection=mongoose.connect(dbConfig)
module.exports=connection
