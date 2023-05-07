const mongoose=require('mongoose')

const EmployeesDataSchema=new mongoose.Schema({
    fullName:{
        type: String,
        unique: true,
        required:true,
    },
    designation:{
        type: String,
        required:true,
    },
    gender:{
        type: String,
        required:true,
    },
    teamName:{
        type: String,
    },
},{collection: 'employeesData'})

module.exports=mongoose.model('Employees',EmployeesDataSchema)
