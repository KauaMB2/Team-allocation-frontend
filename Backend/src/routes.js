const express=require('express')//Import express
const routes=express.Router()//Import the Express Router object to perform requests
const TeamController=require('./controllers/TeamController')//Get the functions in the file

routes.post('/addEmployee',TeamController.addNewEmployee)//Post function
routes.get('/getEmployeesData',TeamController.getData)//Get function
routes.delete('/removeEmployee/:fullName',TeamController.deleteEmployee)//Delete function
routes.put('/updateEmployeeData/:id',TeamController.updateEmployeeData)//Update the employees data in DB
routes.patch('/changeTeam/:id',TeamController.changeTeam)
module.exports=routes