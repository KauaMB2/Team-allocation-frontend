const mongoose=require('mongoose')

const EmployeesDataSchema=new mongoose.Schema({
    id:Int16Array,
    fullName:String,
    designation:String,
    gender:String,
    teamName:Boolean
})

module.exports=mongoose.model('Employees',EmployeesDataSchema)