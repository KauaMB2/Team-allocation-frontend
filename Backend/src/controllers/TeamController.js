const Employees=require('../models/employeesData')//Import the Models

const routes={
    async getData(request, response){//Get method
        const employeesList=await Employees.find()//It returns all the registers in the Database
        return response.json(employeesList)//It returns to the function a JSON object
    },
    async addNewEmployee(request, response){//Post Method
        console.log(request.body)
        const {fullName, designation, gender}=request.body//Destructuring assigment
        const teamName=""
        if((!fullName)||(!designation)||(!gender)){
            return response.status(400).json({error: "You must fill every inputs"})
        }
        const newEmployeeObject=new Employees({
            fullName,
            designation,
            gender,
            teamName
        })
        try{
            const employeeCreated=await newEmployeeObject.save()//Insert the data in MongoDB
            console.log("(POST)Added new Employee - Route: /addEmployee")
            return response.status(200).json(employeeCreated)//It returns to the function a JSON object
        }catch(error){
            if(error.code==11000){//If the code is 11000(Already have a eregister with this fullName)
                console.log("Register already exists")
                return response.status(401).json({error: "Register already exists!"})
            }else{// Any other error...
                console.log(error)
            }
        }
        return response.status(401).json({error: "Unknown error"})
    },
    async deleteEmployee(request, response){
        const { id }=request.params
        const employeeToDelete=await Employees.findOneAndDelete({_id:id})//IT finds the register using the Id, delets it and returns to the variable
        if (employeeToDelete){//If the request was successfull
            console.log("(DELETE)Employee deleted - Route: /removeEmployee")
            return response.status(200).json(employeeToDelete)//It returns to the function a JSON object
        }
        return response.status(401).json({error: "Register not found!"})
    },
    async updateEmployeeData(request, response){
        const {id}=request.params
        const {fullName, designation, gender}=request.body
        const employee=await Employees.findOne({_id:id})//Try find the register in DB
        if(fullName){//If full name are not void
            employee.fullName=fullName
            employee.designation=designation
            employee.gender=gender
            employee.save()
            return response.status(200).json(employee)
        }
        return response.status(400).json({error: "Unknown error"})
    }
}

module.exports=routes
