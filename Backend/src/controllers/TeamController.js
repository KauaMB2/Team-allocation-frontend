const Employees=require('../models/employeesData')//Import the Models

module.exports={
    async getData(request,response){//Get method
        const annotationList=await Employees.find()//It returns all the registers in the Database
        console.log("Get method: \n"+annotationList)
        return response.json(annotationList)//It returns to the function a JSON object
    },
    async addNewEmployee(request,response){//Post Method
        const {title, notes, priority}=request.body//Destructuring assigment
        
        return response.json(annotationCreated)//It returns to the function a JSON object
    },
    async deleteEmployee(request,response){
        const { id }=request.params
        console.log("Delet method: "+request.body)
        const annotationDeleted=await Employees.findOneAndDelete({_id:id})//IT finds the register using the Id, delets it and returns to the variable
        if (annotationDeleted){//If the request was successfull
            return response.json(annotationDeleted)//It returns to the function a JSON object
        }
        return response.status(401).json({error: "Registro não encontrado!"})
    }
}
