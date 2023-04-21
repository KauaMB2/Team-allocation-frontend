const Annotations=require('../models/employeesData')//Import the Models

module.exports={
    async read(request,response){//Get method
        const annotationList=await Annotations.find()//It returns all the registers in the Database
        console.log("Get method: \n"+annotationList)
        return response.json(annotationList)//It returns to the function a JSON object
    },
    async create(request,response){//Post Method
        const {title, notes, priority}=request.body//Destructuring assigment
        console.log("Post method: \n"+notes+title+priority)
        if((!notes) || (!title)){
            return response.status(400).json({error: "Necessário título e nota!"})//Returns a error
        }
        const annotationCreated=await Annotations.create({//It creates the register in MongoDB and return the register
            title,
            notes,
            priority
        })
        return response.json(annotationCreated)//It returns to the function a JSON object
    },
    async delete(request,response){
        const { id }=request.params
        console.log("Delet method: "+request.body)
        const annotationDeleted=await Annotations.findOneAndDelete({_id:id})//IT finds the register using the Id, delets it and returns to the variable
        if (annotationDeleted){//If the request was successfull
            return response.json(annotationDeleted)//It returns to the function a JSON object
        }
        return response.status(401).json({error: "Registro não encontrado!"})
    }
}
