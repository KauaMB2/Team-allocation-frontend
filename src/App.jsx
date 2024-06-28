import Nav from './Nav'
import Employees from './Employees'
import Footer from './Footer'
import NotFound from './NotFound'
import GroupTeamMembers from './GroupTeamMembers'
import AddEmployees from './AddEmployees'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/General.css'
import './styles/CardCollection.css'
import './styles/Forms.css'
import './styles/Navbar.css'
import './styles/Buttons.css'
import './styles/Icons.css'
import 'animate.css';
import api from './services/api'
import { useState, useEffect } from 'react'//Import the Use State Hook
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App=()=>{
  const [showCreateModal,setShowCreateModal]=useState(false)
  const [showTrashModal, setShowTrashModal]=useState(false)
  const [showEditModal, setShowEditModal]=useState(false)
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Team A")//Destructoring assignment
  const [employees, setEmployees] = useState([])//Destructoring assignment
  const fetchEmployees = async () => {
    const employeesList = await api.get("/getEmployeesData")//Get all the employees
    setEmployees(employeesList.data)
    return employeesList.data
  }
  useEffect(() => {
    fetchEmployees()
  }, [])//It is ran just when the page is loaded
  useEffect(() => {//Use the useEffect hook to store JSON data in localStorage
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])//It is ran every time the selectedTeam var is modified
  const getNumberOfEmployees = () => {
    const result=employees.filter((employee) => {
      return employee.teamName === selectedTeam // Return a boolean value
    })
    return result.length
  }
  const handleEditEmployee=async (event)=>{
		event.preventDefault()//It doesnt allow the page be reloaded after submit
    const formData = new FormData(event.target)//Get the form object
		const fullName = formData.get("fullName")//Get form data
    const designation = formData.get("designation")//Get form data
    const gender = formData.get("gender")//Get form data
    const id=formData.get("_id")//Get hidden data
    const employeeEdited=await api.put(`/updateEmployeeData/${id}`,{fullName:fullName,designation:designation,gender:gender})
    if(!(designation==null)&&!(gender==null)){//If the gender and the designation was selected
      setShowEditModal(!showEditModal)//toggle the modal
    }
    fetchEmployees()//Update the screen
    return employeeEdited.data
  }
  const handleNewEmployeeSubmit=async (event)=>{
    event.preventDefault()//It doenst allow the page be reloaded after the submit
    const formData = new FormData(event.target)//Get the form object
    const firstName = formData.get("firstName")//Get form data
    const lastName = formData.get("lastName")//Get form data
    const designation = formData.get("designation")//Get form data
    const gender = formData.get("gender")//Get form data
    const team = formData.get("team")//Get form data
    const jsonData={fullName:firstName+" "+lastName, designation:designation, gender:gender, teamName:team}
    const employeeCreated=await api.post('/addEmployee',jsonData)//Add data in DB
    setTimeout(() => {//Reload the page after 0,05s
      location.reload()//Reload the page
    }, 50)
    return employeeCreated.data
  }
  const handleDelete=async (currentEmployeeName)=>{
    const deletedEmployee=await api.delete(`/removeEmployee/${currentEmployeeName}`)//Remove register
    fetchEmployees()//Update the employees list
    return deletedEmployee
  }
  const handleTeamSelectionChange = (event) => {
    setTeam(event.target.value)//Change the Team state
  }
  const handleEmployeeCardClick = async (event) => {
    if(!event.target.id){//If the card was clicked(Not the icons)
      const transformedEmployees = employees.map(async (employee) =>{
        if(employee._id == event.currentTarget.id){
          if (employee.teamName === selectedTeam){
            const modifiedEmployee=await api.patch(`/changeTeam/${employee._id}/`, {currentTeam: " "})
            return modifiedEmployee.data
          }else{
            const modifiedEmployee=await api.patch(`/changeTeam/${employee._id}/`, {currentTeam: selectedTeam})
            return modifiedEmployee.data
          }
        }else{
          return employee
        }
      })
      setEmployees(await Promise.all(transformedEmployees))//it waits the function return the promise
    }
  }
  return (
    <Router>
      <Nav showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal}></Nav>
      <Routes>
        <Route path="/" element={
          <Employees 
            getNumberOfEmployees={getNumberOfEmployees}
            employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
            showTrashModal={showTrashModal}
            setShowTrashModal={setShowTrashModal} 
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            handleDelete={handleDelete}
            handleEditEmployee={handleEditEmployee}
          />}
        />
        <Route path="/GroupTeamMembers" element={<GroupTeamMembers getNumberOfEmployees={getNumberOfEmployees} employees={employees} selectedTeam={selectedTeam} setTeam={setTeam}/>} />
        <Route path="/addEmployees" element={<AddEmployees handleNewEmployeeSubmit={handleNewEmployeeSubmit}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

// The JSX(JavaScript Xml) is a JS extension that allows write HTML in JavaScript likely the XMl syntax!
// The Transpiler is charge of translate the JSX syntax to original HTML and JavsScript syntax

//const [count, setCount]=useState(0) - It is called "Array Destructoring Syntax". "count", in this case, is a Number and "setCount" is a function to handle the "count".