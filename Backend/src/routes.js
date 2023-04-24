const express=require('express')//Import express
const routes=express.Router()//Import the Express Router object to perform requests
const TeamController=require('./controllers/AnnotationController')//Get the functions in the file

routes.post('/addEmployee',TeamController.addNewEmployee)//Post function
routes.get('/getEmployeesData',TeamController.getData)//Get function
routes.delete('/removeEmployee',TeamController.deleteEmployee)//Delete function

//Post employees modifications
//Post new employees(Form)
//Remove employees
//Modify employees info